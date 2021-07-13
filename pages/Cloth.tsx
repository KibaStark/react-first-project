import Head from 'next/head'
import styles from '../src/composants/Equipement/Equipement.module.css'
import {Header} from '../src/composants/Header/Header'
import {SideBar} from '../src/composants/SideBar/SideBar'
import {Equipement} from '../src/composants/Equipement/Equipement'
import { useRouter } from 'next/router'


export default function Home() {
    const router = useRouter()
    const OnElementClick = (route:string) => {
        router.push(`/${route}`)
      }

var ClothUR=[{
    name:'Doudoune de Galmia', image:'/images/Equipement/Armor/Cloth/Doudoune de Galmia.png'},{
    name:'Manteau de garde du corps', image:'/images/Equipement/Armor/Cloth/Manteau de garde du corps.png'},{
    name:'Manteau sowilo', image:'/images/Equipement/Armor/Cloth/Manteau sowilo.png'},{
    name:'Pagne herculéen', image:'/images/Equipement/Armor/Cloth/Pagne herculéen.png'},{
    name:'Robe adorée', image:'/images/Equipement/Armor/Cloth/Robe adorée.png'},{
    name:'Robe de calculateur', image:'/images/Equipement/Armor/Cloth/Robe de calculateur.png'},{
    name:'Tenue dAuron', image:'/images/Equipement/Armor/Cloth/Tenue dAuron.png'},{
    name:'Tenue de combat de YoRHa', image:'/images/Equipement/Armor/Cloth/Tenue de combat de YoRHa.png'},{
    name:'Tenue de Lasswell', image:'/images/Equipement/Armor/Cloth/Tenue de Lasswell.png'},{
    name:'Tenue de Rain', image:'/images/Equipement/Armor/Cloth/Tenue de Rain.png'},{
    name:'Tenue de Ramza', image:'/images/Equipement/Armor/Cloth/Tenue de Ramza.png'},{
    name:'Tenue de Sakura', image:'/images/Equipement/Armor/Cloth/Tenue de Sakura.png'},{
    name:'Tenue de Yuna', image:'/images/Equipement/Armor/Cloth/Tenue de Yuna.png'},{
    name:'Tunique de platine', image:'/images/Equipement/Armor/Cloth/Tunique de platine.png'},{
    name:'Veste de larriveiste', image:'/images/Equipement/Armor/Cloth/Veste de larriviste.png'},{
    name:'Veste rouge', image:'/images/Equipement/Armor/Cloth/Veste rouge.png'
}]
var ClothMR=[{
    name:'Fides Lacerna', image:'/images/Equipement/Armor/Cloth/Fides Lacerna.png'},{
    name:'Manteau perspicace', image:'/images/Equipement/Armor/Cloth/Manteau perspicace.png'}
    
]
var ClothSR=[{
    name:'Cape lunaire', image:'/images/Equipement/Armor/Cloth/Cape lunaire.png'},{
    name:'Châle du chercheur', image:'/images/Equipement/Armor/Cloth/Châle du chercheur.png'},{
    name:'Châle enneigé', image:'/images/Equipement/Armor/Cloth/Châle enneigé.png'},{
    name:'Robe de lalliance', image:'/images/Equipement/Armor/Cloth/Robe de lalliance.png'
}]
var ClothR=[{
    name:'Robe dérudit', image:'/images/Equipement/Armor/Cloth/Robe dérudit.png'
}]
var ClothN=[{
    name:'Chemise en cuir', image:'/images/Equipement/Armor/Cloth/Chemise en cuir.png'
}]

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




        <div className={styles.equipementContainer}>


            <h3>Cloth</h3>
            <h4>UR</h4>
            <div className={styles.equipement}>
                {ClothUR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>

            <h4>MR</h4>
            <div className={styles.equipement}>
                {ClothMR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            <h4>SR</h4>
            <div className={styles.equipement}>
                {ClothSR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            <h4>R</h4>
            <div className={styles.equipement}>
                {ClothR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            <h4>N</h4>
            <div className={styles.equipement}>
                {ClothN.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            
        </div>
      
      
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}