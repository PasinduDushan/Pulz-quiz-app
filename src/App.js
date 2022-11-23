import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}