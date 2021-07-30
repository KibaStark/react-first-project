import {FC} from "react"
import styles from './Header.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {UserProfile, Props as UserProfileProps} from '../UserProfile/UserProfile'


interface Props {}

export const Header:FC<Props> = ({}) => {
  const router = useRouter()
  const OnElementClick = (route: string) => {
      router.push(`/${route}`)
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

    return <div>

    <header className={styles.header}>
      <UserProfile pseudo={session?.pseudo || 'vous n\'êtes pas connecté'}/>
      <h1 className={styles.AedesLumina}>Aedes Lumina</h1>
      <div className={styles.headerButton}>
      <button className={styles.ButtonEloria} onClick={() => {OnElementClick('Eloria')}}>Eloria</button>
      <button className={styles.ButtonAirole} onClick={() => {OnElementClick('Airole')}}>Airole</button>
      <button className={styles.ButtonIvalice} onClick={() => {OnElementClick('Ivalice')}}>Ivalice</button>
      <button className={styles.deco} onClick={() => {OnElementClick(''), localStorage.clear()}}>Déconnexion</button>
      </div>
    </header>
    
  </div>


  }