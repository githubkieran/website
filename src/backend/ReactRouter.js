import React from "react";
import { Route, Routes } from 'react-router-dom';
import Homepage from "../components/Homepage";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function ReactRouter() {
    return (
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="/education" element={<div id="education-section"><Education /></div>} />
            <Route path="/projects" element={<div id="projects-section"><Projects /></div>} />
            <Route path="/contact" element={<div id="contact-section"><Contact /></div>} />
        </Routes>
    );
}

export default ReactRouter;
