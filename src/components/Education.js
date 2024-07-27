import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { LiaUniversitySolid } from "react-icons/lia";
import { HiBuildingOffice  } from "react-icons/hi2";
import { TbFileCertificate } from "react-icons/tb";
import './style.min.css';

function Education(){
    return(
        <div className="educationDiv">
            <h1 className="educationHeading">Education</h1> 
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: "black" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date={<span className="timeline-date">July 2024</span>}
                    iconStyle={{ background: 'rgb(29, 29, 29)', color: '#fff', border: '2px solid #ddd'}}
                    icon={<LiaUniversitySolid />}
                >
                    <h3 className="vertical-timeline-element-title">Graduated University BSc(Hons)</h3>
                    <p className="educationP">
                        Modules: DevOps, Application Architecture, Design Patterns, IT Project Management, Web Application Development, Research Skills and Professional Issues, Programming Paradigms, Machine Learning and Data Analytics, Secure Software Development, Cloud Platform Development.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={<span className="timeline-date">May 2022</span>}
                    iconStyle={{ background: 'rgb(29, 29, 29)', color: '#fff', border: '2px solid #ddd' }}
                    icon={<HiBuildingOffice  />}
                >
                    <h3 className="vertical-timeline-element-title">Graduated College</h3>
                    <p>
                        Modules: Object Oriented Programming, Developing Multiplatform Apps, Developing Standalone Apps, User Centred Design, Project Management, Testing Software, Troubleshooting, Web Development, Digital Forensics, Managing Webservers, Relational Database Management, Mathematics in Computing, Digital Skills for Work.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={<span className="timeline-date">April 2022</span>}
                    iconStyle={{ background: 'rgb(29, 29, 29)', color: '#fff', border: '2px solid #ddd' }}
                    icon={<TbFileCertificate />}
                >
                    <h3 className="vertical-timeline-element-title">Gained Certificate</h3>
                    <p>
                        Database Programming - Oracle
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={<span className="timeline-date">November 2021</span>}
                    iconStyle={{ background: 'rgb(29, 29, 29)', color: '#fff',border: '2px solid #ddd' }}
                    icon={<TbFileCertificate />}
                >
                    <h3 className="vertical-timeline-element-title">Gained Certificate</h3>
                    <p>
                        Database Design - Oracle
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Education;