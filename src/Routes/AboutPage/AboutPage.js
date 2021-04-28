import React from 'react'
import linkedin from '../../Images/linkedin-pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './AboutPage.css' 

function AboutPage() {
    return(
        <div className="about_container">
            <div className="wrapper">
                <div className="about_landing_container">
                <button className="arrow_down_btn"><FontAwesomeIcon className="arrow_down" icon={faChevronDown}/></button>
                    <img className="about_photo" src={linkedin} alt="photo of Matt Sirkis" />
                    <div className="about">
                        {/* <h3>
                            About Me...
                        </h3> */}
                        
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="about_desc">
                    <p>
                        As a former environmental educator I have gained a deep appreciation for 
                        the human impacts on our planet's natural systems. I am moving into the 
                        role of a software engineer so that I can help bring tech into the fight 
                        against human and environmental injustices. 
                    </p>
                    <p>
                        In my previous life as an educator, I had to interpret the interpersonal relationships of 
                        the natural world and facilitate my clients understanding of those relationships. 
                        I am now a guide for the jungle of code. Communicating its relationships and logic to co-workers
                        and clients. 
                    </p>
                    <p>
                        I believe conservation technology should be accessible to not only researchers 
                        but to everyone that is interested in discovering the nuances of Earth's biosphere. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;