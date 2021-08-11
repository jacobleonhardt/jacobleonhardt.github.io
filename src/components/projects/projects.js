import React from 'react'
import Pieflix from './project-cards/pieflix.js'
import Robinhoop from './project-cards/robinhoop.js'
import AskMeeple from './project-cards/ask-meeple.js'
import './projects.css'

const Projects = () => {
    return (
        <div id="projects">
            <div id="project-cards">
                <AskMeeple />
                <Pieflix />
                <Robinhoop />
            </div>
        </div>
    )
}

export default Projects;
