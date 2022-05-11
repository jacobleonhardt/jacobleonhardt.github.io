import React from 'react'
import './contact.css'

const Contact = () => {

    return(
        <div id="contact">
            <div className="full">
                <h2>Contact</h2>
                <a href="https://github.com/jacobleonhardt" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                <a href="https://www.linkedin.com/in/jacob-leonhardt-b19067ba/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="mailto:jacob.leonhardt649@gmail.com" target="_blank"><ion-icon name="mail-outline"></ion-icon></a>
                <a href="tel:+12707918120" target="_blank">  <ion-icon name="phone-portrait"></ion-icon></a>
            </div>
        </div>
    )
}

export default Contact;
