import React from 'react'
import { Link } from 'react-scroll'
import leonhardtLogo from '../../photos/jleonhardt-portfolio-logo.png';
import './greeting.css'

const Greeting = () => {

    const viewResume = () => {
        window.open("https://drive.google.com/file/d/1MpckKjrr3fFTRbvIMRbvA-MVku0-YrLt/view?usp=sharing", '_blank')
    }

    return (
        <div id="greeting" className="card">
            <img src={leonhardtLogo} className="logo" alt="Jacob Leonhardt logo" />
            <h1>Jacob Leonhardt</h1>
            <h2>A Creative Frontend Developer</h2>
            <Link id="resume" className="button alt" onClick={viewResume}>Resume</Link>
            <Link id="arrow" className="icon-link" to="skills" smooth={true} spy={true} duration={800} activeClass="active"><ion-icon name="chevron-down-outline"></ion-icon></Link>
        </div>
    )
}

export default Greeting;
