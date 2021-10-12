import React from "react";

const Login = ({ changeMode }) => {
  const handleClick = () => {
    changeMode();
  };
  return (
    <div className="login-section">
      <form className="col-5">
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
          Login
        </button>
        <span className="mx-2">
          Not a member?
          <a className="link" onClick={handleClick}>
            {" "}
            Sign up now!
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
