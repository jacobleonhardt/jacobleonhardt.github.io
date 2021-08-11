import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'
import headshot from '../../../photos/profile-pic.jpg'
import './bio.css'

const Bio = () => {

    return(
        <div id="bio">
            <div className="left">
                <img src={headshot} alt="Jacob Leonhardt headshot"/>
            </div>
            <div className="right">
                <h2>Bio</h2>
                <p>I'm an enthusiastic, creative full-stack developer. Whether coding an applications, writing stories, or making board games, bringing something from concept to reality is an exciting process! What I love about JavaScript, React, Redux, and CSS, is that they allow developers to do this is a more visual way. Writing backend or frontend code that renders data on screen, then designing the presentation of that data is a creative adventure. And like all adventures, a few obstacles makes the story a little more interesting.</p>
                <p>I'm a Christian and nerd who drinks a lot of coffee. Some of my favorite things are British Literature, Rend Collective, Yacht Rock, Nintendo, and sarcasm.</p>
                <span>
                    <Link to="contact" className="button" smooth={true} spy={true} duration={800}>Contact</Link>
                </span>
            </div>
        </div>
    )
}

export default Bio;
