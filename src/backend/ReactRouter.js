import React from "react";
import {Route, Routes} from 'react-router-dom';
import Homepage from "../components/Homepage";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";


function ReactRouter() {
    return(
        <Routes>
            <Route index element={<Homepage/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects" element={<Projects/>} />
            {/**download link for cv here */}
        </Routes>
    )
}

export default ReactRouter;