import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    imageUrl?: string,
    title: string,
    linkPath?: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
}
//Image, Naslov
export const Tile: FunctionComponent<Props> = ({ title, imageUrl, onClick, linkPath }) => {

    // let neki: boolean = true;
    // linkPath ? linkPath = linkPath : linkPath = "/";
    return (
        <a href={linkPath} className="flex justify-center items-center  w-full h-full border border-gray-300 bg-gray-500 bg-opacity-10 text-white font-bold ">

            <div
                style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: `100% 100%`, backgroundRepeat: `no-repeat` }}
                className="flex justify-center items-center  w-full h-full  bg-gray-500 bg-opacity-10 text-white font-bold "
                onClick={onClick}
                id="Tile">
                <h1 className="text-white">{title}</h1>
            </div>
        </a>
    )
}
