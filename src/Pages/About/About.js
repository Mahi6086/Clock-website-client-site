import React from "react";
import about from "../../images/about/abou-04_800x.jpg";
import about1 from "../../images/about/abo-02_200x200.png";
import about2 from "../../images/about/abo-03_200x200.png";
import about3 from "../../images/about/abo-04_200x200.png";

const About = () => {
  return (
    <div className="container mt-5">
      <div>
        <h4 style={{ color: "#9F7A49" }} className="text-center fw-bold">
          WORLD-CLASS STYLE WATCHES
        </h4>
        <h1
          style={{ color: "#212121", marginBottom: "30px" }}
          className="text-center  fw-bold"
        >
          A Next Generation Watch Shop
        </h1>
      </div>
      <div className="row g-5">
        <div className="col-12 col-sm-12 col-md-6 mb-5">
          <div className="d-flex justify-content-center align-items-center ">
            <div className="">
              <img className="" src={about1} alt="" />
            </div>

            <div className="text-start ms-3">
              <h3 style={{ color: "#9F7A49" }}>Watch For Men</h3>
              <p>
                Dialz is home to a vast assortment of men’s watches. Among our
                men’s watches, you’ll find dress styles, casual picks, luxury
                brands, athletic designs, and more–in short, a watch to suit
                virtually any need or occasion.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="w-50" src={about2} alt="" />
            <div className="text-start ms-3">
              <h3 style={{ color: "#9F7A49" }}>Watch For Women</h3>
              <p>
                Among our Women’s watches, you’ll find dress styles, casual
                picks, luxury brands, athletic designs, and more–in short, a
                watch to suit virtually any need or occasion.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="w-50" src={about3} alt="" />
            <div className="text-start ms-3">
              <h3 style={{ color: "#9F7A49" }}>Watch For Kids</h3>
              <p>
                Among our Kid’s watches, you’ll find dress styles, casual picks,
                luxury brands, athletic designs, and more–in short, a watch to
                suit virtually any need or occasion.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-12 col-md-6"
          style={{ marginTop: "50px" }}
        >
          <img
            className="img-fluid w-100  ms-lg-3 rounded-3 img"
            src={about}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
