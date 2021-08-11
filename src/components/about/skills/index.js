import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'
import './skills.css'

const Skills = () => {

    return(
        <div id="skills" className="full">
            <h2>Skills</h2>
            <div id="additional">
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original colored"></i>
                <i class="devicon-redux-original colored"></i>
                <i class="devicon-python-plain colored"></i>
                <i class="devicon-flask-original colored"></i>
                <i class="devicon-sqlalchemy-plain"></i>
                <i class="devicon-postgresql-plain colored"></i>
                <i class="devicon-html5-plain colored"></i>
                <i class="devicon-css3-plain colored"></i>
                <i class="devicon-git-plain colored"></i>
                <i class="devicon-github-original colored"></i>
                <i class="devicon-ubuntu-plain colored"></i>
                <i class="devicon-vscode-plain colored"></i>
                <i class="devicon-wordpress-plain"></i>
                <i class="devicon-photoshop-plain colored"></i>
                <i class="devicon-illustrator-plain colored"></i>
            </div>
        </div>
    )
}

export default Skills;
