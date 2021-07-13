import Head from 'next/head'
import styles from '../src/composants/Equipement/Equipement.module.css'
import {Header} from '../src/composants/Header/Header'
import {SideBar} from '../src/composants/SideBar/SideBar'
import { useRouter } from 'next/router'



export default function Home() {

    const router = useRouter()
    const OnElementClick = (route:string) => {
        router.push(`/${route}`)
      }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <SideBar/>

      
        <div className={styles.equipementContainer}>
            <h3>Arme</h3>
            <button className={styles.ButtonAxe} onClick={() => {OnElementClick('Axe')}}>Axe</button>
            <button className={styles.ButtonBook} onClick={() => {OnElementClick('Book')}}>Book</button>
            <button className={styles.ButtonBow} onClick={() => {OnElementClick('Bow')}}>Bow</button>
            <button className={styles.ButtonDagger} onClick={() => {OnElementClick('Dagger')}}>Dagger</button>
            <button className={styles.ButtonFist} onClick={() => {OnElementClick('Fist')}}>Fist</button>
            <button className={styles.ButtonGlove} onClick={() => {OnElementClick('Glove')}}>Glove</button>
            <button className={styles.ButtonGreatSword} onClick={() => {OnElementClick('GreatSword')}}>GreatSword</button>
            <button className={styles.ButtonGun} onClick={() => {OnElementClick('Gun')}}>Gun</button>
            <button className={styles.ButtonKatana} onClick={() => {OnElementClick('Katana')}}>Katana</button>
            <button className={styles.ButtonMace} onClick={() => {OnElementClick('Mace')}}>Mace</button>
            <button className={styles.ButtonNinjaBlade} onClick={() => {OnElementClick('NinjaBlade')}}>NinjaBlade</button>
            <button className={styles.ButtonRod} onClick={() => {OnElementClick('Rod')}}>Rod</button>
            <button className={styles.ButtonSpear} onClick={() => {OnElementClick('Spear')}}>Spear</button>
            <button className={styles.ButtonSword} onClick={() => {OnElementClick('Sword')}}>Sword</button>

            <h3>Armor</h3>
            <button className={styles.ButtonArmor} onClick={() => {OnElementClick('Armor')}}>Armor</button>
            <button className={styles.ButtonCloth} onClick={() => {OnElementClick('Cloth')}}>Cloth</button>
            <button className={styles.ButtonHat} onClick={() => {OnElementClick('Hat')}}>Hat</button>
            <button className={styles.ButtonHelm} onClick={() => {OnElementClick('Helm')}}>Helm</button>
            <button className={styles.ButtonShield} onClick={() => {OnElementClick('Shield')}}>Shield</button>

            <h3>Accessory</h3>
            <button className={styles.ButtonAccessory} onClick={() => {OnElementClick('Accessory')}}>Accessory</button>

        </div>
      
      
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
