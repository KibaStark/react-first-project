import {FC} from "react"
import Image from 'next/image'
import {Element} from "../Unite/Element"

interface Props {
    name: string;
    element:string;
    image: string;
}

export const Chimere:FC<Props> = ({name, element, image='/images/unnamed.jpg'}) => {

    return (<div>
        <Image height={150} width={150}  src={image} alt="Picture of the author" />
        <Element name={name} elem={element}></Element>
    </div>
    )
}