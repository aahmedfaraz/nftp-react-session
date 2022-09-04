import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to={'/'}>Home</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to={'/about'}>About</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <footer>All rights are reserved &reg;</footer>
            </BrowserRouter>
        </>
    )
}

export default App;