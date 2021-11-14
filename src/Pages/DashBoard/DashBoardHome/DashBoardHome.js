import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Reviews from "../Reviews/Reviews";
import "./DashBoardHome.css";

const DashBoardHome = () => {
  const { user, handleLogOut, admin } = useAuth();
  const [control, setControl] = useState("addEvent");

  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container ">
            <div className="col 12 col-md-2">
              <div className="admin-area h-100 pt-5">
                <h1
                  style={{
                    /* color: "#9F7A49", */
                    fontFamily: "DM Sans",
                  }}
                  className="text-center text-info fw-bolder"
                >
                  DashBoard
                </h1>

                <div className="all-menu mt-5 text-center">
                  {admin && (
                    <div>
                      <li
                        onClick={() => setControl("manageProducts")}
                        className="admin-menu p-2  fw-bolder fs-5"
                      >
                        <i className="fas fa-users me-1"></i> Manage Products
                      </li>

                      <li
                        onClick={() => setControl("addProducts")}
                        className="admin-menu p-2  fw-bolder fs-5"
                      >
                        <i className="fas fa-shopping-cart me-1"></i> Add
                        Products
                      </li>
                    </div>
                  )}

                  <li
                    onClick={() => setControl("myOrders")}
                    className="admin-menu p-2  fw-bolder fs-5"
                  >
                    <i className="fas fa-user-alt me-1"></i> My Orders
                  </li>
                  <li
                    onClick={() => setControl("pay")}
                    className="admin-menu p-2 text-
                    start fw-bolder fs-5"
                  >
                    <i className="fab fa-paypal me-1"></i> PAY
                  </li>
                  <li
                    onClick={() => setControl("reviews")}
                    className="admin-menu p-2  fw-bolder fs-5"
                  >
                    <i className="fas fa-comment me-1"></i> Reviews
                  </li>
                  {admin && (
                    <div>
                      <li
                        onClick={() => setControl("makeAdmin")}
                        className="admin-menu p-2  fw-bolder fs-5"
                      >
                        <i className="fas fa-user-shield me-1"></i> Make Admin
                      </li>

                      <li
                        onClick={() => setControl("manageAllOrders")}
                        className="admin-menu p-2  fw-bolder fs-5"
                      >
                        <i className="fas fa-users me-1"></i> Manage All Orders
                      </li>
                    </div>
                  )}
                </div>
                <div style={{ marginTop: "80px" }}>
                  {user.email ? (
                    <div>
                      <button
                        onClick={handleLogOut}
                        type="button"
                        className="btn btn-info text-dark  ms-1 fw-bolder fs-5"
                      >
                        logOut
                        <i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
                      </button>
                    </div>
                  ) : (
                    <NavLink to="/register">
                      <div>
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
                </div>
              </div>
            </div>
            <div className="col-12 col-md-10 text-center  text-center">
              <h1 className="mt-5 mb-3  W-50" style={{ fontFamily: "DM Sans" }}>
                Welcome!!
                <span
                  // style={{ color: "#9F7A49" }}
                  className=" text-decoration-none P-3 rounded rounded-3 ms-2 me-2 text-info"
                >
                  {user.displayName}.
                </span>
                Have a Nice Day.
              </h1>

              <div className="right-part ">
                {control === "pay" && <Pay></Pay>}
                {control === "reviews" && <Reviews></Reviews>}
                {control === "myOrders" && <MyOrders></MyOrders>}

                {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}

                <AdminRoute>
                  {" "}
                  {control === "addProducts" && <AddProduct></AddProduct>}
                </AdminRoute>

                <AdminRoute>
                  {" "}
                  {control === "manageProducts" && (
                    <ManageProducts></ManageProducts>
                  )}
                </AdminRoute>

                {control === "manageAllOrders" && (
                  <ManageAllOrders></ManageAllOrders>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
