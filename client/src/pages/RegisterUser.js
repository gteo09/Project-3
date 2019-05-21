import React, { Component } from "react";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import Animals from "../images/animals.jpg";

class RegisterUser extends Component {
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
        <Navbar fixed="top"/>
        <Register/>
      </div>
    );
  }
}

export default RegisterUser;
