import { normalizeConfig } from "next/dist/next-server/server/config-shared"
import {FC} from "react"
import Image from 'next/image'
const axios = require('axios');
import { useRouter } from 'next/router'

export interface Props {
  id:number;
  pseudo: string;
  grade: string;
  image: string;
}
export const Member:FC<Props> = ({id, pseudo, grade, image='/images/unnamed.jpg'}) => {

const router = useRouter()
const boxUser = (route: string) => {
    router.push(`/${route}`)
  }
  
  const connexionBox = async () => {
      try{
        boxUser(`user/${id}`);
      let response = await axios.get('http://localhost:8080/api/getUnite/{user_id}');
      localStorage.setItem('Box', JSON.stringify(response.data.data))
      }
      catch (error) {
        if (error = 'code 500'){
          return alert ('Connexion à la box impossible')
        }
      }
    }


        return <div>
    
          <form>
    
            <p><input type="button" value={pseudo} onClick={connexionBox} /> {id}</p> <br/>
            
          </form>
    
          <Image height={125} width={200}  src={image} alt="Picture of the author" /> <br/>
    
        </div>
      }