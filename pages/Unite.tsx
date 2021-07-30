import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Unite} from '../src/composants/Unite/Unite'
import {Element} from '../src/composants/Unite/Element'
import {Header} from '../src/composants/Header/Header'
import {SideBar} from '../src/composants/SideBar/SideBar'

export default function Home() {

  var unitesURFire=[{
    name:'Delita', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/Delita.png'},{
    name:'Eldo', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Eldo.png'},{
    name:'King mont', element:'fire', sniv:'/niv:', niv:120, image:'/images/Unite/King mont.png'},{
    name:'Luartha', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Luartha.png'},{
    name:'Machalie Hiver', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Machalie Hiver.png'},{
    name:'Rain', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Rain.png'},{
    name:'Rhaldor', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Rhaldor.png'}
  ]

  var unitesMRFire=[{
    name:'Adelard', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Adelard.png'},{
    name:'Lilyth', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Lilyth.png'},{
    name:'Margritte', element:'fire', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Margritte.png'},{
    name:'Seymore', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Seymore.png'},{
    name:'Yshtola', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Yshtola.png'}
  ]

  var unitesSRFire=[{
    name:'Naiah', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Naiah.png'}
  ]

  var unitesRFire=[{
    name:'Michaé', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/R/Michaé.png'}
  ]

  var unitesURIce=[{
    name:'Agrias',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Agrias.png'},{
    name:'Auron',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Auron.png'},{
    name:'Fryevia',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Fryevia.png'},{
    name:'Gilgamesh',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Gilgamesh.png'},{
    name:'Laswell',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Laswell.png'},{
    name:'Mediena',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Mediena.png'},{
    name:'Rosa',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Rosa.png'},{
    name:'Saliah Romantique',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Saliah Romantique.png'},{
    name:'Viktora',  element:'ice', sniv:'/niv:', niv:0,  image:'/images/Unite/Viktora.png'}
  ]

  var unitesMRIce=[{
    name:'Chel', element:'ice', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Chel.png'},{
    name:'Khory Wezett', element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Khory Wezett.png'},{
    name:'Nasha', element:'ice', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Nasha.png'}
  ]

  var unitesSRIce=[{
    name:'Serjes', element:'ice', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Serjes.png'},{
    name:'Valaïde', element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/SR/Valaïde.png'}
  ]

  var unitesURWind=[{
    name:'2B', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/2B.png'},{
    name:'Ayaka', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/Ayaka.png'},{
    name:'Corwell', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/Corwell.png'},{
    name:'Howlett', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/Howlett.png'},{
    name:'Lillyla Halloween', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/Lillyla Halloween.png'},{
    name:'Lucia', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/Lucia.png'},{
    name:'Oldoa', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/Oldoa.png'},{
    name:'Yelma', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/Yelma.png'}
  ]

  var unitesMRWind=[{
    name:'Cadia', element:'wind', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Cadia.png'},{
    name:'Dario Hourne', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Dario Hourne.png'},{
    name:'Helena Leonis', element:'wind', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Helena Leonis.png'},{
    name:'Loreila', element:'wind', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Loreila.png'}
  ]

  var unitesSRWind=[{
    name:'Sosha', element:'wind', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Sosha.png'}
  ]

  var unitesRWind=[{
    name:'Mia', element:'wind', sniv:'/niv:', niv:99, image:'/images/Unite/R/Mia.png'}
  ]

  var unitesUREarth=[{
    name:'Aileen', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/Aileen.png'},{
    name:'Kilphe', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/Kilphe.png'},{
    name:'Kitone', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/Kitone.png'},{
    name:'Luelle', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/Luelle.png'},{
    name:'Rairyuu Halloween', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/Rairyuu Halloween.png'}
  ]

  var unitesMREarth=[{
    name:'Dorando', element:'earth', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Dorando.png'},{
    name:'éthéa', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/MR/éthéa.png'},{
    name:'Liviale', element:'earth', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Liviale.png'},{
    name:'Lorenzo', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Lorenzo.png'},{
    name:'Mont Leonis', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Mont Leonis.png'},{
    name:'Mustadio', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Mustadio.png'}
  ]

  var unitesSREarth=[{
    name:'Murmure', element:'earth', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Murmure.png'},{
    name:'Beilo', element:'earth', sniv:'/niv:', niv:0, image:'/images/Unite/SR/Beilo.png'}
  ]

  var unitesURLightning=[{
    name:'9S', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/9S.png'},{
    name:'Frederika', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/Frederika.png'},{
    name:'NivLu', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/NivLu.png'},{
    name:'Orlandeau', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/Orlandeau.png'},{
    name:'Skahal', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/Skahal.png'}
  ]

  var unitesMRLightning=[{
    name:'Alym', element:'lightning', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Alym.png'},{
    name:'Marie-luke', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Marie-luke.png'},{
    name:'Owe', element:'lightning', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Owe.png'},{
    name:'Raviesse', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Raviesse.png'},{
    name:'Saliah', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Saliah.png'},{
    name:'Schuzelt', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Schuzelt.png'},{
    name:'Sylma', element:'lightning', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Sylma.png'}
  ]

  var unitesSRLightning=[{
    name:'Vadim', element:'lightning', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Vadim.png'}
  ]

  var unitesRLightning=[{
    name:'Learte', element:'lightning', sniv:'/niv:', niv:99, image:'/images/Unite/R/Learte.png'}
  ]

  var unitesURWater=[{
    name:'Graziella', element:'water', sniv:'/niv:', niv:0, image:'/images/Unite/Graziella.png'},{
    name:'Ildyra', element:'water', sniv:'/niv:', niv:0, image:'/images/Unite/Ildyra.png'},{
    name:'Miranda', element:'water', sniv:'/niv:', niv:0, image:'/images/Unite/Miranda.png'},{
    name:'Moore', element:'water', sniv:'/niv:', niv:0, image:'/images/Unite/Moore.png'},{
    name:'Ramada Hiver', element:'water', sniv:'/niv:', niv:0, image:'/images/Unite/Ramada Hiver.png'},{
    name:'Tidus', element:'water', sniv:'/niv:', niv:0, image:'/images/Unite/Tidus.png'},{
    name:'Vinera Hiver', element:'water', sniv:'/niv:', niv:0, image:'/images/Unite/Vinera Hiver.png'}
    ]

  var unitesMRWater=[{
    name:'Creysse', element:'water', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Creysse.png'},{
    name:'Ramada', element:'water', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Ramada.png'},{
    name:'Tyrrell', element:'water', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Tyrrell.png'}
  ]

  var unitesSRWater=[{
    name:'Sévéro', element:'water', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Sévéro.png'},{
    name:'Yuni', element:'water', sniv:'/niv:', niv:0, image:'/images/Unite/SR/Yuni.png'}
  ]

  var unitesNWater=[{
    name:'Zazan', element:'water', sniv:'/niv:', niv:99, image:'/images/Unite/N/Zazan.png'}
  ]

  var unitesURLight=[{
    name:'Camillo', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Camillo.png'},{
    name:'Cecil', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Cecil.png'},{
    name:'Elsirelle', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Elsirelle.png'},{
    name:'Engelbert', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Engelbert.png'},{
    name:'Machalie', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Machalie.png'},{
    name:'Ramza', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Ramza.png'},{
    name:'Rob', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Rob.png'},{
    name:'Sakura', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Sakura.png'},{
    name:'Thancred', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Thancred.png'},{
    name:'Wol', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Wol.png'},{
    name:'Yuna', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Yuna.png'}
    ]

    var unitesMRLight=[{
      name:'Grâce', element:'light', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Grâce.png'},{
      name:'Elzandra', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Elzandra.png'},{
      name:'Fina', element:'light', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Fina.png'},{
      name:'Mariale', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Mariale.png'},{
      name:'Vistral', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Vistral.png'}
    ]

    var unitesSRLight=[{
      name:'Phoebe', element:'light', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Phoebe.png'}
    ]

  var unitesURDark=[{
    name:'Chuchote', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Chuchote.png'},{
    name:'Duane', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Duane.png'},{
    name:'Garvall', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Garvall.png'},{
    name:'Helena', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Helena.png'},{
    name:'Kain', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Kain.png'},{
    name:'Gold Stern', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Stern Chevalier Déchu.png'},{ 
    name:'Stern Leonis', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Stern Leonis.png'},{
    name:'Vinera Fenne', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Vinera Fenne.png'},{
    name:'Xiza', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Xiza.png'}
    ]

    var unitesMRDark=[{
      name:'Gaffgarion', element:'dark', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Gaffgarion.png'},{
      name:'Rairyuu', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Rairyuu.png'},{
      name:'Shadowlynx', element:'dark', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Shadowlynx.png'},{
      name:'Thytas', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Thytas.png'}
    ]

    var unitesSRDark=[{
      name:'Lillyla', element:'dark', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Lillyla.png'}
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

            <div className={styles.uniteContainer}>
                <h4>Unite UR</h4>
                <Element elem='fire' name='fire' ></Element>
                <div className={styles.elemFireContainer}>
                {unitesURFire.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='ice' name='ice'></Element>
                <div className={styles.elemIceContainer}>
                {unitesURIce.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='wind' name='wind'></Element>
                <div className={styles.elemWindContainer}>
                {unitesURWind.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='earth' name='earth'></Element>
                <div className={styles.elemEarthContainer}>
                {unitesUREarth.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='lightning' name='lightning'></Element>
                <div className={styles.elemLightningContainer}>
                {unitesURLightning.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='water' name='water'></Element>
                <div className={styles.elemWaterContainer}>
                {unitesURWater.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='light' name='light'></Element>
                <div className={styles.elemLightContainer}>
                {unitesURLight.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='dark' name='dark'></Element>
                <div className={styles.elemDarkContainer}>
                {unitesURDark.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <h4>Unités MR</h4>
                
                <Element elem='fire' name='fire' ></Element>
                <div className={styles.elemFireContainer}>
                {unitesMRFire.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='ice' name='ice'></Element>
                <div className={styles.elemIceContainer}>
                {unitesMRIce.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='wind' name='wind'></Element>
                <div className={styles.elemWindContainer}>
                {unitesMRWind.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='earth' name='earth'></Element>
                <div className={styles.elemEarthContainer}>
                {unitesMREarth.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='lightning' name='lightning'></Element>
                <div className={styles.elemLightningContainer}>
                {unitesMRLightning.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='water' name='water'></Element>
                <div className={styles.elemWaterContainer}>
                {unitesMRWater.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='light' name='light'></Element>
                <div className={styles.elemLightContainer}>
                {unitesMRLight.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='dark' name='dark'></Element>
                <div className={styles.elemDarkContainer}>
                {unitesMRDark.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <h4>Unités SR</h4>

                <Element elem='fire' name='fire' ></Element>
                <div className={styles.elemFireContainer}>
                {unitesSRFire.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='ice' name='ice'></Element>
                <div className={styles.elemIceContainer}>
                {unitesSRIce.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='wind' name='wind'></Element>
                <div className={styles.elemWindContainer}>
                {unitesSRWind.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='earth' name='earth'></Element>
                <div className={styles.elemEarthContainer}>
                {unitesSREarth.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='lightning' name='lightning'></Element>
                <div className={styles.elemLightningContainer}>
                {unitesSRLightning.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='water' name='water'></Element>
                <div className={styles.elemWaterContainer}>
                {unitesSRWater.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='light' name='light'></Element>
                <div className={styles.elemLightContainer}>
                {unitesSRLight.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='dark' name='dark'></Element>
                <div className={styles.elemDarkContainer}>
                {unitesSRDark.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

            <h4>Unités R</h4>

            <Element elem='fire' name='fire' ></Element>
                <div className={styles.elemFireContainer}>
                {unitesRFire.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='wind' name='wind'></Element>
                <div className={styles.elemWindContainer}>
                {unitesRWind.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <Element elem='lightning' name='lightning'></Element>
                <div className={styles.elemLightningContainer}>
                {unitesRLightning.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

                <h4>Unités N</h4>

                <Element elem='water' name='water'></Element>
                <div className={styles.elemWaterContainer}>
                {unitesNWater.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>
        </div>
      </div>
    )
    }