import React from 'react';
import img_edu from '../assets/images/educacion.jpg';

export const EducationScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div>
                        <img 

                            src={ img_edu }
                            alt="Educacion"
                            className="img-education"
                        />
                    </div>
                    <h2 style={{ marginTop:20 }}>Andres Vasquez Morales.</h2>
                    <h4><i>Desarrollador Web Full Stack</i></h4>
                    <hr style={{ borderTop: '3px solid', width:'90%' }} />
                    <p>
                        <i>
                            A inicios del 2020 decidi incursionar en la programacion buscando nuevos objetivos y nuevas oportunidades.
                            Por esto decidi iniciar un bootcamp de desarrollo Web Full Stack donde tuve la oportunidad de conocer nuevas
                            tecnologias y lenguajes de programacion como JavaScript, aparte de esto tambien decidi ingresar en la Tecnologia de Desarrollo de Software en la institucion Universitaria
                            Pascual Bravo, y tambien me he estado preparando de forma autodidacta reforzando lo ya aprendido e incursionando en tecnologias de 
                            Microsoft como .Net core
                        </i>
                    </p>
                </div>

                <div className="col-7">
                    <div className="content-right">
                        <div className="content-1">

                            <h3><i><b></b>Tecnologia en Desarrollo de Software.</i></h3>
                            <h3><i>Institucion Universitaria Pascual Bravo.</i></h3>
                            <p>
                                <i>
                                    Actualmente me encuentro cursando el pregrado en Tecnologia en Desarrollo
                                    de Software en la Institucion Universitaria Pascual Bravo.
                                </i> 
                            </p>
                        </div>
                        <div className="content-2">

                            <h3><i>Bootcamp Desarrollo Web Full Stack.</i></h3>
                            <h3><i>World Tech Makers.</i></h3>
                            <p> 
                                <i>
                                    Egresado del bootcamp de desarrollo web Fullstack, en el cual adquiri
                                    grandes conocimientos en Html, Css, Javascript, React.js, Node.Js, mongoDB, Mysql.
                                </i>
                                
                            </p>
                            <hr style={{ borderTop: '3px solid', width:'100%' }} />
                            <h2>Skills</h2>
                            <p><b>HTML / CSS /JavaScript / Bootstrap / React / Node / Express / MySQL </b> </p>
                            <p>
                                <i>
                                    Diariamente me propongo a reforzar los conocimientos adquiridos en el Bootcamp y adicionalmente
                                    me encuentro estudiando tecnologias de Microsoft como .Net Core en temas como MVC, entity Framework,
                                    Linq los cuales espero poder ponerlos en practica y aportar con lo aprendido en una empresa.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
