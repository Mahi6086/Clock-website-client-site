import React from "react";
import c1 from "../../../images/Banner/c1.jpg";
import c2 from "../../../images/Banner/c2.jpg";
import c3 from "../../../images/Banner/c3.jpg";
import c4 from "../../../images/Banner/c8.jpg";
import c5 from "../../../images/Banner/c6.jpg";

const Collections = () => {
  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: "black" }}>
      <div className="container">
        <h1 className="text-center text-light mb-0">
          <span style={{ color: "#9F7A49" }}>SPECIAL</span> COLLECTIONS
        </h1>
        <div
          style={{
            backgroundColor: "#9F7A49",
            textAlign: "center",
            width: "200px",
            height: "2px",
            margin: "0px auto",
          }}
        ></div>
        <div className="row mt-5">
          <div className="col col-12 col-md-6">
            <img
              src={c1}
              className=" img-fluid d-block h-100  w-100"
              alt="..."
            />
          </div>
          <div className="col col-12 col-md-6">
            <div className="row g-3">
              <div className="col-md-6">
                <img src={c2} className=" img-fluid   w-100" alt="..." />
              </div>
              <div className="col-md-6">
                <img src={c3} className=" img-fluid   w-100" alt="..." />
              </div>
              <div className="col-md-6">
                <img src={c4} className=" img-fluid w-100" alt="..." />
              </div>
              <div className="col-md-6">
                <img src={c5} className=" img-fluid w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
