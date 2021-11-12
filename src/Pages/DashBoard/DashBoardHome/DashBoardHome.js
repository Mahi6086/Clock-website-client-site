import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Reviews from "../Reviews/Reviews";
import "./DashBoardHome.css";

const DashBoardHome = () => {
  const { user } = useAuth();
  const [control, setControl] = useState("addEvent");
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container ">
            <div className="col 12 col-md-2">
              <div className="admin-area h-100 pt-5">
                <h2
                  style={{
                    color: "#9F7A49",
                    fontFamily: "DM Sans",
                  }}
                  className="text-center fw-bolder"
                >
                  DashBoard
                </h2>
                <div className="all-menu mt-5 text-center">
                  <li
                    onClick={() => setControl("manageProducts")}
                    className="admin-menu p-2  fw-bolder fs-5"
                  >
                    <i class="fas fa-users me-1"></i> Manage Products
                  </li>
                  <li
                    onClick={() => setControl("addProducts")}
                    className="admin-menu p-2  fw-bolder fs-5"
                  >
                    <i class="fas fa-user-plus me-1"></i> Add Products
                  </li>
                  <li
                    onClick={() => setControl("myOrders")}
                    className="admin-menu p-2  fw-bolder fs-5"
                  >
                    <i class="fas fa-user-alt me-1"></i> My Orders
                  </li>
                  <li
                    onClick={() => setControl("pay")}
                    className="admin-menu p-2 text-
                    start fw-bolder fs-5"
                  >
                    <i class="fab fa-paypal me-1"></i> PAY
                  </li>
                  <li
                    onClick={() => setControl("reviews")}
                    className="admin-menu p-2  fw-bolder fs-5"
                  >
                    <i class="fas fa-comment me-1"></i> Reviews
                  </li>

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
                    <i class="fas fa-users me-1"></i> Manage All Orders
                  </li>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-10 text-center  text-center">
              <h1 className="mt-5 mb-3  W-50" style={{ fontFamily: "DM Sans" }}>
                Welcome!!
                <span
                  style={{ color: "#9F7A49" }}
                  className=" text-decoration-none P-3 rounded rounded-3 ms-2 me-2"
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
                {control === "addProducts" && <AddProduct></AddProduct>}
                {control === "manageProducts" && (
                  <ManageProducts></ManageProducts>
                )}
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
