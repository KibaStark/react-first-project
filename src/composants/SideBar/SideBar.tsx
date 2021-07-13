import {Element} from '../Unite/Element'
import {FC} from "react"
import styles from './SideBar.module.css'
import { useRouter } from 'next/router'

interface Props {}


export const SideBar:FC<Props> = ({}) => {
    const router = useRouter()
    const OnElementClick = (route) => {
        router.push(`/${route}`)
      }
  return ( <div>
    <div className={styles.MenuContainer}>

    <button className={styles.ButtonMain} onClick={() => {OnElementClick('')}}>Main</button>

    <button className={styles.ButtonMain} onClick={() => {OnElementClick('Equipement')}}>Equipement</button>

    <button className={styles.ButtonChimère} onClick={() => {OnElementClick('Chimere')}}>Chimère</button>

    <button className={styles.ButtonAV} onClick={() => {OnElementClick('AV')}}>Atout Vision</button>

    <button className={styles.ButtonUnite} onClick={() => {OnElementClick('Unite')}}>Unite</button>

    <button className={styles.ButtonUniteFire} onClick={() => {OnElementClick('Fire')}}>
    <Element elem='fire' name='fire' ></Element>
    </button>

    <button className={styles.ButtonUniteIce} onClick={() => {OnElementClick('Ice')}}>
    <Element elem='ice' name='ice'></Element>
    </button>

    <button className={styles.ButtonUniteWind} onClick={() => {OnElementClick('Wind')}}>
    <Element elem='wind' name='wind'></Element>
    </button>

    <button className={styles.ButtonUniteEarth} onClick={() => {OnElementClick('Earth')}}>
    <Element elem='earth' name='earth'></Element>
    </button>

    <button className={styles.ButtonUniteLightning} onClick={() => {OnElementClick('Lightning')}}>
    <Element elem='lightning' name='lightning'></Element>
    </button>

    <button className={styles.ButtonUniteWater} onClick={() => {OnElementClick('Water')}}>
    <Element elem='water' name='water'></Element>
    </button>

    <button className={styles.ButtonUniteLight} onClick={() => {OnElementClick('Light')}}>
    <Element elem='light' name='light'></Element>
    </button>

    <button className={styles.ButtonUniteDark} onClick={() => {OnElementClick('Dark')}}>
    <Element elem='dark' name='dark'></Element>
    </button>

    
    </div>
</div>
  )
}