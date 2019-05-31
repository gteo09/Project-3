import React from "react";
import "./AboutUs.css";
import Gabe from "../../images/gabe.jpg";
import Justin from "../../images/justin.jpg";

const AboutUs = () => (
    <div className="main aboutusmain">
        <section className="signup">
            <div className="container aboutcontainer">
            <div class="row boxprops">
                <div class="col-sm-12 col-md-12 col-lg-12"><h1>About Us</h1></div>
                <div class="w-100"></div>
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <img src={Justin} alt="" className="rounded profilepics"/>
                    <div>Justin Graffeo, MA in C-Kwull *</div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <img src={Gabe} alt="" className="rounded"/>
                    <div>Gabe Teotonio, PhD in Mapology *</div>
                </div>            
                <div class="w-100"></div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <h5>
                    Food Chain is a marketplace created to connect local business to local farms to promote the use of locally grown ingredients within communities.
                    With Food Chain users will be able to browse what products local farms currently have, see when those farms are harvesting future products, and browse producer profiles to find other businesses with similar values.
                    </h5>
                </div>
                <div>
                    * Unable to verify these claims
                </div>
            </div>
            </div>
        </section>
    </div>
);

export default AboutUs;
