import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {Unite, Props as UniteProps} from '../../src/composants/Unite/Unite'
import {Element} from '../../src/composants/Unite/Element'
import {Chimere} from '../../src/composants/Chimere/Chimere'
import {Header} from '../../src/composants/Header/Header'
import {SideBar} from '../../src/composants/SideBar/SideBar'
import {AV} from '../../src/composants/AV/AV'
import { useState, useEffect } from 'react'
const axios = require('axios');
import {UserProfile, Props as UserProfileProps} from '../../src/composants/UserProfile/UserProfile'
import {UserUnite, Props as UserUniteProps} from '../../src/composants/UserProfile/UserUnite'
import { useRouter } from 'next/router'

export default function Home() {

    const router = useRouter()
    const { id } = router.query

    const connexionBox = async () => {
        console.log('connexionBox')
        let response = await axios.get(`http://localhost:8080/api/getUnite/${id}`);
        localStorage.setItem('Box', JSON.stringify(response.data.data))
        console.log(response);
    }

    useEffect(()=>{
        connexionBox();
    },[])
 

    const [userUnitesFireUR, setUserUnitesFireUR] = useState<UniteProps[]>([]);


    const [unitesfireMR, setUnitesfireMR] = useState([]);
    useEffect(() =>{
        test2()
    }, [])

    // const [userunitesfireUR, setUserUnitesfireUR] = useState([]);
    // useEffect(() =>{
    //     test3()
    // }, [])

    // var unitesURFire=[{
    // name:'Delita', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/Delita.png'},{
    // name:'Eldo', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Eldo.png'},{
    // name:'King mont', element:'fire', sniv:'/niv:', niv:120, image:'/images/Unite/King mont.png'},{
    // name:'Luartha', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Luartha.png'},{
    // name:'Machalie Hiver', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Machalie Hiver.png'},{
    // name:'Rain', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Rain.png'},{
    // name:'Rhaldor', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Rhaldor.png'}
    // ]

    // var unitesMRFire=[{
    // name:'Adelard', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Adelard.png'},{
    // name:'Lilyth', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Lilyth.png'},{
    // name:'Margritte', element:'fire', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Margritte.png'},{
    // name:'Seymore', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Seymore.png'},{
    // name:'Yshtola', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Yshtola.png'}
    // ]

    var unitesSRFire=[{
    name:'Naiah', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/SR/Naiah.png'}
    ]
    
    var unitesRFire=[{
    name:'Micha??', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/R/Micha??.png'}
    ]

    var atvURFire=[{
        name:'Guerriers des t??n??bres', elem:'fire', image:'/images/AV/Guerriers des t??n??bres.png'},{
        name:'Ifrit', elem:'fire', image:'/images/AV/Ifrit.png'},{
        name:'Les gardiens des cristaux', elem:'fire', image:'/images/AV/Les gardiens des cristaux.png'},{
        name:'Mont Leonis, le roi des lions', elem:'fire', image:'/images/AV/Mont Leonis, le roi des lions.png'},{
        name:'Ph??nix', elem:'fire', image:'/images/AV/Ph??nix.png'},{
        name:'Rencontre h??ro??que', elem:'fire', image:'/images/AV/Rencontre h??ro??que.png'},{
        name:'Sentinelle', elem:'fire', image:'/images/AV/Sentinelle.png'},{
        name:'Un simple brin dherbe', elem:'fire', image:'/images/AV/Un simple brin dherbe.png'}
      ]

      var atvMRFire=[{
        name:'Marilith', elem:'fire', image:'/images/AV/MR/Marilith.png'},{
        name:'Mobius de lespoir et des illusions', elem:'fire', image:'/images/AV/MR/Mobius de lespoir et des illusions.png'},{
        name:'Reine Lamia', elem:'fire', image:'/images/AV/MR/Reine Lamia.png'},{
        name:'Une vie s??veille', elem:'fire', image:'/images/AV/MR/Une vie s??veille.png'},{
        name:'Voix de la vengeance', elem:'fire', image:'/images/AV/MR/Voix de la vengeance.png'}
      ]

    var chimereURFire=[{
    name:'Ifrit', elem:'fire', image:'/images/Chim??re/Ifrit.png'},{
    name:'Ph??nix', elem:'fire', image:'/images/Chim??re/Ph??nix.png'},{
    name:'Sentinelle', elem:'fire', image:'/images/Chim??re/Sentinelle.png'}
        ]  

    var chimereMRFire=[{
    name:'Marilith', elem:'Fire', image:'/images/Chim??re/Marilith.png'},{
    name:'Reine lamia', elem:'fire', image:'/images/Chim??re/Reine lamia.png'}
        ]

    var chimereSRFire=[{
    name:'Bombo', elem:'fire', image:'/images/Chim??re/Bombo.png'}
        ]

    const getUnites = async () => {
        let response = await axios.get(`http://localhost:8080/api/getUnite/${id}`);
        (console.log(response));
        setUserUnitesFireUR(response.data);
    }

    const test2 = async () => {
        let response = await axios.get('http://localhost:8080/api/Unites/fire/MR');
        (console.log(response));
        setUnitesfireMR(response.data);
    }

    useEffect(()=>{
        var localSession = localStorage.getItem('session')
        if(localSession !=null) {
          let sessionObject = JSON.parse(localSession)
         if (sessionObject){
          setSession(sessionObject)
         }
        
      }
    }, []);
  
      const [session, setSession ] = useState<UserProfileProps>();

    useEffect(()=>{
        if (session !=null){
            getUnites()
        }
    }, [session])




    // const [userUnitesFireUR, setUserUnitesFireUR ] = useState<UserUniteProps>([]);

    // useEffect(() =>{
    //     test3()
    // }, [])

    // const test3 = async () => {
    //     let response = await axios.get('http://localhost:8080/api/getUnite');
    //     (console.log(response));
    //     setUserUnitesfireUR(response.data);
    // }










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
            <h4>FIRE UR</h4>
            <Element elem='fire' name='fire' ></Element>
            <h5>Unit??s UR</h5>
                
                <div className={styles.elemFireContainer}>
                {userUnitesFireUR.map((unite:UniteProps, index:number) => (<Unite name={unite.name} id={unite.id} element={unite.element} level={unite.level} key={index} image={unite.image} isInputShown={false}/>))}
                </div>
            <h5>Atout vision UR</h5>
                <div className={styles.AV2}>
                    {atvURFire.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
                </div>
            <h5>Chim??re UR</h5>
                <div className={styles.chimere}>
                    {chimereURFire.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                </div>
            <h4>FIRE MR</h4>
            <h5>Unit??s MR</h5>
                <div className={styles.elemFireContainer}>
                {unitesfireMR.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>
            <h5>Atout vision MR</h5>
                <div className={styles.AV2}>
                    {atvMRFire.map((av, index) => (<AV name={av.name} element={av.elem} key={index} image={av.image}/>))}
                </div>
            <h5>Chim??re MR</h5>
                <div className={styles.chimere}>
                    {chimereMRFire.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                </div>
            <h4>FIRE SR</h4>
                <div className={styles.elemFireContainer}>
                {unitesSRFire.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>
                <div className={styles.chimere}>
                    {chimereSRFire.map((chimere, index) => (<Chimere name={chimere.name} element={chimere.elem} key={index} image={chimere.image}/>))}
                </div>
            <h4>FIRE R</h4>
                <div className={styles.elemFireContainer}>
                {unitesRFire.map((unite, index) => (<Unite name={unite.name} element={unite.element} sniv={unite.sniv} niv={unite.niv} key={index} image={unite.image}/>))}
                </div>

            </div>
        </div>
        
    )
}