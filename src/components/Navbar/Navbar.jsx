import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';
import * as Constants from "./Constants.jsx";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={Constants.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={Constants.CONFIGURATION}>Configuration</Link>
                </li>
                <li>
                    <Link to={Constants.QUEUE}>Queue</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;