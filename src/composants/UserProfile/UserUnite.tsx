import {FC} from "react"

export interface Props {
        id: number;
        user_id: number;
        unite_id: number;
}

export const UserUnite:FC<Props> = ({id, user_id, unite_id }) => {

    return <div>
        <span>{id}{user_id}{unite_id}</span>

    </div>
}