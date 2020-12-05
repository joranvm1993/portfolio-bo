import React from 'react'


export const Cards = () => {
    return (
        <div id="proyect_content">
            <h1 className="title__project">Proyectos</h1>
            <div className="container ">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Inicios en JavaScript.</h5>
                                <p className="card-text">Proyecto en el cual se implemento la funcion fetch para el consumo de una api, mostrando los resultados en datatables.</p>
                                <a href="#" className="btn btn-primary">Ver el codigo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Buscador de Gifs.</h5>
                                <p className="card-text">Primer proyecto con React.Js, se implemento la funcion fetch para el consumo de una api.</p>
                                <a href="#" className="btn btn-primary">Ver el codigo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Single Page Aplication(SPA).</h5>
                                <p className="card-text">Proyecto realizado en React.Js, el cual se implemento react-router-dom y query-string.</p>
                                <a href="#" className="btn btn-primary">Ver el codigo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Buscador de recetas de bebidas.</h5>
                                <p className="card-text">Proyecto realizado en React.Js en el cual se implmenteo el context Api y el hook useContext.</p>
                                <a href="#" className="btn btn-primary">Ver el codigo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ejercicios de logica</h5>
                                <p className="card-text">Ejercicios de logica de la plataforma HakerRank para mejorar el pensamiento logico y analito.</p>
                                <a href="#" className="btn btn-primary">Ver el codigo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Rest Server</h5>
                                <p className="card-text">Rest Server realizado con Node.js, express y mongoDB y dependecias como mongoose, bycript entre otras</p>
                                <a href="#" className="btn btn-primary">Ver el codigo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

