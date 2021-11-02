import React, { useState } from "react";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

const Login = ({ changeMode, setToken }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [submitError, setSubmitError] = useState();

  const validation = () => {
    let formIsValid = true;
    let errorsField = {};

    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        formIsValid = false;
        errorsField[key] = "Cannot be empty";
      }
    }

    setErrors(errorsField);
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
      return;
    } catch (error) {
      console.error(error.response.data);
      setSubmitError(error.response.data["non_field_errors"]);
    }
  };

  const handleClick = () => {
    changeMode();
  };
  return (
    <div className="login col-9 col-md-8 col-lg-6 col-xl-5">
      <p style={{ color: "red" }}>{submitError}</p>
      <div className="login-section ">
        <form>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
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
              className="form-control"
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
            <button className="link" onClick={handleClick}>
              Sign up now!
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
