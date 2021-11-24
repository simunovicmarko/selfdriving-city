import React, { FunctionComponent } from 'react'
import Ludek  from "../Photos/Ludek.svg";
interface Props {
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Person:FunctionComponent<Props> = ({onClick}) => {
    return (
        <div style={{backgroundColor: '#FF4A11'}} id="LoginButton" className="w-24 h-24 absolute right-0 rounded-r-2xl flex justify-center items-center z-10"
             onClick={onClick}>
            <img src={Ludek} alt="Ludek"/>
        </div>
    )
}
