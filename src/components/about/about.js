import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'
import Bio from './bio'
import Skills from './skills'

const About = () => {

    return(
        <div id="about">
            <Skills />
            <Bio />
        </div>
    )
}

export default About;
