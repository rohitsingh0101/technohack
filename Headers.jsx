import React from "react";
import './Header.css';
import logo from "../../src/assets/logo.png"
const Headers =() => {
    return(
       <div className="header">

        <img src={logo} alt=" " className="logo"/>
        <ul className="header-menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
       </div>
    )
}
export default Headers