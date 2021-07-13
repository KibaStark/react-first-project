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

var AccessoryUR=[{
    name:'Âme de Thamasa', image:'/images/Equipement/Accessory/Âme de Thamasa.png'},{
    name:'Anneau dalexandrite', image:'/images/Equipement/Accessory/Anneau dalexandrite.png'},{
    name:'Anneau de la mer', image:'/images/Equipement/Accessory/Anneau de la mer.png'},{
    name:'Anneau des flammes', image:'/images/Equipement/Accessory/Anneau des flammes.png'},{
    name:'Barrette de Rosa', image:'/images/Equipement/Accessory/Barrette de Rosa.png'},{
    name:'Bottes ensorcelées', image:'/images/Equipement/Accessory/Bottes ensorcelées.png'},{
    name:'Boucles doreilles de Chocoflan', image:'/images/Equipement/Accessory/Boucles doreilles de Chocoflan.png'},{
    name:'Bracelet éblouissant', image:'/images/Equipement/Accessory/Bracelet éblouissant.png'},{
    name:'Brassard de protection', image:'/images/Equipement/Accessory/Brassard de protection.png'},{
    name:'Broche de la paix', image:'/images/Equipement/Accessory/Broche de la paix.png'},{
    name:'Cape du dieu-foudre', image:'/images/Equipement/Accessory/Cape du dieu-foudre.png'},{
    name:'Cape du gardien', image:'/images/Equipement/Accessory/Cape du gardien.png'},{
    name:'Chaussure de Tidus', image:'/images/Equipement/Accessory/Chaussure de Tidus.png'},{
    name:'Chouchou en forme de coeur', image:'/images/Equipement/Accessory/Chouchou en forme de coeur.png'},{
    name:'Cloche psychophonique', image:'/images/Equipement/Accessory/Cloche psychophonique.png'},{
    name:'Collier de la jeune fille dacier', image:'/images/Equipement/Accessory/Collier de la jeune fille dacier.png'},{
    name:'Décoration en adamantine', image:'/images/Equipement/Accessory/Décoration en adamantine.png'},{
    name:'Diadème sacré', image:'/images/Equipement/Accessory/Diadème sacré.png'},{
    name:'épine de la rose noire', image:'/images/Equipement/Accessory/épine de la rose noire.png'},{
    name:'épingle à cheveux de mage', image:'/images/Equipement/Accessory/épingle à cheveux de mage.png'},{
    name:'épingle ouvragée', image:'/images/Equipement/Accessory/épingle ouvragée.png'},{
    name:'Escarpins envoûtants', image:'/images/Equipement/Accessory/Escarpins envoûtants.png'},{
    name:'Gantelet de la foudre', image:'/images/Equipement/Accessory/Gantelet de la foudre.png'},{
    name:'Gantelet de Saiga', image:'/images/Equipement/Accessory/Gantelet de Saiga.png'},{
    name:'Gantelets de la lumière', image:'/images/Equipement/Accessory/Gantelets de la lumière.png'},{
    name:'Lunettes de combats de YoRHa', image:'/images/Equipement/Accessory/Lunettes de combats de YoRHa.png'},{
    name:'Manteau du roi des Lions', image:'/images/Equipement/Accessory/Manteau du roi des Lions.png'},{
    name:'Marche sacrée', image:'/images/Equipement/Accessory/Marche sacrée.png'},{
    name:'Masque de zombie', image:'/images/Equipement/Accessory/Masque de zombie.png'},{
    name:'Masque du clan V', image:'/images/Equipement/Accessory/Masque du clan V.png'},{
    name:'Masque magilithe', image:'/images/Equipement/Accessory/Masque magilithe.png'},{
    name:'Noeud victorieux', image:'/images/Equipement/Accessory/Noeud victorieux.png'},{
    name:'Pagne Oldoa', image:'/images/Equipement/Accessory/Pagne Oldoa.png'},{
    name:'Pendentif de Tidus', image:'/images/Equipement/Accessory/Diadème sacré.png'},{
    name:'Ruban', image:'/images/Equipement/Accessory/Ruban.png'},{
    name:'Ruban aux clochettes', image:'/images/Equipement/Accessory/Ruban aux clochettes.png'},{
    name:'Sandales dHermès', image:'/images/Equipement/Accessory/Sandales dHermès.png'},{
    name:'Serre-tête à grelots', image:'/images/Equipement/Accessory/Serre-tête à grelots.png'},{
    name:'Serre-tête de loup-garou', image:'/images/Equipement/Accessory/Serre-tête de loup-garou.png'},{
    name:'Tristella', image:'/images/Equipement/Accessory/Tristella.png'},{
    name:'Tunique dElfe', image:'/images/Equipement/Accessory/Tunique dElfe.png'}
]
var AccessoryMR=[{
    name:'Bras de la noirceur éternelle', image:'/images/Equipement/Accessory/Bras de la noirceur éternelle.png'},{
    name:'Diadème du soldat serpent', image:'/images/Equipement/Accessory/Diadème du soldat serpent.png'},{
    name:'Emblème de lérosion', image:'/images/Equipement/Accessory/Emblème de lérosion.png'},{
    name:'Emblème du lion', image:'/images/Equipement/Accessory/Emblème du lion.png'},{
    name:'Fil magique', image:'/images/Equipement/Accessory/Fil magique.png'},{
    name:'Insigne du boxeur', image:'/images/Equipement/Accessory/Insigne du boxeur.png'},{
    name:'Lunette rondes argentées', image:'/images/Equipement/Accessory/Lunette rondes argentées.png'},{
    name:'Marquise', image:'/images/Equipement/Accessory/Marquise.png'},{
    name:'Pod 153', image:'/images/Equipement/Accessory/Pod 153.png'},{
    name:'Sortilège', image:'/images/Equipement/Accessory/Sortilège.png'}
    
]
var AccessorySR=[{
    name:'Anneau de fée', image:'/images/Equipement/Accessory/Anneau de fée.png'},{
    name:'Bottes du dragon', image:'/images/Equipement/Accessory/Bottes du dragon.png'},{
    name:'Cache-oeil de magilithe', image:'/images/Equipement/Accessory/Cache-oeil de magilithe.png'},{
    name:'Jolie capuche', image:'/images/Equipement/Accessory/Jolie capuche.png'
}]
var AccessoryR=[{
    name:'Bague de héros', image:'/images/Equipement/Accessory/Bague de héros.png'},{
    name:'Ruban raffiné', image:'/images/Equipement/Accessory/Ruban raffiné.png'
}]
var AccessoryN=[{
    name:'Anneau Rhinopierre', image:'/images/Equipement/Accessory/Anneau Rhinopierre.png'},{
    name:'Capuche ours', image:'/images/Equipement/Accessory/Capuche ours.png'
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


            <h3>Accessory</h3>
            <h4>UR</h4>
            <div className={styles.equipement}>
                {AccessoryUR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>

            <h4>MR</h4>
            <div className={styles.equipement}>
                {AccessoryMR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            <h4>SR</h4>
            <div className={styles.equipement}>
                {AccessorySR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            <h4>R</h4>
            <div className={styles.equipement}>
                {AccessoryR.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            <h4>N</h4>
            <div className={styles.equipement}>
                {AccessoryN.map((equipement, index) => (<Equipement name={equipement.name} key={index} image={equipement.image}/>))}
            </div>
            
        </div>
      
      
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}