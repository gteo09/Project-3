import React from "react";
//import "./Navbar.css";

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
                    <a className="nav-link" href="/profiles/:id">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/farmprofiles">Browse Producers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/producerform">Register a Producer</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com/">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com/">Log Out</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;
