import React, { FunctionComponent } from 'react'

interface Props {
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const HideButton:FunctionComponent<Props> = ({onClick}) => {
    return (
        <div className="flex justify-center items-center text-white bg-yellow-600 text-5xl w-1/2"
             onClick={onClick}>
            <img className="w-1/2 h-2/3" src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" alt="Puscica" />
        </div>
    )
}
