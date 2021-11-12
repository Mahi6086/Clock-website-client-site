import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import Google from "../../../images/about/Group 573.png";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div className="" style={{ marginBottom: "210px", marginTop: "100px" }}>
      <form onSubmit={handleLoginSubmit}>
        <h2 className="" style={{ color: "#9F7A49" }}>
          LOGIN
        </h2>
        <div className="mb-3 mt-3 w-25 mx-auto">
          <input
            onBlur={handleOnChange}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your E-mail"
          />
        </div>
        <div className="mb-3 w-25 mx-auto">
          <input
            onBlur={handleOnChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Your Password"
          />
        </div>
        <button
          style={{ backgroundColor: "#9F7A49" }}
          type="button"
          className="btn btn-lg w-25 fw-bolder mb-2"
        >
          Login
        </button>
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <h5>New User? Please Register</h5>
        </NavLink>

        {isLoading && (
          <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {user?.email && (
          <div class="alert alert-success" role="alert">
            Alhumdulilah! Login Successfully!!
          </div>
        )}
        {authError && (
          <div class="alert alert-danger" role="alert">
            {authError}
          </div>
        )}
      </form>
      <p>----------------Or----------------</p>
      <div class="d-flex justify-content-center align-items-center">
        <button
          onClick={handleGoogleSignIn}
          style={{ backgroundColor: "#9F7A49" }}
          type="button"
          className="btn btn-lg w-25 fw-bolder"
        >
          <img
            src={Google}
            className="img-fluid me-2 mb-1"
            style={{ width: "30px" }}
            alt="..."
          />
          Google Signin
        </button>
      </div>
    </div>
  );
};

export default Login;
