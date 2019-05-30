import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Login.css";
import TempImage from "../../images/farmwithwhite.jpg";

const Login = () => (
    <div className="main">
      <section className="sign-in">
            <div className="container containerlogprops">
                <div className="signin-content logprops">
                    <div className="signin-image">
                        <figure><img src={TempImage} alt="sign up"/></figure>
                        Don't have an account?
                        <Link to="/register"> Click here!</Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form method="POST" className="register-form" id="login-form" action="/login">
                            <div className="form-group">
                                <label for="username"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="username" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Login;