import React from 'react'
import image from '../assets/images/foto1.jpg';

export const Logo = () => {
    return (
        <div>
            <a className="navbar-brand" href="#"> <img className="foto_nav" src={ image } alt="Foto-Andres" /> </a>
        </div>
    )
}
