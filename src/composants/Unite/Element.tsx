import { normalizeConfig } from "next/dist/next-server/server/config-shared"
import {FC} from "react"
import Image from 'next/image'

interface Props {
  elem: string;
  name: string;
}

export const Element:FC<Props> = ({elem, name}) => {
    var image='test';
    switch (elem){
        case 'fire':
            image = '/images/element/fire.png'
            break
        case 'ice':
            image ='/images/element/ice.png'
            break
        case 'dark':
            image ='/images/element/dark.png'
            break
        case 'earth':
            image ='/images/element/earth.png'
            break
        case 'light':
            image ='/images/element/light.png'
            break
        case 'lightning':
            image ='/images/element/lightning.png'
            break
        case 'water':
            image ='/images/element/water.png'
            break
        case 'wind':
            image ='/images/element/wind.png'
            break
        default:
            image= '/images/element/fire.png'
    }
  return <div>

  <span >{name}</span>
  <Image height={40} width={40}  src={image} alt="Picture of the author" />
  
</div>
}