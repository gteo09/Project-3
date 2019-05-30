import React, {Component} from "react";
import ReactDOM from 'react-dom';
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
import setAuthToken from "../src/utils/setAuthToken";
import jwt_decode from "jwt-decode";
import loginUser from "../src/utils/API";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "../src/components/privateRoute/PrivateRoute";


if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
  
      // Redirect to login
      window.location.href = "/";
    }
}

class App extends React.Component {

  sectionStyle = {
    backgroundImage: `url(${Animals})`
  };


  render(){
    return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <Navbar/>
            <Switch>
            <div style={this.sectionStyle} className="backgroundimage">
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
              {/* {landing page when logged authenticated} */}
              {/* <Route exact path="/myprofile" component={MyProfile} /> */}
              {/* view specific user profile */}
              {/* <Route exact path="/profiles/:id" component={MyProfile} /> */}
              {/*Example to mess with*/}
              <Route exact path="/example" component={Example}/> 
              {/*Example to mess with*/}
              <Route exact path="/aboutus" component={AboutUsPage}/>      
              {/* <Route component={NotFound} /> */}
              <PrivateRoute exact path ="/privateprofile" component={MyProfile}></PrivateRoute>
              </div>
            </Switch>
            <Footer/>
        </Router>
      </React.Fragment>
    </Provider>
      );
  } 
}

export default App;