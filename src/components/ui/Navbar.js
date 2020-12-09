import React from 'react'
import {  Link, NavLink } from 'react-router-dom'

export const Navbar = () => {

    
    return (
        <nav className="navbar navbar-expand-lg background_navbar ">
            <Link to="/" className="navbar-brand" >Portafolio</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink to="profile" className="nav-item nav-link active" >Perfil</NavLink>
                    <NavLink to="education" className="nav-item nav-link">Formacion</NavLink>
                    <NavLink to="projects" className="nav-item nav-link">Proyectos</NavLink>
                    <NavLink to="contact" className="nav-item nav-link">Contacto</NavLink>
                </div>
            </div>
        </nav>
    )
}
