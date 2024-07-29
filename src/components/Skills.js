import React from "react";
import '../Style.css';
import { useState, useEffect } from "react";

function Skills(){
    const [openSections, setOpenSections] =useState({
        languages: false,
        frameworks: false,
        database: false,
        other: false
    })
    
    useEffect(() => { //slide open at start-up
        setOpenSections(prevState => ({
            languages: true
        }));
    }, []);

    const toggleSection = (section) => {
        setOpenSections (prevState => {
            const newState = {
                languages: false,
                frameworks: false,
                database: false,
                other: false
            };
            newState[section] = !prevState[section];
            return newState;
        });
    };

    return(
        <div className="skillsDiv">
            <h1 className="skillsHeading">Skills</h1>
            <section className="languageSection">
                <h2 className="skillName" onClick={() => toggleSection('languages')}>
                    Languages
                </h2>
                <hr></hr>
                <div className={`languagesDiv ${openSections.languages ? 'open' : 'closed'}`}>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/html.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/css.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/javascript.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/csharp.png" alt="languages" />
                    </div>
                </div>
            </section>
            <section className="frameworksSection">
                <h2 className="skillName" onClick={() => toggleSection('frameworks')}>
                    Frameworks
                </h2>
                <hr></hr>
                <div className={`frameworksDiv ${openSections.frameworks ? 'open' : 'closed'}`}>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/react.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/express.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/blazor.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/asp.png" alt="languages" />
                    </div>  
                </div>
            </section>
            <section className="databaseSection">
                <h2 className="skillName" onClick={() => toggleSection('database')}>
                    Database
                </h2>
                <hr></hr>
                <div className={`databaseDiv ${openSections.database ? 'open' : 'closed'}`}>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/sql.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/mongodb.png" alt="languages" />
                    </div>
                </div>
            </section>
            <section className="otherSection">
                <h2 className="skillName" onClick={() => toggleSection('other')}>
                    Other
                </h2>
                <hr></hr>
                <div className={`otherDiv ${openSections.other ? 'open' : 'closed'}`}>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/aws.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/azure.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/overleaf.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/slack.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/msteams.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/node.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/unity.png" alt="languages" />
                    </div>
                    <div className="skillContainer">
                        <img id="skillImg" src="/skills_pics/github.png" alt="languages" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills;