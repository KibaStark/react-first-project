import {FC} from "react"

export interface Props {
        id?: number;
        pseudo: string;
        email?:string;
        grade:string;
}

export const UserProfile:FC<Props> = ({id, pseudo, email, grade }) => {

    return <div>
        <span>{id}{pseudo}{email}{grade}</span>

    </div>
}