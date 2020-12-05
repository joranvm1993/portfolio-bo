import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export const FormContact = () => {

    const [loading, setLoading] = useState(false)

    const name = useRef()
    const email = useRef()
    const message = useRef()

    const handleEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        const parametros = {
            name: name.current.value,
            email: email.current.value,
            message: message.current.value
        }

        emailjs.send('service_6rugpk8', 'template_0hrprfl',parametros, 'user_thWjUOJ20CxcYJzwB5NaX')
            .then(() => {
                console.log('correcto')
                setLoading(false)
            })
    }

    return (
        <div className="form_contact" id="form_contact">

            <div className="container">

                <form
                    className="contact__form"
                    onSubmit={handleEmail}
                >
                    <h1>Contacto</h1>

                    <input
                        type="text"
                        ref={name}
                        placeholder="Su nombre"
                        autoComplete="off"
                        name="name"
                    />
                    <input
                        type="email"
                        ref={email}
                        placeholder="Su email"
                        autoComplete="off"
                        name="email"
                    />
                    <textarea
                        type="text"
                        placeholder="Mensaje"
                        ref={message}
                        name="message"
                    />
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={handleEmail}
                        disabled={loading}
                    >
                        Enviar
                    </button>
                </form>
            </div>

        </div>
    )
}
