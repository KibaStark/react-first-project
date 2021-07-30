import { normalizeConfig } from "next/dist/next-server/server/config-shared"
import {FC} from "react"
import Image from 'next/image'
import {Element} from "./Element"
import React, {useState, useEffect } from 'react';
const axios = require('axios');
import styles from '../../../styles/Home.module.css'
import {UserProfile, Props as UserProfileProps} from '../UserProfile/UserProfile'

export interface Props {
  isInputShown:boolean;
  id:number;
  name: string;
  image: string;
  element:string;
  level:number;
}

export const Unite:FC<Props> = ({isInputShown=true, id, name, level,  element, image='/images/unnamed.jpg'}) => {
  const [levelUp, setLevelUp ] = useState(level);
  const onLevelUpChange = (event:any) => {setLevelUp(event.target.value)};

  const [iD, setId ] = useState(id);
  const onIdChange = (event:any) => {setId(event.target.value)};


  const changeUniteLevel = async () => {
    try{
      await axios.post('http://localhost:8080/api/sessionUniteLevel', {iD:parseInt(iD), levelUp:parseInt(levelUp)});
      getUnites();
      }
    catch (error) {
      if (error){
        return alert ('erreur')
      }
    }
  }

  useEffect(()=>{
    var localSession = localStorage.getItem('session')
    if(localSession !=null) {
      let sessionObject = JSON.parse(localSession)
     if (sessionObject){
      setSession(sessionObject)
     }
    
  }
}, []);

  const [session, setSession ] = useState<UserProfileProps>();

  const getUnites = async () => {
    let response = await axios.get(`http://localhost:8080/api/getUnite/${session.id}`);
    setUserUnitesFireUR(response.data);
}

const [userUnitesFireUR, setUserUnitesFireUR] = useState([]);
  


  return <div className={styles.divUnite}>
    <span>
    {name} <br/> <br/>
    <Image height={100} width={100}  src={image} alt="Picture of the author" /> <br/>
    level : {levelUp} - {id}
    {
      isInputShown && (
        <form>
        <p><input type='number' name="id" placeholder="id" value={iD} onChange={onIdChange}></input></p>
        <p><input type='number' name="level" placeholder="level" value={levelUp} onChange={onLevelUpChange}/></p>
        <p><input type="button" value="change - level" onClick={changeUniteLevel}/></p>
      </form>
      )
    }

    </span> 
</div>
}