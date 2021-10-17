import React, { useState } from "react";
import axios from "axios";

const initialValues = {
  email: "",
  username: "",
  password: "",
};

const Signup = ({ changeMode, setToken }) => {
  const [values, setValues] = useState(initialValues);

  const handleClick = () => {
    changeMode();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:8000/api/register/",
        values
      );
      setToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-section">
      <form className="col-5">
        <div className="mb-3">
          <label for="emailInput" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="usernameInput" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="usernameInput"
            value={values.username}
            onChange={handleInputChange}
            name="username"
          />
        </div>
        <div className="mb-3">
          <label for="passwordInput" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            value={values.password}
            onChange={handleInputChange}
            name="password"
          />
        </div>
        <button type="submit" class="btn login-button" onClick={handleSubmit}>
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
