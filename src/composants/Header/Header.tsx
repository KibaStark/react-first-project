import {FC} from "react"
import styles from './Header.module.css'
import { useRouter } from 'next/router'

interface Props {}

export const Header:FC<Props> = ({}) => {
  const router = useRouter()
  const OnElementClick = (route) => {
      router.push(`/${route}`)
    }
    return <div>

    <header className={styles.header}>
      <h1 className={styles.AedesLumina}>Aedes Lumina
      <button className={styles.ButtonEloria} onClick={() => {OnElementClick('Eloria')}}>Eloria</button>
      <button className={styles.ButtonAirole} onClick={() => {OnElementClick('Airole')}}>Airole</button>
      <button className={styles.ButtonIvalice} onClick={() => {OnElementClick('Ivalice')}}>Ivalice</button></h1>
    </header>
    
  </div>


  }