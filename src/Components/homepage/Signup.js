import React, { useState } from "react";
import axios from "axios";

const initialValues = {
  email: "",
  username: "",
  password: "",
};

const Signup = ({ changeMode, setToken }) => {
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

  const handleClick = () => {
    changeMode();
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setValues({
      ...values,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validation()) {
        const response = await axios.post(
          "http://localhost:8000/api/register/",
          values
        );
        if (response.data.error) {
          setSubmitError(response.data.error);
        } else {
          setToken(response.data.token);
        }
      }
      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login col-9 col-md-8 col-lg-6 col-xl-5">
      <p style={{ color: "red" }}>{submitError}</p>
      <div className="login-section">
        <form>
          <div className="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              value={values.email}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors["email"]}</span>
          </div>
          <div className="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              value={values.username}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors["username"]}</span>
          </div>
          <div className="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              value={values.password}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors["password"]}</span>
          </div>
          <button type="submit" class="btn login-button" onClick={handleSubmit}>
            Sign up
          </button>
          <span className="mx-2">
            Already a member?
            <button className="link" onClick={handleClick}>
              Log In!
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
