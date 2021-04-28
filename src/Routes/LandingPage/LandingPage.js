import React from 'react'
import fire from '../../Images/fire-rings.png'
import './LandingPage.css' 

function LandingPage() {
    return(
        <div className="landing_page">
            <p>Landing</p>
            <div className="container">
            <img className="fire" src={fire} alt="landscape view with campfire" />
            </div>
            
            
        </div>
    )
}

export default LandingPage;