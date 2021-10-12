import React from "react";

const Signup = ({ changeMode }) => {
  const handleClick = () => {
    changeMode();
  };
  return (
    <div className="login-section">
      <form className="col-5">
        <div className="mb-3">
          <label for="emailInput" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="emailInput" />
        </div>
        <div className="mb-3">
          <label for="usernameInput" class="form-label">
            Username
          </label>
          <input type="text" class="form-control" id="usernameInput" />
        </div>
        <div className="mb-3">
          <label for="passwordInput" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="passwordInput" />
        </div>
        <button type="submit" class="btn login-button">
          Sign up
        </button>
        <span className="mx-2">
          Already a member?
          <a className="link" onClick={handleClick}>
            {" "}
            Log In!
          </a>
        </span>
      </form>
    </div>
  );
};

export default Signup;
