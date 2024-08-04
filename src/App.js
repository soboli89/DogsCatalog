import React from "react";
import Detail from "./components/Detail";
import Main from "./routes/Main";
import Nav from "./components/Nav";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";

function App(){
    return (
    <HashRouter>
        <Nav/>
        <Routes>
            <Route path="/" exact={true} element={<Main/>}/>
            <Route path="/dog/:id" element={<Detail/>}/> 
            <Route path="/about" element={<About/>}/> 
        </Routes>
    </HashRouter>
    );
}


export default App;