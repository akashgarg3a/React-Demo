import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
    const activeStyle = { color : "orange"}
    return (
        <nav>
            <NavLink activeStyle={activeStyle} to="/" exact>Home</NavLink>
            {" | "} <NavLink activeStyle={activeStyle} to="/about" exact>About</NavLink>
            {" | "} <NavLink activeStyle={activeStyle} to="/speakers" exact>Speakers</NavLink>
        </nav>
    )
}

export default Header;
