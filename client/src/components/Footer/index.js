import React from "react";
import "./Footer.css";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import TempImage from "../../images/farmwithwhite.jpg";

const Footer = () => (
    <div>
        <footer class="page-footer font-small blue pt-4" id="footer">
                <div class="row">
                <div class="col-md-3 col-sm-6 mt-md-0 mt-3">
                <img src={TempImage} alt=""/>
                </div>
                    <div class="col-md-3 col-sm-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase">FoodChain</h5>
                        <ul class="list-unstyled">
                            <li>1325 4th Ave</li>
                            <li>Seattle, WA 98101</li>
                            <li>(555) 555-5555</li>
                            <li></li>
                        </ul>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"/>
                    <div class="col-md-3 mb-md-0 mb-3"></div>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled">
                            <li>
                            <Link to="/profiles/:id">Your Profile</Link>
                            </li>
                            <li>
                            <Link to="/farmprofiles">Browse Farms</Link>
                            </li>
                            <li>
                            <Link to="/savedfarms">Saved Farms</Link>
                            </li>
                            <li>
                            <Link to="/aboutus">About Us</Link>
                            </li>
                            <li>
                            <Link to="/logout">Log Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            <div class="footer-copyright text-center py-3" id="footercopywright">© 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
        </footer>
    </div>
)


export default Footer;
