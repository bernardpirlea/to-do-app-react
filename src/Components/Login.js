import React, { useState } from "react";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

const Login = ({ changeMode, setToken }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  const validation = () => {
    let formIsValid = true;
    if (!values["username"]) {
      formIsValid = false;
      setErrors({
        ...errors,
        ["username"]: "Cannot be empty",
      });
    }

    if (!values["password"]) {
      formIsValid = false;
      setErrors({
        ...errors,
        ["password"]: "Cannot be empty",
      });
    }
    return formIsValid;
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
      if (validation()) {
        const response = await axios.post(
          "http://localhost:8000/api/login/",
          values
        );
        setToken(response.data.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    changeMode();
  };
  return (
    <div className="login-section">
      <form className="col-5">
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">
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
          <span style={{ color: "red" }}>{errors["username"]}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
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
          <span style={{ color: "red" }}>{errors["password"]}</span>
        </div>
        <button
          type="submit"
          className="btn login-button"
          onClick={handleSubmit}
        >
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
