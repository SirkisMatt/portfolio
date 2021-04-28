import React from 'react'
import grow from '../../Images/grow-screen.png'
import hearMe from '../../Images/hear-me-screen.png'
import runSafe from '../../Images/run-safe-screen.png'
import './ProjectsPage.css' 

function ProjectsPage() {
    return(
        <div className="project_page">
            <div className="project_container">
                <img src={hearMe} alt="screen capture of app named hear me" />
                <div className="project_description">
                    <h3>Hear Me</h3>
                    <p>
                        If a user experiences a form of discrimination or abuse, they 
                        can share a description of the incident and post the location on the map. 
                        The user can see the other incidents and filter them by type.
                    </p>
                    <p>
                        <strong>Tech used:</strong> React, vanilla JavaScript, CSS, Express, Nodejs, Restful API, Heroku, Postgresql
                    </p>
                    <p>
                        <a href="https://github.com/SirkisMatt/hear-me-frontend" target="blank">GitHub repo</a> and a link to the <a href="https://hear-me-frontend.vercel.app/" target="blank">app</a>!
                    </p>
                </div>
                
            </div>
            <div className="project_container">
                <img src={grow} alt="screen capture of app named grow" />
                <div className="project_description">
                    <h3>Grow</h3>
                    <p>
                        Users are able to create an account to create and track their 
                        goals. Goals are given a completion date. The user sets a number of 
                        trees they will plant if they do not complete their goal. If the user 
                        does not complete their goal they donate set number of trees.
                    </p>
                    <p>
                        <strong>Tech used:</strong>  React, vanilla JavaScript, CSS, Express, Nodejs, Restful API, Heroku, Postgresql
                    </p>
                    <p>
                        <a href="https://github.com/SirkisMatt/grow-app" target="blank">GitHub repo</a> and a link to the <a href="https://grow-app-five.vercel.app/" target="blank">app</a>!
                    </p>
                </div>
            </div>
            <div className="project_container">
                <img src={runSafe} alt="screen capture of app named run safe" />
                <div className="project_description">
                    <h3>Run Safe</h3>
                    <p>
                        This app helps joggers determine if their cities air quality is safe to exercise in. The app 
                        informs the user of the air quality index of the city that they searched for, a forecast for when 
                        it could be safe to run, and info about air quality health implications.
                    </p>
                    <p>
                        <strong>Tech used:</strong>  JavaScript, jQuery, Google Maps, CSS, 
                    </p>
                    <p>
                        <a href="https://github.com/SirkisMatt/run-safe" target="blank">GitHub repo</a> and a link to the <a href="https://sirkismatt.github.io/run-safe/" target="blank">app</a>!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;