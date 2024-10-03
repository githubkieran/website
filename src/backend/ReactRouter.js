import React from "react";
import {Route, Routes} from 'react-router-dom';
import Homepage from "../components/Homepage";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Blog from "../components/Blog";


function ReactRouter() {
    return(
        <Routes>
            <Route index element={<Homepage/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/blog" element={<Blog/>} />
            {/**download link for cv here */}
        </Routes>
    )
}

export default ReactRouter;