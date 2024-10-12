import React from "react";
import './navStyle.css';
import { Link as ScrollLink } from 'react-scroll';

import { FaRegUserCircle } from "react-icons/fa";
import { FaCode } from 'react-icons/fa6'
import { TbSchool } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { FaRegFolderOpen } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className="mainContainer">
            <nav id="nav">
                <ul className="unorderedList"> 
                    <li id="li">
                        <ScrollLink to="home-section" smooth={true} duration={500} id="a"> <FaRegUserCircle /> Kieran Harley</ScrollLink>
                    </li>
                    <li id="li">
                        <ScrollLink to="skills-section" smooth={true} duration={500} id="a"> <FaCode /> Skills</ScrollLink>
                    </li>
                    <li id="li">
                        <ScrollLink to="education-section" smooth={true} duration={500} id="a"><TbSchool /> Education</ScrollLink>
                    </li>
                    <li id="li">
                        <ScrollLink to="projects-section" smooth={true} duration={500} id="a"><FaRegFolderOpen /> Projects</ScrollLink> 
                    </li>
                    <li id="li">
                        <ScrollLink to="contact-section" smooth={true} duration={500} id="a"><BsSend /> Contact</ScrollLink> 
                    </li>
                    <li id="li">
                        <a href="/path/to/cv.pdf" id="a" target="_blank" rel="noopener noreferrer"><LuFileSpreadsheet /> CV</a>
                    </li>
                </ul>
                <hr className="hrNav" />
            </nav>
        </div>
    );
}

export default Navbar;
