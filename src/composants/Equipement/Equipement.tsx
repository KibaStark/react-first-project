import {FC} from "react"
import Image from 'next/image'
import styles from './Equipement.module.css'

interface Props {
    name: string;
    image: string;
}

export const Equipement:FC<Props> = ({name, image='/images/unnamed.jpg'}) => {

    return (<div>
        
        <span style={{color:"#ffffff"}}>{name}</span>
        <Image height={135} width={125}  src={image} alt="Picture of the author" />
    </div>
    )
}