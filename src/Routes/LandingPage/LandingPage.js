import React from 'react'
import fire from '../../Images/fire-rings.png'
import './LandingPage.css' 

function LandingPage() {
    return(
        <div className="landing_page">
            <div className="container">
                <div className="header_wrapper">
                    <div className="title">
                        <h1>Hi, I'm Matt <br/> A full-stack developer bridging the gap between the tech world and the natural world</h1>
                    </div>  
                    <img className="fire" src={fire} alt="landscape view with campfire" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;