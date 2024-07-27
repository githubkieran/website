import React from "react";
import Navbar from "./components/nav/Navbar";
import ReactRouter from "./backend/ReactRouter";
import { BrowserRouter } from "react-router-dom";

const App =()=> (
    <div>
        <BrowserRouter>
            <Navbar/>
            <ReactRouter/>
        </BrowserRouter>
    </div>
)

export default App;