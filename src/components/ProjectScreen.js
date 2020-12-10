import React from 'react'
import img_react from '../assets/images/react.png'

export const ProjectScreen = () => {
    return (
        <div className="container card-content">
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <h4>Buscador de Gifs</h4>
                    </div>
                    <div className="card-body">
                        <p>
                            Proyecto realizado en React, desarrollado con componentes funcionales y se utiliza al api de Giphy

                        </p>
                        <a href="#" className="btn-project">Ver codigo</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4>Buscador de Recetas</h4>
                    </div>
                    <div className="card-body">
                        <p>
                            Proyecto realizado en React, desarrollado con componentes funcionales donde se implementa context Api y el hook useContext
                            Se utiliza una api publica para realizar las consultas
                        </p>
                        <a href="#" className="btn-project">Ver codigo</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4>Single Page Aplicatio (SPA)</h4>
                    </div>
                    <div className="card-body">
                        <p>
                            Proyecto realizado en React en el que se implemeta react-router-dom, query-string, hooks como useMemo, y hooks de estado.

                        </p>
                        <a href="#" className="btn-project">Ver codigo</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4>Coding Challenge</h4>
                    </div>
                    <div className="card-body">
                        <p>
                            Ejercicios realizados de la plataforma HakerRank en el que se busca fortalecer el pensamiento logico y analitico, ademas de
                            conocer los diferentes metodos y propiedades del lenguaje Javascript.
                        </p>
                        <a href="#" className="btn-project">Ver codigo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
