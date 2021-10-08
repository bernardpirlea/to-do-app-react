import React from "react";
import Header from "./Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container homepage d-flex">
        <button type="button" className="btn col-4 btn-success btn-lg">
          Login
        </button>
        <button type="button" className="btn col-4 btn-outline-success btn-lg">
          Register
        </button>
      </div>
    </div>
  );
};

export default HomePage;
