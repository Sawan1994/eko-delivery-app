import React from "react";
import { Link } from "react-router-dom";

export const NavMenu = () => {
    return (
        <ul className="nav-menu">
            <li><Link to="/">Graph Detail</Link></li>
            <li><Link to="/routePlanner">Route Planner</Link></li>
        </ul>
    );
}