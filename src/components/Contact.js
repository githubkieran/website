import React from "react";
import '../Style.css';

function Contact(){
    return(
        <div className="mainContactDiv">
            <div className="messageBox">
                <h2>Contact Me</h2>
                <label id="contactLabels">Your Name: </label> <br></br>
                <input id="contactInputs" placeholder="Enter your full name..."></input>
                <br></br>
                <label id="contactLabels">Your Email: </label> <br></br>
                <input id="contactInputs" placeholder="Enter your email address..."></input>
                <br></br>
                <label id="contactLabels">Your Message: </label> <br></br>
                <textarea id="messageLabel" placeholder="This bad boy can fit so many words..."></textarea>
                <br></br>
                <input type="submit" className="messageButton"></input>
            </div>
        </div>
    )
}

export default Contact;