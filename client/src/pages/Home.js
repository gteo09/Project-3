import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home =()=>{
    return(
        <div>
            {/* <Navbar /> */}
            <div className="jumbotron jumbotron-fluid" >
            <h1 className="display-4 text-dark bg-light">Food Chain</h1>
                <p className="lead text-dark bg-light" id="jumbotext"> <strong>Food Chain is a marketplace created to connect local business to local farms to promote the use of locally grown ingredients within communities.
                    With Food Chain users will be able to browse what products local farms currently have, see when those farms are harvesting future products, and browse producer profiles to find other businesses with similar values.</strong></p>
            </div>
        </div>
    )
};

export default Home;
