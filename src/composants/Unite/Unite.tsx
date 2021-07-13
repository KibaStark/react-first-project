import { normalizeConfig } from "next/dist/next-server/server/config-shared"
import {FC} from "react"
import Image from 'next/image'
import {Element} from "./Element"
import React, {useState } from 'react';

interface Props {
  name: string;
  image: string;
  element:string;
  sniv:string;
  niv:number;
}

export const Unite:FC<Props> = ({name, sniv, niv,  element, image='/images/unnamed.jpg'}) => {
  
  return <div>
  <span style={{backgroundColor:"#ffffff"}}>{name}{sniv}{niv}</span>
  
  <Image height={100} width={100}  src={image} alt="Picture of the author" />
  <Element name={name} elem={element}></Element>
  
</div>
}