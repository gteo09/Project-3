import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Profile.css";
import Table from "../../images/table.jpg";

const Profile = () => (

<div className="main">
      <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={Table} alt="sign up"/></figure>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Create Profile</h2>
                        <form method="POST" className="register-form" id="login-form" action="/submit">
                            <div className="form-group">
                                <div>Restaurant Name</div>
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Restaurant Name"/>
                            </div>
                            <div className="form-group">
                                <div>Types of Cuisine</div>
                                <label for="cuisine"><i className="zmdi zmdi-lock"></i></label>
                                <input type="text" name="cuisine" id="cuisine" placeholder="Cuisine"/>
                            </div>
                            <div className="form-group">
                                <div>Description of Restaurant</div>
                                <label for="description"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="description" id="description" placeholder="Description"/>
                            </div>
                            <div className="form-group">
                                <div>Address</div>
                                <label for="address"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="address" id="address" placeholder="Address"/>
                            </div>
                            <div className="form-group">
                                <div>Phone Number</div>
                                <label for="phoneNumber"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                <div>E-mail</div>
                                <label for="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="email" id="email" placeholder="E-mail"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="submit" id="submit" className="form-submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Profile;
