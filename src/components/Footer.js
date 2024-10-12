import React from "react";
import '../Style.css';
import { BsLinkedin, BsGithub  } from 'react-icons/bs';
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return(
        <div className="footerDiv">
            <hr className="break"/>
            <div className="linkDiv">
                <a href="https://github.com/githubkieran" target="_blank" rel="noreferrer" id="socialLink"><BsGithub/></a>
                <a href="https://www.linkedin.com/in/kieran-harley/" target="_blank" rel="noreferrer" id="socialLink"><BsLinkedin/></a> 
            </div>
            <div className="cr">
                <p className="fP">
                <FaRegCopyright style={{ fontSize: '12px', marginRight: '5px', verticalAlign: 'middle' }} /> Kieran Harley, 2024
                </p>
            </div>
        </div>
    )
}
export default Footer;