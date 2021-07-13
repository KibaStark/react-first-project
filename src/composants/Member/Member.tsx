import { normalizeConfig } from "next/dist/next-server/server/config-shared"
import {FC} from "react"
import Image from 'next/image'

interface Props {
  name: string;
  image: string;
}
export const Member:FC<Props> = ({name, image='/images/unnamed.jpg'}) => {
  return <div>
    <span style={{backgroundColor:"#ffffff"}}> {name}</span>
    <Image height={125} width={200}  src={image} alt="Picture of the author" />
  </div>
}