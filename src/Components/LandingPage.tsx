import React, { FunctionComponent } from 'react'
import { avti } from '../Photos/Photos';

interface Props {

}

export const LandingPage: FunctionComponent<Props> = () => {

    return (
        <div className="w-full h-screen flex flex-col" style={{ backgroundImage: `url('${avti}')`, backgroundSize: `100% 100%`, backgroundRepeat: `no-repeat` }} id="LandingPage">
            <h1 className="text-white text-7xl font-serif mt-5 ml-auto mr-auto bg-black bg-opacity-60 pr-2 pl-2">Samovozeče mesto</h1>
            <div className="h-full flex flex-col justify-end mb-28">
                <p className="w-1/4 bg-opacity-40 p-5 text-white ml-auto mr-auto bg-black justify-self-end font-serif">Pozabite na stres vožnje v zastojih. Zdaj vam ponujamo
                    možnost, da si odpočijete med vožnjo in med to izkoristie
                    čas za druge opravke.
                </p>
            </div>
        </div>
    )
}
