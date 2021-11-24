import React, { FunctionComponent, useState, useEffect } from 'react'
import { Tile } from './Tile'
import { HideButton } from './HideButton'
import { carMeet, eqs, friends, zoe } from "../Photos/Photos";

interface Props {

}

export const Menu: FunctionComponent<Props> = () => {


    const [hiddenMenu, setHiddenMenu] = useState(false);

    const ToggleHideMenu = (): void => {
        setHiddenMenu(!hiddenMenu);
    }

    useEffect(() => {

    }, [hiddenMenu])

    if (!hiddenMenu) {

        return (
            // <div className="flex h-1/6 w-full">
            <div className="flex h-1/6 fixed bottom-0 w-full">
                <HideButton onClick={ToggleHideMenu} />
                <Tile key={1} imageUrl={zoe} title={"Naročite prevoz"} />
                <Tile key={2} imageUrl={eqs} title={"Sledite avtomobilom"}  linkPath="/map"/>
                <Tile key={3} imageUrl={friends} title={"Povabite prijatelje"} />
                <Tile key={4} imageUrl={carMeet} title={"Dogodki"} />
                <HideButton onClick={ToggleHideMenu} />
            </div>
        )
    }
    return (
        <div>
            <div className="flex justify-center items-center text-white bg-yellow-600 text-5xl w-12 h-12 fixed bottom-0"
                onClick={ToggleHideMenu}>
                <img className="w-2/3 h-2/3 transform rotate-180" src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" alt="Puscica" />
            </div>
        </div>
    )
}
