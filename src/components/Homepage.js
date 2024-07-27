import React from "react";
import '../Style.css';
import Contact from './Contact'
import { BsLinkedin, BsGithub  } from 'react-icons/bs';

function Homepage() {
    return(
        <div className="mainHomeDiv">
            <div className="homeDiv">
                <h1 className="homeHeading">Kieran Harley</h1> 
            <   p className="homeP">
                    I am a full-stack developer and I like to create unique frontend 
                    experiences while optimising the backend to allow for a smooth UI/UX.

                    put below links to the right of the paragraph
                </p>
                <div className="linkDiv">
                    <a href="https://github.com/githubkieran" target="_blank" rel="noreferrer" id="socialLink"><BsGithub/></a>
                    <a href="https://www.linkedin.com/in/kieran-harley/" target="_blank" rel="noreferrer" id="socialLink"><BsLinkedin/></a> 
                </div>
            </div>
            <Contact />
        </div>
    )
}
export default Homepage;