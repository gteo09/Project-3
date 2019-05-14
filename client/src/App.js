import React from "react";
import "./App.css";
//import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Map from "./components/Map";

function App() {
  return (
    <div>
      <Navbar/>
      <Login/>
      <Map/>
      App
    </div>
  );
}

export default App;