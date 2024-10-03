import React from "react";
import '../Style.css';
import Contact from './Contact'
import { BsLinkedin, BsGithub  } from 'react-icons/bs';

function Homepage() {
    return(
        <div className="mainDiv">
            <div className="homeDiv">
                <h1 className="homeHeading">Kieran Harley</h1> 
                <p className="homeP">
                    I'm a full-stack developer from the UK, with a passion for ui/ux and optimising backend 
                    systems. I excel at leveraging DevOps practices to enhance 
                    development efficiency and ensure smooth, continuous integration and delivery. I like to get 
                    the most out of the least, focusing on efficient resource utilisation and streamlined workflows. 
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