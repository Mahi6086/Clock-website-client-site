import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Register.css";

import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, loading, error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    // {!loading && <form onSubmit={handleLoginSubmit}>
    <div className="font">
      <form onSubmit={handleLoginSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="text">
            <b>Your Name</b>
          </label>
          <input
            onBlur={handleOnBlur}
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            onBlur={handleOnBlur}
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            onBlur={handleOnBlur}
            type="password"
            placeholder="Enter Password"
            name="password"
            id="psw"
            required
          />
          <hr />
          <div>
            <p>
              By creating an account you agree to our{" "}
              <Link style={{ textDecoration: "none" }} to="/">
                Terms & Privacy
              </Link>
              .
            </p>
            <div className="container signin">
              {loading && (
                <div className="spinner-grow text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              {user?.email && (
                <div
                  className="alert alert-success fw-bolder w-25 mx-auto"
                  role="alert"
                >
                  Alhumdulilah! Registration Successfully!!
                </div>
              )}
              {error && (
                <div className="alert alert-danger fw-bolder w-25" role="alert">
                  {error}
                </div>
              )}
            </div>
            <button type="submit" className="registerbtn">
              Register
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              Login now
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

/* import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData?.password !== loginData?.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div className="" style={{ marginBottom: "210px", marginTop: "100px" }}>
      {!isLoading && (
        <form onSubmit={handleLoginSubmit}>
          <h2 className="" style={{ color: "#9F7A49" }}>
            Create An Account
          </h2>
          <div className="mb-3 mt-3 w-25 mx-auto">
            <input
              name="name"
              type="text"
              onChange={handleOnChange}
              className="form-control"
              aria-describedby="yourName"
              id="exampleInputText"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3 mt-3 w-25 mx-auto">
            <input
              name="email"
              type="email"
              onChange={handleOnChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your E-mail"
            />
          </div>
          <div className="mb-3 w-25 mx-auto">
            <input
              name="password"
              type="password"
              onChange={handleOnChange}
              className="form-control"
              // id="exampleInputPassword1"
              placeholder="Your Password"
            />
          </div>
          <div className="mb-3 w-25 mx-auto">
            <input
              name="password2"
              type="password"
              onChange={handleOnChange}
              className="form-control"
              // id="exampleInputPassword1"
              placeholder="Re-Type Password"
            />
          </div>
          <button
            style={{ backgroundColor: "#9F7A49" }}
            type="button"
            className="btn btn-lg w-25 fw-bolder mb-2"
          >
            Register
          </button>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <h5>Already Registered? Please Login</h5>
          </NavLink>

          {isLoading && (
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {user.email && (
            <div
              className="alert alert-success fw-bolder w-25 mx-auto"
              role="alert"
            >
              Alhumdulilah! Registration Successfully!!
            </div>
          )}
          {authError && (
            <div className="alert alert-danger fw-bolder w-25" role="alert">
              {authError}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default Register;
 */
