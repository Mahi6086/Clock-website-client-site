import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/dialz-logo_300x300.png";
import useAuth from "../../hooks/useAuth";

const Navber = () => {
  const { user, logout } = useAuth();
  return (
    <div className="p-1 ">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink to="/home" className="nav-link">
              <div className="">
                <img src={logo} alt="" />
              </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto fs-5 ">
                <NavLink
                  to="/products"
                  className="nav-link text-dark fw-bolder"
                  activeStyle={{
                    color: "#A99577",
                  }}
                >
                  SHOP
                </NavLink>

                <NavLink to="/about" className="nav-link text-dark fw-bolder">
                  ABOUT
                </NavLink>

                <NavLink
                  to="/contact"
                  className="nav-link text-dark fw-bolder "
                >
                  CONTACT
                </NavLink>
                {user.email && (
                  <NavLink
                    to="/dashBoard"
                    className="nav-link text-dark fw-bolder  me-2"
                  >
                    <span className="">
                      <i className="fas fa-user-shield me-1"></i>
                    </span>
                    DASHBOARD
                  </NavLink>
                )}

                {user.email ? (
                  <div

                  /*  style={{
                      backgroundColor: "tomato",
                      border: "none",
                      borderRadius: "10px",
                    }} */
                  >
                    <button
                      onClick={logout}
                      type="button"
                      className="btn btn-info text-dark  ms-1 fw-bolder fs-5"
                    >
                      logOut
                      <i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
                    </button>
                  </div>
                ) : (
                  <NavLink to="/register">
                    <div
                    /*  className="pb-3 mt-1"
                      style={{
                        backgroundColor: "tomato",
                        border: "none",
                        borderRadius: "10px",
                      }} */
                    >
                      <button
                        type="button"
                        className="btn btn-info text-dark   ms-1 fw-bolder fs-5 "
                      >
                        <i className="fas fa-user-plus text-dark me-2"></i>
                        Register
                      </button>
                    </div>
                  </NavLink>
                )}
                <div
                  // style={{ marginTop: "17px" }}
                  className="ms-2  d-flex justify-content-center align-items-center"
                >
                  <img
                    className="rounded rounded-circle w-25"
                    src={user?.photoURL}
                    alt=""
                  />
                  <a
                    href="#login"
                    className=" text-dark fw-bolder text-decoration-none ms-2"
                  >
                    {user?.displayName}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navber;
