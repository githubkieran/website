import React from "react";
import '../Style.css';
import Skills from "./Skills";
import Contact from './Contact'
import Footer from './Footer'
import Education from "./Education";
import Projects from "./Projects";

function Homepage() {
    return(
        <div id="home-section" className="mainDiv">
            <div className="homeDiv">
                <h1 className="homeHeading">I'm Kieran</h1> 
                <p className="homeP">
                    A coding enthusiast skilled in C#, Java, Python, and JavaScript who
                    has a soft spot for the nostalgic charm of static web pages. 
                </p>
            </div>
            <Skills />
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
export default Homepage;