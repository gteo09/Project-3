import React from "react";
import "./Footer.css";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import TempImage from "../../images/farmwithwhite.jpg";

const Footer = () => (
    <div>
        <footer className="page-footer font-small blue pt-4 footprops" id="footer">
                <div className="row">
                    <div className="col-md-3 col-6 col-sm-6 mt-md-0 mt-3">
                        <img src={TempImage} className="image" alt=""/>
                    </div>
                    <div className="col-md-3 col-6 col-sm-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">FoodChain</h5>
                        <ul className="list-unstyled">
                            <li>1325 4th Ave</li>
                            <li>Seattle, WA 98101</li>
                            <li>(555) 555-5555</li>
                            <li><a href="mailto:contact@farmchain.com">contact@farmchain.com</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 d-none d-sm-block"></div>
                    <div className="col-md-3 mb-md-0 mb-3 d-none d-sm-none d-md-block linkscol">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="/privateprofile" className="linkprops">Your Profile</Link>
                            </li>
                            <li>
                            <Link to="/farmprofiles" className="linkprops">Browse Farms</Link>
                            </li>
                            <li>
                            <Link to="/savedfarms" className="linkprops">Saved Farms</Link>
                            </li>
                            <li>
                            <Link to="/aboutus" className="linkprops">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </footer>
        <footer className="footer">
                <div className=" container">
                    <p className="footer-copyright text-center" id="footercopywright">© 2019 Copyright: Gabriel Teotonio and Justin Graffeo</p>
                </div>
        </footer>
    </div>
)


export default Footer;
