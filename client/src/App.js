import React from "react";
import "./App.css";
//import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import FarmProfile from "./pages/FarmerProfile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          {/* intro to website, link to login form */}
            <Route exact path="/" />
            {/* login page */}
            <Route exact path="/login" />
            {/* view all producer profiles */}
            <Route exact path="/profiles" component= {FarmProfile}/>
            {/* view specific user profile */}
            <Route exact path="/profiles/:id" />
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