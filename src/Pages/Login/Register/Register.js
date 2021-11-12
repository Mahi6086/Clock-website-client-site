import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="" style={{ marginBottom: "210px", marginTop: "100px" }}>
      <form>
        <h2 className="" style={{ color: "#9F7A49" }}>
          Create An Account
        </h2>
        <div className="mb-3 mt-3 w-25 mx-auto">
          <input
            type="text"
            className="form-control"
            id="exampleInputText"
            aria-describedby="TextHelp"
            placeholder="Your Name"
          />
        </div>
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
          Register
        </button>
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <h5>Already Registered? Please Login</h5>
        </NavLink>
      </form>
    </div>
  );
};

export default Register;
