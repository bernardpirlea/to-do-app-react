import React from "react";
import "./css/HomePage.css";
import logoImage from "../Images/to-do-logo.png";
import Login from "./Login";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="app-logo">
        <img src={logoImage} alt="Logo Image" />
      </div>
      <Login />
    </div>
  );
};

export default HomePage;
