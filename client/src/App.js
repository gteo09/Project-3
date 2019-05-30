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
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import {TweenLite, Power2} from "gsap/TweenMax";

// const HeroBanner = ({ image, min, max, children }) => (
//   <div className="hero-container">
//       <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
//           <div
//               className="hero-image"
//               style={{ backgroundImage: `url(${Animals})` }}
//           />
//       </Parallax>
//       <div className="hero-children">{children}</div>
//   </div>
// );

function App() {

  var sectionStyle = {
    backgroundImage: `url(${Animals})`
  }

  return (
  <React.Fragment>
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
  </React.Fragment>
  );
}

// const run = () => {
//   const root = document.createElement('div');
//   document.body.appendChild(root);

//   const scrollAnimation = { scrollTop: window.innerHeight };
//   const scrollTop = 0;

//   const tween = TweenLite.to(scrollAnimation, 2, {
//       scrollTop: scrollTop,
//       ease: Power2.easeInOut,
//       onUpdate: () => {
//           window.scrollTo(0, scrollAnimation.scrollTop);
//       }
//   });

//   window.addEventListener('mousewheel', function mouseHandler() {
//       tween.kill();
//       window.removeEventListener('mousewheel', mouseHandler, false);
//   }, false);

//   ReactDOM.render(<App />, root);
// };

// run();

export default App;