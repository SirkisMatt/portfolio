import React, {useState} from 'react'
import linkedIn from '../../Images/linkedin.png'
import github from '../../Images/github.png'
import email from '../../Images/email.png'
import './ContactPage.css'

function ContactPage() {

    const [showEmail, toggleEmail] = useState(false)

    return(
        <div className="contact_container">
            <div className="img_wrapper">
                <a href="https://www.linkedin.com/in/matt-sirkis/" target="blank">
                    <img  src={linkedIn} alt="linkedIn logo" />
                </a>
                <a href="https://github.com/SirkisMatt" target="blank">
                    <img src={github} alt="github logo" />
                </a>
                <div className="email_container">
                    {!showEmail
                    ?
                    <img onClick={() => toggleEmail(true)} src={email} alt="email logo" />
                    :
                    <p onClick={() => toggleEmail(false)}>matt.sirkis@protonmail.com</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactPage;