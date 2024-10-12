import React from "react";
import '../Style.css';

function Skills() {
    return (
        <div id="skills-section" className="mainDiv">
            <hr className="break" />
            <div className="skillsDiv">
                <h1 className="skillsHeading">Skills</h1>
                <div className="skillsContainer">
                    <div className="skillBox">
                        <h2 className="skillTitle">Frontend Skills</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="skillBox">
                        <h2 className="skillTitle">Backend Skills</h2>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="skillBox">
                        <h2 className="skillTitle">DevOps/Automation</h2>
                        <ul>
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>CI/CD</li>
                            <li>Terraform</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
