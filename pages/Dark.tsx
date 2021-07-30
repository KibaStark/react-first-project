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

    const [unitesdarkUR, setUnitesdarkUR] = useState([]);
    useEffect(() =>{
        test()
    }, [])

    const [unitesdarkMR, setUnitesdarkMR] = useState([]);
    useEffect(() =>{
        test2()
    }, [])
    // var unitesURDark=[{
    //     name:'Chuchote', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Chuchote.png'},{
    //     name:'Duane', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Duane.png'},{
    //     name:'Garvall', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Garvall.png'},{
    //     name:'Helena', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Helena.png'},{
    //     name:'Kain', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Kain.png'},{
    //     name:'Gold Stern', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Stern Chevalier Déchu.png'},{ 
    //     name:'Stern Leonis', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Stern Leonis.png'},{
    //     name:'Vinera Fenne', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Vinera Fenne.png'},{
    //     name:'Xiza', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/Xiza.png'}
    //     ]
    //     var unitesMRDark=[{
    //       name:'Gaffgarion', element:'dark', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Gaffgarion.png'},{
    //       name:'Rairyuu', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Rairyuu.png'},{
    //       name:'Shadowlynx', element:'dark', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Shadowlynx.png'},{
    //       name:'Thytas', element:'dark', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Thytas.png'}
    //     ]
        var unitesSRDark=[{
          name:'Lillyla', element:'dark', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Lillyla.png'}
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

        var chimereURDark=[{
            name:'Diabolos', elem:'dark', image:'/images/Chimère/Diabolos.png'},{
            name:'Mur démoniaque', elem:'dark', image:'/images/Chimère/Mur démoniaque.png'},{
            name:'Oméga', elem:'dark', image:'/images/Chimère/Oméga.png'}
            ]
              
              
        var chimereMRDark=[{
            name:'Béhémoth', elem:'dark', image:'/images/Chimère/Béhémoth.png'},{
            name:'Lune de sang', elem:'dark', image:'/images/Chimère/Lune de sang.png'}
            ]

            const test = async () => {
                let response = await axios.get('http://localhost:8080/api/Unites/dark/UR');
                setUnitesdarkUR(response.data);
            }
            const test2 = async () => {
                let response = await axios.get('http://localhost:8080/api/Unites/dark/MR');
                setUnitesdarkMR(response.data);
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

            <div className={styles.uniteContainer}>
            <h4>Dark UR</h4>
            <Element elem='dark' name='dark' ></Element>
            <h5>Unités UR</h5>
                
                <div className={styles.elemDarkContainer}>
                {unitesdarkUR.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>
            <h5>Atout vision UR</h5>
                <div className={styles.AV2}>
                    {atvURDark.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
                </div>
            <h5>Chimère UR</h5>
                <div className={styles.chimere}>
                    {chimereURDark.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                </div>
            <h4>Dark MR</h4>
            <h5>Unités MR</h5>
                <div className={styles.elemDarkContainer}>
                {unitesdarkMR.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>
            <h5>Atout vision MR</h5>
                <div className={styles.AV2}>
                    {atvMRDark.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
                </div>
            <h5>Chimère MR</h5>
                <div className={styles.chimere}>
                    {chimereMRDark.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                </div>
            <h4>Dark SR</h4>
                <div className={styles.elemDarkContainer}>
                {unitesSRDark.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>
            </div>

        </div>
    )
}