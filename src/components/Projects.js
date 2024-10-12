import React from "react";
import '../Style.css';

function Projects() {
    return(
        <div id="projects-section" className="mainDiv">
            <hr className="break"/>
            <div className="projectsDiv">
                <h1 className="projectsHeading">Projects</h1>
                <section className="projectSection">
                    <div className="projectInfoDiv">
                        <h3 className="projectInfoHeading">
                            Anonymous Messaging Application
                        </h3>
                        <p className="projectInfo">
                            This project provided an excellent opportunity to hone my full-stack 
                            development skills. I designed and implemented a robust frontend interface, 
                            a powerful backend server, and an efficient database system. The application 
                            allows users to send and receive messages anonymously, ensuring privacy and 
                            security. Through this project, I gained hands-on experience in integrating 
                            various technologies to create a seamless and user-friendly application.
                            <br/>
                            <a className="projectA" href="">View Repo</a> <a className="projectA" href="">Demo</a>
                        </p>
                    </div>
                </section>
                <section className="projectSection">
                    <div className="projectInfoDiv">
                        <h3 className="projectInfoHeading">
                            Web Search Filter
                        </h3>
                        <p className="projectInfo">
                            This passion project was developed shortly after I graduated from university. 
                            The inspiration came while writing my dissertation, as I frequently encountered 
                            technology-based web searches returning results from Reddit and Quora. These 
                            sources, while informative, are not credible for academic citations. To address 
                            this issue, I created a simple web search filter that allows users to toggle the 
                            inclusion of results from these websites. This tool enhances the quality of search 
                            results by excluding non-credible sources when needed.
                            <br/>
                            <a className="projectA" href="">View Repo</a>
                        </p>
                    </div>
                </section>
                <section className="projectSection">
                    <div className="projectInfoDiv">
                        <h3 className="projectInfoHeading">
                            Weather Application
                        </h3>
                        <p className="projectInfo">
                            This project was focused on enhancing my frontend development skills and 
                            gaining hands-on experience with API integration. Using the OpenWeather 
                            API, I built a weather application that fetches and displays real-time weather 
                            data for all countries and cities. This project allowed me to work  
                            with API keys and learn how to handle API responses effectively. It provided 
                            valuable experience in creating dynamic, data-driven user interfaces.
                            <br/>
                            <a className="projectA" href="">View Repo</a> <a className="projectA" href="">Demo</a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects;