import React from "react";
import b1 from "../../../images/Banner/banner1.jpg";
import b2 from "../../../images/Banner/banner2 (2) (1).jpg";
import b3 from "../../../images/Banner/banner3 (1) (1) (1).jpg";
const Banner = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="carousel-caption d-none d-md-block"
            style={{ marginBottom: "300px" }}
          >
            <h5>NEW ARRIVALS</h5>
            <h1
              style={{
                color: "#9F7A49",
                fontSize: "100px",
                fontWeight: "bolder",
              }}
            >
              Our Best Collections
            </h1>
          </div>
          <div>
            <img src={b1} className="img-fluid d-block  w-100" alt="..." />
          </div>
        </div>
        <div className="carousel-item">
          <img src={b2} className="img-fluid d-block  w-100" alt="..." />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ marginBottom: "300px" }}
          >
            <h5>NEW ARRIVALS</h5>
            <h1
              style={{
                color: "#9F7A49",
                fontSize: "100px",
                fontWeight: "bolder",
              }}
            >
              Our Best Collections
            </h1>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{ backgroundBlendMode: "multiply" }}
        >
          <img src={b3} className=" img-fluid d-block  w-100" alt="..." />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ marginBottom: "300px" }}
          >
            <h5>NEW ARRIVALS</h5>
            <h1
              style={{
                color: "#9F7A49",
                fontSize: "100px",
                fontWeight: "bolder",
              }}
            >
              Our Best Collections
            </h1>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
