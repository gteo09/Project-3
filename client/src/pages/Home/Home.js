import React from "react";
import Navbar from "../../components/Navbar";

const Home =()=>{
    return(
        <div>
            <Navbar />
            <div className="jumbotron" >
            <h1 className="display-4">Food Chain</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classNames for typography and spacing to space content out within the larger container.</p>
            </div>
            
        </div>
    )
};

export default Home;
