import React, { FunctionComponent } from 'react'
import { Menu } from './Menu'
import { Person } from './Person'

interface Props {

}

export const Layout: FunctionComponent<Props> = ({ children }) => {
    return (
        <div className="min-h-full relative flex flex-col">
            <Person/>
            {children}
            <Menu />
        </div>
    )
}
