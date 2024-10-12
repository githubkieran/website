import React, { useState } from "react";
import '../Style.css';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isValidEmail = (email) => {
        return email.includes("@") && email.indexOf("@") > 0 && email.indexOf("@") < email.length - 1;
    };

    return (
        <div id="contact-section" className="mainContactDiv">
            <hr className="break" />
            <div className="messageBox">
                <h1 className="contactHeading">Contact</h1>
                <div className="inputWrapper">
                    <label id="contactLabels">Your Name: </label>
                    <br />
                    <input 
                        id="contactInputs" 
                        placeholder="Enter your full name..." 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    {name && (
                        <span className="tick">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
                                <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                                <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                            </svg>
                        </span>
                    )}
                </div>
                <br />
                <div className="inputWrapper">
                    <label id="contactLabels">Your Email: </label>
                    <br />
                    <input 
                        id="contactInputs" 
                        placeholder="Enter your email address..." 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {email && (
                        <span className="tick">
                            {isValidEmail(email) ? (
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
                                    <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                                    <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 40 40">
                                    <path fill="#f78f8f" d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"></path><path fill="#c74343" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"></path><path fill="#fff" d="M18.5 10H21.5V30H18.5z" transform="rotate(-134.999 20 20)"></path><path fill="#fff" d="M18.5 10H21.5V30H18.5z" transform="rotate(-45.001 20 20)"></path>
                                </svg>
                            )}
                        </span>
                    )}
                </div>
                <br />
                <div className="inputWrapper">
                    <label id="contactLabels">Your Message: </label>
                    <br />
                    <textarea 
                        id="messageLabel" 
                        placeholder="This bad boy can fit so many words..." 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {message && (
                        <span className="messageTick">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
                                <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                                <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                            </svg>
                        </span>
                    )}
                </div>
                <br />
                <input type="submit" className="messageButton" />
            </div>
        </div>
    );
}

export default Contact;
