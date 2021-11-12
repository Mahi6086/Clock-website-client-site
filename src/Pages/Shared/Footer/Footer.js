import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import pay from "../../../images/about/ssl-commerce.1d268dce.png";
const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "black", marginBottom: "0px" }}
      className="pt-5"
    >
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-white-50">
          <div className="col-md-3 text-start">
            <h4 className="text mt-4 mb-3">Connect With Us</h4>

            <ul
              style={{
                listStyle: "none",
                marginLeft: "-30px",
                marginBottom: "0px",
              }}
            >
              <li className="d-flex">
                <i className="fas fa-phone-alt text  mt-1 "></i>
                <p className=" fw-bolder ms-2">+880 1234 567 890</p>
              </li>
              <li className="d-flex">
                <i className="fas fa-map-marker-alt text mt-1"></i>
                <p className=" fw-bolder ms-3">Gulshan-1,Dhaka,Bangladesh.</p>
              </li>
              <li className="d-flex">
                <i className="fas fa-envelope text mt-1"></i>
                <p className=" fw-bolder ms-3">dialz@gmail.com</p>
              </li>
            </ul>
            <div
              className="row row-cols-md-4 g-1"
              style={{ fontSize: "1.5em" }}
            >
              <span>
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </span>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <h4 className="text mb-3">Information</h4>
            <ul style={{ listStyle: "none", marginLeft: "-30px" }}>
              <li className="logo">Search</li>
              <li className="logo">Products</li>
              <li className="logo">Shipping Deatils</li>
              <li className="logo">Store Locations</li>
              <li className="logo">Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-3 text-start ">
            <h4 className="text mb-3">Support</h4>
            <ul style={{ listStyle: "none", marginLeft: "-30px" }}>
              <li className="logo">About Us</li>
              <li className="logo">Return Center</li>
              <li className="logo">Deliveries</li>
              <li className="logo">Contact Us</li>
              <li className="logo">Terms of Use</li>
            </ul>
          </div>
          <div className="col-md-3">
            <img
              className="img-fluid w-100  ms-lg-3 rounded-3 img"
              src={pay}
              alt=""
            />
            {/* <div className="row row-cols-1 row-cols-md-3 g-2"></div> */}
          </div>
          <div>
            <hr className="" />
            <p className="text-center">
              All rights reserved Copyright © 2021 Dialz by{" "}
              <span className="text">Mahi Hasan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
