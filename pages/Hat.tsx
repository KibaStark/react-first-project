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

var HatUR=[{
    name:'Béret de sage', image:'/images/Equipement/Armor/Hat/Béret de sage.png'},{
    name:'Capuche féline', image:'/images/Equipement/Armor/Hat/Capuche féline.png'},{
    name:'Lune kaléidoscopique', image:'/images/Equipement/Armor/Hat/Lune kaléidoscopique.png'},{
    name:'Lunettes danalyse', image:'/images/Equipement/Armor/Hat/Lunettes danalyse.png'
}]
var HatMR=[{
    name:'Chapeau de sage', image:'/images/Equipement/Armor/Hat/Chapeau de sage.png'},{
    name:'Masque de loup', image:'/images/Equipement/Armor/Hat/Masque de loup.png'}
]
var HatSR=[{
    name:'Bandana de Rubeus', image:'/images/Equipement/Armor/Hat/Bandana de Rubeus.png'},{
    name:'Bonnet de dévotion', image:'/images/Equipement/Armor/Hat/Bonnet de dévotion.png'},{
    name:'Bonnet temporel', image:'/images/Equipement/Armor/Hat/Bonnet temporel.png'},{
    name:'Diadème', image:'/images/Equipement/Armor/Hat/Diadème.png'
}]
var HatR=[{
    name:'Bandana de shinobi', image:'/images/Equipement/Armor/Hat/Bandana de shinobi.png'},{
    name:'Chapeau de magicien', image:'/images/Equipement/Armor/Hat/Chapeau de magicien.png'},{
    name:'Chapeau de sorcier', image:'/images/Equipement/Armor/Hat/Chapeau de sorcier.png'
}]
var HatN=[{
    name:'Chapeau de cuir', image:'/images/Equipement/Armor/Hat/Chapeau de cuir.png'
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


            <h3>Hat</h3>
            <h4>UR</h4>
            <div className={styles.equipement}>
                {HatUR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>

            <h4>MR</h4>
            <div className={styles.equipement}>
                {HatMR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            <h4>SR</h4>
            <div className={styles.equipement}>
                {HatSR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            <h4>R</h4>
            <div className={styles.equipement}>
                {HatR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            <h4>N</h4>
            <div className={styles.equipement}>
                {HatN.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            
        </div>
      
      
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}