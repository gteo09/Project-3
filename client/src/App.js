import React from "react";
import "./App.css";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div style={{backgroundColor: "red"}}>
      <Register/>
    </div>
  );
}

export default App;