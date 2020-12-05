import React from 'react'
import { Links } from '../components/Links'
import { Logo } from '../components/Logo'


export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top" id="navbar">
                <Logo />
                <Links />
            </nav>
        </>
    )

}

