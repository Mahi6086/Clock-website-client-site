import React from "react";
import b1 from "../../../images/about/w2.jpg"; /* banner1.jpg */
import b2 from "../../../images/about/w1.jpg"; /* banner2 (2) (1).jpg */
import b3 from "../../../images/about/w3.jpg"; /* banner3 (1) (1) (1).jpg */
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="">
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
            <div className="carousel-caption row">
              <div className="col-md-6" style={{ marginBottom: "100px" }}>
                <h6 style={{ color: "#CBBA93" }}>EMPIRE COLLECTION</h6>
                <h1
                  style={{
                    color: "#CBBA9C",
                    fontSize: "35px",
                    fontWeight: "bolder",
                  }}
                >
                  The Watch Everyone Desires!
                </h1>
                <p style={{ color: "#CBBA93" }}>
                  The best in class elegment watches from the luxury brand swiss
                  eagle <br /> high-quality watches into which a lot of care has
                  gone in.
                </p>

                <NavLink to="/products">
                  <button
                    style={{
                      color: "#CBBA9C",
                      backgroundColor: "black",
                      border: "2px solid #CBBA9C",
                    }}
                    type="button"
                    className="btn btn-outline fw-bolder ps-3 pe-3"
                  >
                    BUY NOW
                  </button>
                </NavLink>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div>
              <img
                style={{ backgroundBlendMode: "multiply" }}
                src={b1}
                className="img-fluid d-block  w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ backgroundBlendMode: "multiply" }}
              src={b2}
              className="img-fluid d-block  w-100"
              alt="..."
            />
            <div className="carousel-caption row">
              <div className="col-md-6" style={{ marginBottom: "100px" }}>
                <h6 className="text-black">BUILT FOR MEN</h6>
                <h1
                  style={{
                    color: "black",
                    fontSize: "40px",
                    fontWeight: "bolder",
                  }}
                >
                  An Extraordinary Classic
                </h1>
                <p className="text-black ">
                  ThIS is the best in class effective watches from the luxury
                  brand watch.co and <br />
                  gizmo has put into lot of efforts put in these high quality
                  watches. high-quality watches.
                </p>

                <NavLink to="/products">
                  <button
                    style={{
                      color: "black",
                      backgroundColor: "#9C7C65",
                      border: "2px solid black",
                    }}
                    type="button"
                    className="btn btn-outline fw-bolder ps-3 pe-3"
                  >
                    BUY NOW
                  </button>
                </NavLink>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ backgroundBlendMode: "multiply" }}
          >
            <img
              style={{ backgroundBlendMode: "multiply" }}
              src={b3}
              className=" img-fluid d-block  w-100"
              alt="..."
            />
            <div className="carousel-caption row">
              <div className="col-md-6"></div>
              <div className="col-md-6" style={{ marginBottom: "100px" }}>
                <h6 className="text-black">NEW ARRAIVAL</h6>
                <h1
                  style={{
                    color: "black",
                    fontSize: "40px",
                    fontWeight: "bolder",
                  }}
                >
                  Our Best Collections
                </h1>
                <p className="text-black ">
                  ThIS is the best in class effective watches from the luxury
                  brand watch.co and <br />
                  gizmo has put into lot of efforts put in these high quality
                  watches. high-quality watches.
                </p>

                <NavLink to="/products">
                  <button
                    style={{
                      color: "black",
                      backgroundColor: "#ECECEC",
                      border: "2px solid black",
                    }}
                    type="button"
                    className="btn btn-outline fw-bolder ps-3 pe-3"
                  >
                    BUY NOW
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
