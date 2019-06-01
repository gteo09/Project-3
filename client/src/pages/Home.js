import React from "react";
import "./pageStyles/home.css"
import vegetables from "../images/vegetables.jpg";
import farm from "../images/farm.jpg";
import table from "../images/table.jpg"
import agriculture from "../images/agriculture.jpg"

const Home =()=>{

    return(
    <div>
        <div className="jumbotron" id="jumbo">
            <h1 className="display-4">FoodChain</h1>
            <p className="lead">FoodChain is a marketplace created to connect small, local businesses and producers to promote the use of locally grown ingredients and products.
                        With Food Chain users will be able to browse what products local producers currently have, see when those products are available, and browse producer profiles to find other businesses with similar values. Our goal is to strengthen partnerships and reach within local communities by offering a platform for small businesses to gain visibility!
            </p>
        </div>
        <div classname="container-fluid">
            <div className="row" id="row-home">
                <div className="col-sm" >
                    <div className="card" id="card-right">
                        <img src={vegetables} className="card-img-top cardimg" alt="vegetables"></img>
                        <div className="card-body">
                            <h5 className="card-title">Register</h5>
                            <p className="card-text">Sign up today and see what opportunities await with small and local businesses!</p>
                            <a href="/register" className="btn btn-primary">Register Here!</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card">
                        <img src={agriculture} classNme="card-img-top cardimg" alt="agriculture"></img>
                        <div className="card-body">
                            <h5 className="card-title">Browse</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Check Out Producers</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card" id="card-left">
                        <img src={table} class="card-img-top cardimg" id="tableimg" alt="table"></img>
                        <div className="card-body">
                            <h5 className="card-title">Connect</h5>
                            <p className="card-text">Future updates will allow communication between producers and businesses through the app!</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
};

export default Home;