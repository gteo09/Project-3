import React, { Component } from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Animals from "../images/animals.jpg";

class LoginUser extends Component {
  state = {
//  
};

  componentDidMount() {
// function to be defined
// needs to sho
  }

  render() {

    var sectionStyle = {
        backgroundImage: `url(${Animals})`
      }
  
    return (
        <div style={sectionStyle} className="backgroundimage">
            <Navbar/>
            <Login/>
        </div>
    );
  }
}

export default LoginUser;