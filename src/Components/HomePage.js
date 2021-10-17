import React, { useState } from "react";
import "./css/HomePage.css";
import logoImage from "../Images/to-do-logo.png";
import Login from "./Login";
import Signup from "./Signup";

const HomePage = ({ setToken }) => {
  const [loginMode, setLoginMode] = useState(true);
  const changeMode = () => {
    setLoginMode(!loginMode);
  };
  return (
    <div className="homepage-container">
      <div className="app-logo">
        <img src={logoImage} alt="Logo" />
      </div>
      {loginMode && <Login changeMode={changeMode} setToken={setToken} />}
      {!loginMode && <Signup changeMode={changeMode} setToken={setToken} />}
    </div>
  );
};

export default HomePage;
