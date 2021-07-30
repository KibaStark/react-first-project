import {FC} from "react"
import { useState, useEffect } from 'react'
const axios = require('axios');
import { useRouter } from 'next/router'



interface Props {}
export const Inscription:FC<Props> = ({}) => {

    const router = useRouter()
    const OnElementClick = (route: string) => {
        router.push(`/${route}`)
      }

    const [pseudo, setPseudo ] = useState('');
    const onPseudoChange = (event:any) => {setPseudo(event.target.value)};

    const [email, setEmail ] = useState('');
    const onEmailChange = (event:any) => {setEmail(event.target.value)};

    const [password, setPassword ] = useState('');
    const onPasswordChange = (event:any) => {setPassword(event.target.value)};

    const [passwordConfirmation, setPasswordConfirmation ] = useState('');
    const onPasswordConfirmationChange = (event:any) => {setPasswordConfirmation(event.target.value)};

    const inscription = async () => {
        if (password === passwordConfirmation) {
        try{
        let response = await axios.post('http://localhost:8080/api/inscription', {pseudo:pseudo, email:email, password:password, password_confirmation:passwordConfirmation});
        {OnElementClick('')}
        }
        catch (error) {
          if (error = 'code 500'){
            return alert ('Veuillez entrer une adresse email et un mot de passe valide')
          }
          }
        } else {
          return alert('Les deux mots de passe ne sont pas identique')
        }
      }



  return <form>
<p><input type="string" name="pseudo" placeholder="pseudo" value={pseudo} onChange={onPseudoChange} required/></p>
<p><input type="email" name="email" placeholder="Email" value={email} onChange={onEmailChange} required/></p>
<p><input type="password" name="password" placeholder="Mot de passe" min="4" value={password} onChange={onPasswordChange} required/></p>
<p><input type="password" name="passwordConfirmation" placeholder="Mot de passe (confirmation)" value={passwordConfirmation} onChange={onPasswordConfirmationChange} required/></p>
<p><input type="button" value="M'incrire" onClick={inscription}/></p>
</form>

}