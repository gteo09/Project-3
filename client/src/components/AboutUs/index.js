import React from "react";
import "./AboutUs.css";
import Gabe from "../../images/gabe.jpg";
import Justin from "../../images/justin.jpg";



const AboutUs = () => (
<div className="main">
    <section className="signup">
        <div className="container">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12"><h1>About Us</h1></div>
            <div class="w-100"></div>
            <div class="col-sm-6 col-md-6 col-lg-6">
                <img src={Justin} alt=""/>
                <div>Justin Graffeo</div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
                <img src={Gabe} alt=""/>
                <div>Gabe Teotonio</div>
            </div>            
            <div class="w-100"></div>
            <div class="col-sm-12 col-md-12 col-lg-12">
                <h3>
                    Just a couple o' dudes chillin' and codin' and strugglin'. Nawmean?
                </h3>
            </div>
        </div>
        </div>
    </section>
</div>
  );

export default AboutUs;
