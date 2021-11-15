import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Reviews from "../Reviews/Reviews";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../hooks/useAuth";
const drawerWidth = 240;

function DashBoardHome(props) {
  const { user, admin, handleLogOut } = useAuth();

  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link style={{ textDecoration: "none", padding: "6px" }} to="/">
        <Button variant="text">HomePage</Button>
      </Link>
      <br />

      {admin ? (
        <Box>
          <Link
            style={{ textDecoration: "none", padding: "6px" }}
            to={`${url}/makeAdmin`}
          >
            <Button variant="text">Make Admin</Button>
          </Link>
          <br />
          <Link
            style={{ textDecoration: "none", padding: "6px" }}
            to={`${url}/manageAllOrders`}
          >
            <Button variant="text">All Orders</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", padding: "6px" }}
            to={`${url}/addProducts`}
          >
            <Button variant="text">Add Service</Button>
          </Link>
          <br />

          <Link
            style={{ textDecoration: "none", padding: "6px" }}
            to={`${url}/manageProducts`}
          >
            <Button variant="text">Manage All Products</Button>
          </Link>
        </Box>
      ) : (
        <Box>
          <Link
            style={{ textDecoration: "none", padding: "6px" }}
            to={`${url}`}
          >
            <Button style={{ textDecoration: "none" }} variant="text">
              DashBoard
            </Button>
          </Link>
          <br />
          <Link
            style={{ textDecoration: "none", padding: "6px" }}
            to={`${url}/reviews`}
          >
            <Button variant="text">Rate us</Button>
          </Link>
          <br />

          <Link
            style={{ textDecoration: "none", padding: "6px" }}
            to={`${url}/pay`}
          >
            <Button variant="text">Pay Now</Button>
          </Link>

          <br />
          <Link
            style={{ textDecoration: "none", padding: "6px" }}
            to={`${url}/myOrders`}
          >
            <Button variant="text">My Orders</Button>
          </Link>
          <br />
        </Box>
      )}

      <Divider />
      <Button
        style={{ marginLeft: "20px", marginTop: "20px" }}
        onClick={handleLogOut}
        variant="contained"
      >
        Logout
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <h3>
              Hello,{" "}
              <span style={{ color: "violet" }}> {user.displayName}</span>{" "}
            </h3>
          </Route>
          <Route exact path={`${path}/`}></Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/allOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <Route path={`${path}/reviews`}>
            <Reviews></Reviews>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <AdminRoute path={`${path}/addProducts`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoardHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoardHome;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import AdminRoute from "../../Login/AdminRoute/AdminRoute";
// import AddProduct from "../AddProduct/AddProduct";
// import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
// import ManageProducts from "../ManageProducts/ManageProducts";
// import MyOrders from "../MyOrders/MyOrders";
// import Pay from "../Pay/Pay";
// import Reviews from "../Reviews/Reviews";
// import "./DashBoardHome.css";

// const DashBoardHome = () => {
//   const { user, handleLogOut, admin } = useAuth();
//   const [control, setControl] = useState("addEvent");

//   return (
//     <div className="admin-container">
//       <div className="dashboard">
//         <div className="admin-box">
//           <div className="row admin-container ">
//             <div className="col 12 col-md-2">
//               <div className="admin-area h-100 pt-5">
//                 <h1
//                   style={{
//                     /* color: "#9F7A49", */
//                     fontFamily: "DM Sans",
//                   }}
//                   className="text-center text-info fw-bolder"
//                 >
//                   DashBoard
//                 </h1>

//                 <div className="all-menu mt-5 text-center">
//                   {admin && (
//                     <div>
//                       <li
//                         onClick={() => setControl("manageProducts")}
//                         className="admin-menu p-2  fw-bolder fs-5"
//                       >
//                         <i className="fas fa-users me-1"></i> Manage Products
//                       </li>

//                       <li
//                         onClick={() => setControl("addProducts")}
//                         className="admin-menu p-2  fw-bolder fs-5"
//                       >
//                         <i className="fas fa-shopping-cart me-1"></i> Add
//                         Products
//                       </li>
//                     </div>
//                   )}

//                   <li
//                     onClick={() => setControl("myOrders")}
//                     className="admin-menu p-2  fw-bolder fs-5"
//                   >
//                     <i className="fas fa-user-alt me-1"></i> My Orders
//                   </li>
//                   <li
//                     onClick={() => setControl("pay")}
//                     className="admin-menu p-2 text-
//                     start fw-bolder fs-5"
//                   >
//                     <i className="fab fa-paypal me-1"></i> PAY
//                   </li>
//                   <li
//                     onClick={() => setControl("reviews")}
//                     className="admin-menu p-2  fw-bolder fs-5"
//                   >
//                     <i className="fas fa-comment me-1"></i> Reviews
//                   </li>
//                   {admin && (
//                     <div>
//                       <li
//                         onClick={() => setControl("makeAdmin")}
//                         className="admin-menu p-2  fw-bolder fs-5"
//                       >
//                         <i className="fas fa-user-shield me-1"></i> Make Admin
//                       </li>

//                       <li
//                         onClick={() => setControl("manageAllOrders")}
//                         className="admin-menu p-2  fw-bolder fs-5"
//                       >
//                         <i className="fas fa-users me-1"></i> Manage All Orders
//                       </li>
//                     </div>
//                   )}
//                 </div>
//                 <div style={{ marginTop: "80px" }}>
//                   {user.email ? (
//                     <div>
//                       <button
//                         onClick={handleLogOut}
//                         type="button"
//                         className="btn btn-info text-dark  ms-1 fw-bolder fs-5"
//                       >
//                         logOut
//                         <i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
//                       </button>
//                     </div>
//                   ) : (
//                     <NavLink to="/register">
//                       <div>
//                         <button
//                           type="button"
//                           className="btn btn-info text-dark   ms-1 fw-bolder fs-5 "
//                         >
//                           <i className="fas fa-user-plus text-dark me-2"></i>
//                           Register
//                         </button>
//                       </div>
//                     </NavLink>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 col-md-10 text-center  text-center">
//               <h1 className="mt-5 mb-3  W-50" style={{ fontFamily: "DM Sans" }}>
//                 Welcome!!
//                 <span
//                   // style={{ color: "#9F7A49" }}
//                   className=" text-decoration-none P-3 rounded rounded-3 ms-2 me-2 text-info"
//                 >
//                   {user.displayName}.
//                 </span>
//                 Have a Nice Day.
//               </h1>

//               <div className="right-part ">
//                 {control === "pay" && <Pay></Pay>}
//                 {control === "reviews" && <Reviews></Reviews>}
//                 {control === "myOrders" && <MyOrders></MyOrders>}

//                 {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}

//                 {control === "addProducts" && <AddProduct></AddProduct>}

//                 {control === "manageProducts" && (
//                   <ManageProducts></ManageProducts>
//                 )}

//                 {control === "manageAllOrders" && (
//                   <ManageAllOrders></ManageAllOrders>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoardHome;
