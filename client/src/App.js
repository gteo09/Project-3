import React from "react";
import "./App.css";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Profile from "./components/Profile";

function App() {
  return (
    <div style={{backgroundColor: "grey"}}>
      <Register/>
    </div>
  );
}

export default App;