import React from "react";
import img01 from "../../../images/review/player-1.png";
import img03 from "../../../images/review/player-3.png";
import img05 from "../../../images/review/player-5.png";

const Testimonals = () => {
  return (
    <div className="shadow-sm w-50 mx-auto">
      <h5 style={{ color: "#9F7A49" }}>TESTIMONIALS</h5>
      <h1 className="text-black fw-bolder">Client Speaks</h1>
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
          <div className="col carousel-item active ">
            <div className="card">
              <img
                src={img01}
                class="card-img-top img-fluid w-25 mx-auto"
                alt="..."
              />
              <div className="card-body carousel-caption">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          {/*  <div className="carousel-item active">
            
            <div className="carousel-caption d-none d-md-block">

              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div> */}
          <div className="carousel-item ">
            <div className="col ">
              <div className="card">
                <img
                  src={img03}
                  class="card-img-top img-fluid w-25 mx-auto"
                  alt="..."
                />
                <div className="card-body carousel-caption">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-caption">
            <div className="col ">
              <div className="card">
                <img
                  src={img05}
                  class="card-img-top img-fluid w-25 mx-auto"
                  alt="..."
                />
                <div className="card-body carousel-caption">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
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

export default Testimonals;
