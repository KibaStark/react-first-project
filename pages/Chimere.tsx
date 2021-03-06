import Head from 'next/head'
import styles from '../src/composants/Chimere/Chimere.module.css'
import {Header} from '../src/composants/Header/Header'
import {SideBar} from '../src/composants/SideBar/SideBar'
import {Chimere} from '../src/composants/Chimere/Chimere'
import {Element} from '../src/composants/Unite/Element'

export default function Home() {

  var chimereURFire=[{
    name:'Ifrit', elem:'fire', image:'/images/Chimère/Ifrit.png'},{
    name:'Phénix', elem:'fire', image:'/images/Chimère/Phénix.png'},{
    name:'Sentinelle', elem:'fire', image:'/images/Chimère/Sentinelle.png'}
        ]  

    var chimereMRFire=[{
    name:'Marilith', elem:'Fire', image:'/images/Chimère/Marilith.png'},{
    name:'Reine lamia', elem:'fire', image:'/images/Chimère/Reine lamia.png'}
        ]

    var chimereSRFire=[{
    name:'Bombo', elem:'fire', image:'/images/Chimère/Bombo.png'}
        ]

    var chimereURIce=[{
      name:'Fenrir', elem:'ice', image:'/images/Chimère/Fenrir.png'},{
      name:'Shiva', elem:'ice', image:'/images/Chimère/Shiva.png'}
        ]

    var chimereMRIce=[{
        name:'Glacial', elem:'ice', image:'/images/Chimère/Glacial.png'},{
        name:'Mog hiver', elem:'ice', image:'/images/Chimère/Mog hiver.png'}
        ]

    var chimereSRIce=[{
        name:'Oeil flottant', elem:'ice', image:'/images/Chimère/Oeil flottant.png'}
        ]

    var chimereURWind=[{
      name:'Tétra-Sylphides', elem:'wind', image:'/images/Chimère/Tétra-Sylphides.png'},{
      name:'Typhon', elem:'wind', image:'/images/Chimère/Typhon.png'}
        
        ]
    
    var chimereMRWind=[{
      name:'Chocobo', elem:'wind', image:'/images/Chimère/Chocobo.png'},{
      name:'Morbol', elem:'wind', image:'/images/Chimère/Morbol.png'}
        ]
      
    var chimereSRWind=[{
      name:'Zu', elem:'wind', image:'/images/Chimère/Zu.png'}
        ]

    var chimereUREarth=[{
      name:'Golem', elem:'earth', image:'/images/Chimère/Golem.png'},{
      name:'Titan', elem:'earth', image:'/images/Chimère/Titan.png'}
        ]

    var chimereMREarth=[{
    name:'Otyugh', elem:'earth', image:'/images/Chimère/Otyugh.png'}
        ]
    
    var chimereSREarth=[{
      name:'Pampa', elem:'earth', image:'/images/Chimère/Pampa.png'}
        ]

    var chimereURLightning=[{
      name:'Egéon', elem:'lightning', image:'/images/Chimère/Egéon.png'},{
      name:'Ramuh', elem:'lightning', image:'/images/Chimère/Ramuh.png'}
        ]

    var chimereMRLightning=[{
        name:'Coeurl', elem:'lightning', image:'/images/Chimère/Freezus.png'},{
        name:'Tomberry', elem:'lightning', image:'/images/Chimère/Tomberry.png'}
        ]

    var chimereSRLightning=[{
        name:'Ogre', elem:'lightning', image:'/images/Chimère/Ogre.png'}
        ]

    var chimereURWater=[{
      name:'Léviathan', elem:'water', image:'/images/Chimère/Léviathan.png'},{
      name:'Sirène', elem:'water', image:'/images/Chimère/Sirène.png'}
        ]

    var chimereMRWater=[{
        name:'Ensorceleur', elem:'water', image:'/images/Chimère/Ensorceleur.png'}
        ]

    var chimereURLight=[{
      name:'Carbuncle', elem:'light', image:'/images/Chimère/Carbuncle.png'},{
      name:'Dragon à deux têtes', elem:'light', image:'/images/Chimère/Dragon à deux têtes.png'},{
      name:'Freezus', elem:'light', image:'/images/Chimère/Freezus.png'},{
      name:'Odin', elem:'light', image:'/images/Chimère/Odin.png'}
        ]
    
    var chimereMRLight=[{
      name:'Chocobo rouge', elem:'light', image:'/images/Chimère/Chocobo rouge.png'},{
      name:'Géant de fer', elem:'light', image:'/images/Chimère/Géant de fer.png'}
        ]

    var chimereURDark=[{
      name:'Diabolos', elem:'dark', image:'/images/Chimère/Diabolos.png'},{
      name:'Mur démoniaque', elem:'dark', image:'/images/Chimère/Mur démoniaque.png'},{
      name:'Oméga', elem:'dark', image:'/images/Chimère/Oméga.png'}
        ]
            
    var chimereMRDark=[{
        name:'Béhémoth', elem:'dark', image:'/images/Chimère/Béhémoth.png'},{
        name:'Lune de sang', elem:'dark', image:'/images/Chimère/Lune de sang.png'}
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

      <div className={styles.chimereContainer}>

                <h3>Chimère UR</h3>
                <div className={styles.chimere}>
                <div className={styles.elemFireContainer}>
                <Element elem='fire' name='fire'></Element>
                    {chimereURFire.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemIceContainer}>
                <Element elem='ice' name='ice'></Element>
                    {chimereURIce.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemWindContainer}>
                <Element elem='wind' name='wind'></Element>
                    {chimereURWind.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemEarthContainer}>
                <Element elem='earth' name='earth'></Element>
                    {chimereUREarth.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemLightningContainer}>
                <Element elem='lightning' name='lightning'></Element>
                    {chimereURLightning.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemWaterContainer}>
                <Element elem='water' name='water'></Element>
                    {chimereURWater.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemLightContainer}>
                <Element elem='light' name='light'></Element>
                    {chimereURLight.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemDarkContainer}>
                <Element elem='dark' name='dark'></Element>
                    {chimereURDark.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                </div>
                
                <h3>Chimère MR</h3>
                <div className={styles.chimere}>
                <div className={styles.elemFireContainer}>
                <Element elem='fire' name='fire'></Element>
                    {chimereMRFire.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemIceContainer}>
                <Element elem='ice' name='ice'></Element>
                    {chimereMRIce.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemWindContainer}>
                <Element elem='wind' name='wind'></Element>
                    {chimereMRWind.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemEarthContainer}>
                <Element elem='earth' name='earth'></Element>
                    {chimereMREarth.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemLightningContainer}>
                <Element elem='lightning' name='lightning'></Element>
                    {chimereMRLightning.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemWaterContainer}>
                <Element elem='water' name='water'></Element>
                    {chimereMRWater.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemLightContainer}>
                <Element elem='light' name='light'></Element>
                    {chimereMRLight.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemDarkContainer}>
                <Element elem='dark' name='dark'></Element>
                    {chimereMRDark.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>

                </div>

                <h3>Chimère SR</h3>
                <div className={styles.chimere}>
                <div className={styles.elemFireContainer}>
                <Element elem='fire' name='fire'></Element>
                    {chimereSRFire.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemIceContainer}>
                <Element elem='ice' name='ice'></Element>
                    {chimereSRIce.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemWindContainer}>
                <Element elem='wind' name='wind'></Element>
                    {chimereSRWind.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemEarthContainer}>
                <Element elem='earth' name='earth'></Element>
                    {chimereSREarth.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>
                    <div className={styles.elemLightningContainer}>
                <Element elem='lightning' name='lightning'></Element>
                    {chimereSRLightning.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                    </div>

                </div>
      
      </div>
      
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
