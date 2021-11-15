import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import Google from "../../../images/about/Group 573.png";
import initializeFirebase from "../FireBase/firebase.init";
import useAuth from "../../hooks/useAuth";

initializeFirebase();

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {
    user,
    setUser,
    saveUser,
    loginUser,
    signInWithGoogle,
    loading,
    error,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";

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
    signInWithGoogle().then((result) => {
      const user = result.user;
      saveUser(user.email, user.displayName, "PUT");
      history.push(redirect_uri);
    });
  };

  return (
    <div className="font">
      <Container>
        <h1 className="">Login</h1>
        <p className="mb-3">Please login to create an account.</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            onBlur={handleOnChange}
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
            onBlur={handleOnChange}
            type="password"
            placeholder="Enter Password"
            name="password"
            id="psw"
            required
          />
          {loading && (
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {user?.email && (
            <div
              className="alert alert-success fw-bolder w-100 mx-auto"
              role="alert"
            >
              Alhumdulilah! Login Successfully!!
            </div>
          )}
          {error && (
            <div className="alert alert-danger fw-bolder w-100" role="alert">
              {error}
            </div>
          )}

          <button type="submit" className="registerbtn">
            Login
          </button>

          <Link
            style={{ textDecoration: "none", color: "#04AA6D" }}
            to="/register"
          >
            New User? Please Register
          </Link>
        </form>
        <h6
          style={{ textAlign: "center", color: "#04AA6D", marginTop: "20px" }}
        >
          OR SIGN IN USING GOOGLE
        </h6>
        <hr />
        <div className="d-flex justify-content-center align-items-center pb-5">
          <button
            onClick={handleGoogleSignIn}
            style={{ backgroundColor: "#04aa6d" }}
            type="button"
            className="btn btn-lg text-light w-100  opacity-75"
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
      </Container>
    </div>
  );
};

//   const [loginData, setLoginData] = useState({});
//   const {
//     user,
//     setUser,
//     saveUser,
//     loginUser,
//     signInWithGoogle,
//     loading,
//     error,
//   } = useAuth();

//   const location = useLocation();
//   const history = useHistory();

//   const redirect_uri = location.state?.from || "/";

//   const handleOnChange = (e) => {
//     const field = e.target.name;
//     const value = e.target.value;
//     const newLoginData = { ...loginData };
//     newLoginData[field] = value;
//     setLoginData(newLoginData);
//   };
//   const handleLoginSubmit = (e) => {
//     loginUser(loginData.email, loginData.password, location, history);
//     e.preventDefault();
//   };

//   const handleGoogleSignIn = () => {
//     signInWithGoogle().then((result) => {
//       const user = result.user;
//       saveUser(user.email, user.displayName, "PUT");
//       history.push(redirect_uri);
//     });
//   };

//   return (
//     <div className="font">
//       {/* <Header></Header> */}
//       <Container>
//         <form onSubmit={handleLoginSubmit}>
//           <h3 className="mb-3" style={{ color: "black" }}>
//             PLEASE LOGIN
//           </h3>
//           <label htmlFor="email">
//             <b>Email</b>
//           </label>
//           <br />
//           <input
//             onBlur={handleOnChange}
//             type="text"
//             placeholder="Enter Email"
//             name="email"
//             id="email"
//             required
//           />
//           <br />

//           <label htmlFor="psw">
//             <b>Password</b>
//           </label>
//           <br />
//           <input
//             onBlur={handleOnChange}
//             type="password"
//             placeholder="Enter Password"
//             name="password"
//             id="psw"
//             required
//           />
//           {loading && (
//             <div className="spinner-grow text-dark" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           )}
//           {user?.email && (
//             <div
//               className="alert alert-success fw-bolder w-100 mx-auto"
//               role="alert"
//             >
//               Alhumdulilah! Login Successfully!!
//             </div>
//           )}
//           {error && (
//             <div className="alert alert-danger fw-bolder w-100" role="alert">
//               {error}
//             </div>
//           )}

//           <button
//             style={{ backgroundColor: "#04aa6d" }}
//             type="button"
//             className="btn btn-lg w-100 fw-bolder mb-2 opacity-75"
//           >
//             Login
//           </button>
//           <br />

//           <Link
//             style={{ textDecoration: "none", color: "#04AA6D" }}
//             to="/register"
//           >
//             New User? Please Register
//           </Link>
//         </form>
//         <h6
//           style={{ textAlign: "center", color: "#04AA6D", marginTop: "20px" }}
//         >
//           OR SIGN IN USING GOOGLE
//         </h6>
//         <hr />
//         <div className="d-flex justify-content-center align-items-center pb-5">
//           <button
//             onClick={handleGoogleSignIn}
//             style={{ backgroundColor: "#04aa6d" }}
//             type="button"
//             className="btn btn-lg w-100 fw-bolder opacity-75"
//           >
//             <img
//               src={Google}
//               className="img-fluid me-2 mb-1"
//               style={{ width: "30px" }}
//               alt="..."
//             />
//             Google Signin
//           </button>
//         </div>
//       </Container>
//       {/* <Footer></Footer> */}
//     </div>
//   );
// };

export default Login;

/* import React, { useState } from "react";
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
          <div className="alert alert-success fw-bolder w-25 mx-auto" role="alert">
            Alhumdulilah! Login Successfully!!
          </div>
        )}
        {authError && (
          <div className="alert alert-danger" role="alert">
            {authError}
          </div>
        )}
      </form>
      <p>----------------Or----------------</p>
      <div className="d-flex justify-content-center align-items-center">
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
 */
