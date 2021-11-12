import React from "react";
import { NavLink } from "react-router-dom";
import Google from "../../../images/about/Group 573.png";
const Login = () => {
  return (
    <div className="" style={{ marginBottom: "210px", marginTop: "100px" }}>
      <form>
        <h2 className="" style={{ color: "#9F7A49" }}>
          LOGIN
        </h2>
        <div className="mb-3 mt-3 w-25 mx-auto">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your E-mail"
          />
        </div>
        <div className="mb-3 w-25 mx-auto">
          <input
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
      </form>
      <p>----------------Or----------------</p>
      <div class="d-flex justify-content-center align-items-center">
        <button
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
