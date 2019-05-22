import React from "react";
import "./App.css";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Home from "./pages/Home";
//import Wrapper from "./components/Wrapper";
import FarmProfile from "./pages/FarmerProfile";
import MyProfile from "./pages/MyProfile";
import AllFarms from "./pages/AllFarms";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "./components/Profile";
import Example from "./pages/Example";
import AboutUs from "./components/AboutUs"; //will need to change once we figure out how to stick the navbar


function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* intro to website, link to login form */}
            <Route exact path="/" component={LoginUser} />
            {/* view all producer profiles */}
            <Route exact path="/profile" component= {Profile}/>
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
          {/* Register a produer */}
          {/* <Route exact path="/producerform" component={ProducerForm} />  */}
          {/*Example to mess with*/}
          <Route exact path="/example" component={Example}/> 
          {/*Example to mess with*/}
          <Route exact path="/aboutus" component={AboutUs}/>              
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// {/* intro to website, link to login form */}
// <Route exact path="/" component={Home}/>
// {/* login page */}
// <Route exact path="/login" component={Login}/>
// {/* view all producer profiles */}
// <Route exact path="/profiles" component={Profiles}/>
// {/* view specific user profile */}
// <Route exact path="/profiles/:id" component={FarmProfile} />