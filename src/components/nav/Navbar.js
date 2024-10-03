import React from "react";
import './navStyle.css';
import { Link } from 'react-router-dom';

import { FaCode } from 'react-icons/fa6'
import { TbSchool } from "react-icons/tb";
import { MdComputer } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";

const Navbar = () => {
    return(
        <div className="mainContainer">
            <nav id="nav">
                <ul className="unorderedList"> 
                    <li id="li">
                        <FaCode /> <Link to="/" id="a">Kieran Harley</Link>
                    </li>
                    <li id="li">
                        <TbSchool /> <Link to="/education" id="a">Education</Link>
                    </li>
                    <li id="li">
                        <FaRegFolderOpen /> <Link to="/projects" id="a">Projects</Link> 
                    </li>
                    <li id="li">
                        <MdComputer /> <Link to="/blog" id="a">Blog</Link> 
                    </li>
                    <li id="li">
                        <LuFileSpreadsheet /> <Link to="/" id="a" target="_none">Download CV</Link> 
                        {/*fix download */}
                    </li>
                </ul>
            </nav>
            <hr className="hrNav" />
        </div>
        
    )
}

export default Navbar;