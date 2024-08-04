import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";


function Navigation(){
    return (
        <div className="nav"> 
            <Link className="nav-link" to="/">Main page</Link>
            <Link className="nav-link" to="/about">About</Link>
            
        </div>
    )
}
export default Navigation;