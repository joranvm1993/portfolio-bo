import React from 'react'
import foto1 from '../assets/images/foto1.jpg'
import { FormContact } from './FormContact'
export const ContactScreen = () => {
    return (
        <div className="contact-boody">
            <div className="container">
                <div className="row contact-grid">
                    <div className="col-6">
                        <FormContact />
                        
                    </div>
                    <div className="col-6">
                        <div className="contact-list">
                            <h2>Contactame</h2>    
                            <hr />
                            <div>
                                <i class="fas fa-phone" />(+57) 3215832531 <br />
                                <i class="fas fa-envelope"></i> joranvm93@gmail.com
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
