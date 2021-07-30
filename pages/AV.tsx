import Head from 'next/head'
import {Header} from '../src/composants/Header/Header'
import {SideBar} from '../src/composants/SideBar/SideBar'
import {AV} from '../src/composants/AV/AV'
import {Element} from '../src/composants/Unite/Element'
import styles from '../src/composants/AV/AV.module.css'

export default function Home() {

    var atvURFire=[{
      name:'Guerriers des ténèbres', elem:'fire', image:'/images/AV/Guerriers des ténèbres.png'},{
      name:'Ifrit', elem:'fire', image:'/images/AV/Ifrit.png'},{
      name:'Les gardiens des cristaux', elem:'fire', image:'/images/AV/Les gardiens des cristaux.png'},{
      name:'Mont Leonis, le roi des lions', elem:'fire', image:'/images/AV/Mont Leonis, le roi des lions.png'},{
      name:'Phénix', elem:'fire', image:'/images/AV/Phénix.png'},{
      name:'Rencontre héroïque', elem:'fire', image:'/images/AV/Rencontre héroïque.png'},{
      name:'Sentinelle', elem:'fire', image:'/images/AV/Sentinelle.png'},{
      name:'Un simple brin dherbe', elem:'fire', image:'/images/AV/Un simple brin dherbe.png'}
    ]

    var atvMRFire=[{
      name:'Marilith', elem:'fire', image:'/images/AV/MR/Marilith.png'},{
      name:'Mobius de lespoir et des illusions', elem:'fire', image:'/images/AV/MR/Mobius de lespoir et des illusions.png'},{
      name:'Reine Lamia', elem:'fire', image:'/images/AV/MR/Reine Lamia.png'},{
      name:'Une vie séveille', elem:'fire', image:'/images/AV/MR/Une vie séveille.png'},{
      name:'Voix de la vengeance', elem:'fire', image:'/images/AV/MR/Voix de la vengeance.png'}
    ]

    var atvURIce=[{
      name:'Fenrir', elem:'ice', image:'/images/AV/Fenrir.png'},{
      name:'Freezus', elem:'ice', image:'/images/AV/Freezus.png'},{
      name:'Masque de la perfidie', elem:'ice', image:'/images/AV/Masque de la perfidie.png'},{
      name:'Odin', elem:'ice', image:'/images/AV/Odin.png'},{
      name:'Shiva', elem:'ice', image:'/images/AV/Shiva.png'}
    ]

    var atvMRIce=[{
      name:'Concentration optimale', elem:'ice', image:'/images/AV/MR/Concentration optimale.png'},{
      name:'Glacial', elem:'ice', image:'/images/AV/MR/Glacial.png'},{
      name:'Les quatre seigneurs de guerre', elem:'ice', image:'/images/AV/MR/Les quatre seigneurs de guerre.png'},{
      name:'Mog de la nuit hivernale', elem:'ice', image:'/images/AV/MR/Mog de la nuit hivernale.png'},{
      name:'Un adversaire imbattable', elem:'ice', image:'/images/AV/MR/Un adversaire imbattable.png'}
    ]

    var atvURWind=[{
      name:'Exorciser les démons', elem:'wind', image:'/images/AV/Exorciser les démons.png'},{
      name:'Mobius du désespoir et de la vérité', elem:'wind', image:'/images/AV/Mobius du désespoir et de la vérité.png'},{
      name:'Moment paisible', elem:'wind', image:'/images/AV/Moment paisible.png'},{
      name:'NieR Automata', elem:'wind', image:'/images/AV/NieR Automata.png'},{
      name:'Nouveau sujet de recherche', elem:'wind', image:'/images/AV/Nouveau sujet de recherche.png'},{
      name:'Tétra-Sylphides', elem:'wind', image:'/images/AV/Tétra-Sylphides.png'},{
      name:'Typhon', elem:'wind', image:'/images/AV/Typhon.png'}
    ]

    var atvMRWind=[{
      name:'Chocobo', elem:'wind', image:'/images/AV/MR/Chocobo.png'},{
      name:'Espoirs inutiles', elem:'wind', image:'/images/AV/MR/Espoirs inutiles.png'},{
      name:'Faux-semblant', elem:'wind', image:'/images/AV/MR/Faux-semblant.png'},{
      name:'Morbol', elem:'wind', image:'/images/AV/MR/Morbol.png'}
    ]

    var atvUREarth=[{
      name:'Caelum', elem:'earth', image:'/images/AV/Caelum.png'},{
      name:'Coeur insondable', elem:'earth', image:'/images/AV/Coeur insondable.png'},{
      name:'Golem', elem:'earth', image:'/images/AV/Golem.png'},{
      name:'Héros le temps dun rêve', elem:'earth', image:'/images/AV/Héros le temps dun rêve.png'},{
      name:'Hurlement résonnant', elem:'earth', image:'/images/AV/Hurlement résonnant.png'},{
      name:'Le lion solitaire', elem:'earth', image:'/images/AV/Le lion solitaire.png'},{
      name:'Titan', elem:'earth', image:'/images/AV/Titan.png'}
    ]

    var atvMREarth=[{
      name:'Admiratrices rivales', elem:'earth', image:'/images/AV/MR/Admiratrices rivales.png'},{
      name:'Ordres confidentiels', elem:'earth', image:'/images/AV/MR/Ordres confidentiels.png'},{
      name:'Otyugh', elem:'earth', image:'/images/AV/MR/Otyugh.png'},{
      name:'Par-delà les terres', elem:'earth', image:'/images/AV/MR/Par-delà les terres.png'},{
      name:'Pommes du souvenir', elem:'earth', image:'/images/AV/MR/Pommes du souvenir.png'},{
      name:'Une année daventures', elem:'earth', image:'/images/AV/MR/Une année daventures.png'}
    ]

    var atvURLightning=[{
      name:'éclosion dans la nuit noire', elem:'lightning', image:'/images/AV/éclosion dans la nuit noire.png'},{
      name:'égéon', elem:'lightning', image:'/images/AV/égéon.png'},{
      name:'Ramuh', elem:'lightning', image:'/images/AV/Ramuh.png'},{
      name:'Rêve de Frederika', elem:'lightning', image:'/images/AV/Rêve de Frederika.png'}
    ]

    var atvMRLightning=[{
      name:'Rubeus', elem:'earth', image:'/images/AV/MR/Rubeus.png'},{
      name:'Coeurl', elem:'earth', image:'/images/AV/MR/Coeurl.png'},{
      name:'Déclaration damour', elem:'earth', image:'/images/AV/MR/Déclaration damour.png'},{
      name:'La magicienne jalouse', elem:'earth', image:'/images/AV/MR/La magicienne jalouse.png'},{
      name:'Tomberry', elem:'earth', image:'/images/AV/MR/Tomberry.png'},{
      name:'Voix de lépéiste raffiné', elem:'earth', image:'/images/AV/MR/Voix de lépéiste raffiné.png'}
    ]

    var atvURWater=[{
      name:'A cheval sous la neige', elem:'water', image:'/images/AV/A cheval sous la neige.png'},{
      name:'Astrologue extralucide', elem:'water', image:'/images/AV/Astrologue extralucide.png'},{
      name:'Célébration de lhiver', elem:'water', image:'/images/AV/Célébration de lhiver.png'},{
      name:'Léviathan', elem:'water', image:'/images/AV/Léviathan.png'},{
      name:'Merci pour vos votes !', elem:'water', image:'/images/AV/Merci pour vos votes !.png'},{
      name:'Sirène', elem:'water', image:'/images/AV/Sirène.png'},{
      name:'Suteki Da Ne', elem:'water', image:'/images/AV/Suteki Da Ne.png'}
    ]

    var atvMRWater=[{
      name:'En quête de myrrhe', elem:'water', image:'/images/AV/MR/En quête de myrrhe.png'},{
      name:'Ensorceleur', elem:'water', image:'/images/AV/MR/Ensorceleur.png'},{
      name:'Tranquillité éphémère', elem:'water', image:'/images/AV/MR/Tranquillité éphémère.png'},{
      name:'Un monde inconnu', elem:'water', image:'/images/AV/MR/Un monde inconnu.png'}
    ]

    var atvURLight=[{
      name:'Solidius', elem:'light', image:'/images/AV/Solidius.png'},{
      name:'Bahamut', elem:'light', image:'/images/AV/Bahamut.png'},{
      name:'Carbuncle', elem:'light', image:'/images/AV/Carbuncle.png'},{
      name:'En un éclair', elem:'light', image:'/images/AV/En un éclair.png'},{
      name:'Héritier des Béouve', elem:'light', image:'/images/AV/Héritier des Béouve.png'},{
      name:'Porteur dombre', elem:'light', image:'/images/AV/Porteur dombre.png'},{
      name:'Précieuse dot', elem:'light', image:'/images/AV/Précieuse dot.png'},{
      name:'Rencontre inoubliable', elem:'light', image:'/images/AV/Rencontre inoubliable.png'}
    ]

    var atvMRLight=[{
      name:'Assassins de léglise', elem:'light', image:'/images/AV/MR/Assassins de léglise.png'},{
      name:'Chocobo rouge', elem:'light', image:'/images/AV/MR/Chocobo rouge.png'},{
      name:'Gardes au blanc manteau', elem:'light', image:'/images/AV/MR/Gardes au blanc manteau.png'},{
      name:'Géant de fer', elem:'light', image:'/images/AV/MR/Géant de fer.png'}
    ]

    var atvURDark=[{
      name:'Diabolos', elem:'dark', image:'/images/AV/Diabolos.png'},{
        name:'Dragon à deux têtes', elem:'dark', image:'/images/AV/Dragon à deux têtes.png'},{
        name:'Et lélève surpassa le maître', elem:'dark', image:'/images/AV/Et lélève surpassa le maître.png'},{
        name:'Le banquet des floraisons éphémères', elem:'dark', image:'/images/AV/Le banquet des floraisons éphémères.png'},{
        name:'Les demoiselles aux roses', elem:'dark', image:'/images/AV/Les demoiselles aux roses.png'},{
        name:'Mur démoniaque', elem:'dark', image:'/images/AV/Mur démoniaque.png'},{
        name:'Oméga', elem:'dark', image:'/images/AV/Oméga.png'},{
        name:'Ténèbres irresistibles', elem:'dark', image:'/images/AV/Ténèbres irresistibles.png'},{
        name:'Une rose noir au milieu du chaos', elem:'dark', image:'/images/AV/Une rose noir au milieu du chaos.png'}
    ]

    var atvMRDark=[{
      name:'Affrontement fatal', elem:'dark', image:'/images/AV/MR/Affrontement fatal.png'},{
      name:'Apaiser son esprit', elem:'dark', image:'/images/AV/MR/Apaiser son esprit.png'},{
      name:'Béhémoth', elem:'dark', image:'/images/AV/MR/Béhémoth.png'},{
      name:'charme irrésistible', elem:'dark', image:'/images/AV/MR/charme irrésistible.png'},{
      name:'Lune de sang', elem:'dark', image:'/images/AV/MR/Lune de sang.png'},{
      name:'Shadowbringers', elem:'dark', image:'/images/AV/MR/Shadowbringers.png'}
    ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <SideBar/>

      
      <div className={styles.AV}>
        <h4>Atout Vision UR</h4>
        <Element elem='fire' name='fire'></Element>
        <div className={styles.AV2}>
          {atvURFire.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='ice' name='ice'></Element>
        <div className={styles.AV2}>
          {atvURIce.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='wind' name='wind'></Element>
        <div className={styles.AV2}>
          {atvURWind.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='earth' name='earth'></Element>
        <div className={styles.AV2}>
          {atvUREarth.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='lightning' name='lightning'></Element>
        <div className={styles.AV2}>
          {atvURLightning.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='water' name='water'></Element>
        <div className={styles.AV2}>
          {atvURWater.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='light' name='light'></Element>
        <div className={styles.AV2}>
          {atvURLight.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='dark' name='dark'></Element>
        <div className={styles.AV2}>
          {atvURDark.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>

        <h4>Atout vision MR</h4>
        
        <Element elem='fire' name='fire'></Element>
        <div className={styles.AV2}>
          {atvMRFire.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='ice' name='ice'></Element>
        <div className={styles.AV2}>
          {atvMRIce.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='wind' name='wind'></Element>
        <div className={styles.AV2}>
          {atvMRWind.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='earth' name='earth'></Element>
        <div className={styles.AV2}>
          {atvMREarth.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='lightning' name='lightning'></Element>
        <div className={styles.AV2}>
          {atvMRLightning.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='water' name='water'></Element>
        <div className={styles.AV2}>
          {atvMRWater.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='light' name='light'></Element>
        <div className={styles.AV2}>
          {atvMRLight.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>
        <Element elem='dark' name='dark'></Element>
        <div className={styles.AV2}>
          {atvMRDark.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
        </div>

      </div>
      
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
