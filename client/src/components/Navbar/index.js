import React from "react";
//import "./Navbar.css";
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from "react-router-dom";

const Navbar = () => {
  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <a className="navbar-brand" href="/home"><strong>FoodChain</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item" id="navtext">
                    <NavLink to="/profiles/:id">Your Profile</NavLink>
                </li>
                <li className="nav-item" id="navtext">
                    <Link to="/farmprofiles">Browse Farms</Link>
                </li>
                <li className="nav-item" id="navtext">
                    <Link to="/savedfarms">Saved Farms</Link>
                </li>
                <li className="nav-item" id="navtext">

                    <Link to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item" id="navtext">
                    <Link to="/logout">Log Out</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;
