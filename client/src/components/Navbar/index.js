import React from "react";
//import "./Navbar.css";
import { BrowserRouter as Route } from "react-router-dom";
import AboutUs from "../AboutUs";

const Navbar = () => {
  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/home"><strong>FoodChain</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/profiles/:id">Your Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/farmprofiles">Browse Farms</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/savedfarms">Saved Farms</a>
                </li>
                <li className="nav-item">

                    <a className="nav-link" href="/aboutus">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/logout">Log Out</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;
