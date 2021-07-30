import {FC} from "react"
import { useState, useEffect } from 'react'
import React, { Component } from 'react';
const axios = require('axios');
import { useRouter } from 'next/router'




interface Props {}
export const Login:FC<Props> = ({}) => {

  const router = useRouter()
  const OnElementClick = (route: string) => {
      router.push(`/${route}`)
    }

  const [email, setEmail ] = useState('');
  const onEmailChange = (event:any) => {setEmail(event.target.value)};

  const [password, setPassword ] = useState('');
  const onPasswordChange = (event:any) => {setPassword(event.target.value)};

    const connexion = async () => {
        try{
        let response = await axios.post('http://localhost:8080/api/login', {email, password});
        localStorage.setItem('session', JSON.stringify(response.data.data))
        {OnElementClick('Main')}
        }
        
        catch (error) {
          if (error = 'code 500'){
            return alert ('veuillez mettre un e-mail et mot de passe valide')
          }
        }
      }
      



  return <form>
<p><input type="email" name="email" placeholder="Email" value={email} onChange={onEmailChange}  required/></p>
<p><input type="password" name="password" placeholder="Mot de passe" value={password} onChange={onPasswordChange} required/></p>
<p><input type="button" value="Connexion" onClick={connexion}/></p>
</form>

}