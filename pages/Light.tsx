import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Unite} from '../src/composants/Unite/Unite'
import {Element} from '../src/composants/Unite/Element'
import {Chimere} from '../src/composants/Chimere/Chimere'
import {Header} from '../src/composants/Header/Header'
import {SideBar} from '../src/composants/SideBar/SideBar'
import {AV} from '../src/composants/AV/AV'
import { useState, useEffect } from 'react'
const axios = require('axios');

export default function Home() {

    const [uniteslightUR, setUniteslightUR] = useState([]);
    useEffect(() =>{
        test()
    }, [])

    const [uniteslightMR, setUniteslightMR] = useState([]);
    useEffect(() =>{
        test2()
    }, [])

    // var unitesURLight=[{
    //     name:'Camillo', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Camillo.png'},{
    //     name:'Cecil', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Cecil.png'},{
    //     name:'Elsirelle', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Elsirelle.png'},{
    //     name:'Engelbert', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Engelbert.png'},{
    //     name:'Machalie', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Machalie.png'},{
    //     name:'Ramza', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Ramza.png'},{
    //     name:'Rob', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Rob.png'},{
    //     name:'Sakura', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Sakura.png'},{
    //     name:'Thancred', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Thancred.png'},{
    //     name:'Wol', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Wol.png'},{
    //     name:'Yuna', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/Yuna.png'}
    //     ]

//     var unitesMRLight=[{
//       name:'Grâce', element:'light', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Grâce.png'},{
//       name:'Elzandra', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Elzandra.png'},{
//       name:'Fina', element:'light', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Fina.png'},{
//       name:'Mariale', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Mariale.png'},{
//       name:'Vistral', element:'light', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Vistral.png'}
//     ]
    var unitesSRLight=[{
        name:'Phoebe', element:'light', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Phoebe.png'}
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

        const test = async () => {
            let response = await axios.get('http://localhost:8080/api/Unites/light/UR');
            setUniteslightUR(response.data);
        }
        const test2 = async () => {
            let response = await axios.get('http://localhost:8080/api/Unites/light/MR');
            setUniteslightMR(response.data);
        }
        
var chimereSRLight=[{}]
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
            <h4>Light UR</h4>
            <Element elem='light' name='light' ></Element>
            <h5>Unités UR</h5>
                
                <div className={styles.elemLightContainer}>
                {uniteslightUR.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>
            <h5>Atout vision UR</h5>
                <div className={styles.AV2}>
                    {atvURLight.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
                </div>
            <h5>Chimère UR</h5>
                <div className={styles.chimere}>
                    {chimereURLight.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                </div>
            <h4>Light MR</h4>
            <h5>Unités MR</h5>
                <div className={styles.elemLightContainer}>
                {uniteslightMR.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>
            <h5>Atout vision MR</h5>
                <div className={styles.AV2}>
                    {atvMRLight.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
                </div>
            <h5>Chimère MR</h5>
                <div className={styles.chimere}>
                    {chimereMRLight.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                </div>
            <h4>Light SR</h4>
                <div className={styles.elemLightContainer}>
                {unitesSRLight.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>
            </div>
        </div>
    )
}