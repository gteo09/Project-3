import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/Home";
//import Wrapper from "./components/Wrapper";
import FarmProfile from "./pages/FarmerProfile";
import MyProfile from "./pages/MyProfile";
import AllFarms from "./pages/AllFarms";
import ProducerForm from "./components/ProducerForm"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* intro to website, link to login form */}
            <Route exact path="/" component={Login} />
            {/* view all producer profiles */}
            <Route exact path="/profiles" component= {FarmProfile}/>
            {/* view specific user profile */}
            <Route exact path="/profiles/:id" />
          {/*registering new user*/}
          <Route exact path="/register" component={Register} />
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
          <Route exact path="/producerform" component={ProducerForm} />           
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