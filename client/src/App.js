import React, {Component} from "react";
import "./App.css";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Home from "./pages/Home";
//import Wrapper from "./components/Wrapper";
import FarmProfile from "./pages/FarmerProfile";
import MyProfile from "./pages/MyProfile";
import AllFarms from "./pages/AllFarms";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import CreateProfile from "./pages/CreateProfile";
import Example from "./pages/Example";
import AboutUsPage from "./pages/AboutUsPage"; 
import Animals from "../src/images/animals.jpg";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {

  var sectionStyle = {
    backgroundImage: `url(${Animals})`
  }

  return (
    <h>
    <Router>
      <Navbar/>
        <Switch>
        <div style={sectionStyle} className="backgroundimage">
          {/* intro to website, link to login form */}
            <Route exact path="/" component={LoginUser} />
          {/* view all producer profiles */}
            <Route exact path="/createprofile" component= {CreateProfile}/>
          {/*registering new user*/}
          <Route exact path="/register" component={RegisterUser} />
          {/*registering new user*/}
          <Route exact path="/home" component={Home} />
          {/* login page */}
          {/* view all producer profiles */}
          <Route exact path="/farmprofiles" component={AllFarms} />
          {/* view specific producer profiles */}
          <Route exact path="/farmprofiles/:id" component= {FarmProfile}/>
          {/* view specific user profile */}
          <Route exact path="/profiles/:id" component={MyProfile} />
          {/*Example to mess with*/}
          <Route exact path="/example" component={Example}/> 
          {/*Example to mess with*/}
          <Route exact path="/aboutus" component={AboutUsPage}/>      
          {/* <Route component={NotFound} /> */}
          </div>
        </Switch>
        <Footer/>
    </Router>
    </h>
  );
}


export default App;