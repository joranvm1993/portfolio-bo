import React from 'react'
import foto from '../assets/images/foto1.jpg'
export const LandingScreen = () => {
    return (
        <div className="landing-grid">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img
                            src={foto}
                            alt="foto"
                            className="foto-portfolio"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML / CSS / Javascript / Bootstrap / ReactJs / NodeJs / Express / MySQL / .Net Core </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
