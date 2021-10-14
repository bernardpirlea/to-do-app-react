import React, { useState } from "react";
import "./css/HomePage.css";
import logoImage from "../Images/to-do-logo.png";
import Login from "./Login";
import Signup from "./Signup";

const HomePage = () => {
  const [loginMode, setLoginMode] = useState(true);
  const changeMode = () => {
    setLoginMode(!loginMode);
  };
  return (
    <div className="homepage-container">
      <div className="app-logo">
        <img src={logoImage} alt="Logo" />
      </div>
      {loginMode && <Login changeMode={changeMode} />}
      {!loginMode && <Signup changeMode={changeMode} />}
    </div>
  );
};

export default HomePage;
