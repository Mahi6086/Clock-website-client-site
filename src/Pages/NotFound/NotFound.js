import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notFound w-50 mx-auto">
      <Link to="/home">
        <button className="btn btn-lg bg-danger text-warning fw-bolder">
          Hey,Go to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
