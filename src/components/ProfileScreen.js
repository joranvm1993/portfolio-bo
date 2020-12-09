import React from 'react'
import { Button } from './Button'

export const ProfileScreen = () => {
    return (

        <div className="content">
            <div className="contenido">
                <div className="contenido-profile">
                    <h4><i>Perfil</i></h4>
                    <p>
                        Soy una persona proactiva, con toda la disposición de aprender
                        herramientas y tecnologías nuevas que me permitan aportar a la empresa y
                        equipo de trabajo, siempre dispuesto a escuchar sugerencias y criticas
                        constructivas que me permitan crecer profesionalmente y aumentar mis
                        conocimientos.Actualmente soy egresado de World Tech makers del
                        bootcamp de desarrollo web fullstack donde logre adquirir grandes
                        conocimientos en Javascript, Html, Css, Node.Js, mongoDb, Mysql y React,Js
                    </p>
                </div>
                <div className="contenido-objetivo">
                    <h4><i>Objetivo Profesional</i></h4>
                    <p>
                        Formar parte de una empresa en la que pueda poner en práctica todos
                        mis conocimientos, que me brinde la oportunidad de alcanzar todas mis
                        metas trazadas, y que me ofrezca la oportunidad de crecer en el área
                        laboral, personal e intelectual.
                    </p>
                </div>
            </div>
            <Button />
        </div>

    )
}
