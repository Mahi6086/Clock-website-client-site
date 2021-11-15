import React from "react";
import contact1 from "../../images/contact/location.png";
import contact2 from "../../images/contact/viber.png";
import contact3 from "../../images/contact/email.png";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
const Contact = () => {
  return (
    <div>
      <div>
        <Navber></Navber>
      </div>
      <div style={{ backgroundColor: "#F6F4F1" }} className="pt-5">
        <div className="container-md ">
          <div>
            <h4 style={{ color: "#9F7A49" }} className="text-center fw-bold">
              We are here to help
            </h4>
            <h1
              style={{ color: "#212121" }}
              className="text-center mb-3 fw-bold"
            >
              Reach Us Anyway
            </h1>
            <p className="text-black-50 text-center mb-4">
              For your best watches collections you can call to dialz or email
              <br /> to dialz or come to our dialz location.we ensure to give
              you stylish external wrist watches.
            </p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100 p-3 shadow">
                  <img
                    src={contact1}
                    className="card-img-top w-25 mx-auto"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title fw-bolder ">Location</h4>
                    <p className="card-text text-black-50 mb-2">
                      Gulshan-1,Dhaka,Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card p-3 h-100 shadow">
                  <img
                    src={contact2}
                    className="card-img-top w-25 mx-auto"
                    alt="..."
                  />
                  <div className="card-body text-center ">
                    <h4 className="card-title fw-bolder">Phone No</h4>
                    <p className="card-text text-black-50 mb-2">
                      +880 1234 567 890
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card p-3 h-100 shadow ">
                  <img
                    src={contact3}
                    className="card-img-top w-25 mx-auto"
                    alt="..."
                  />
                  <div className="card-body text-center ">
                    <h4 className="card-title fw-bolder">Address</h4>
                    <p className="card-text text-black-50 mb-2">
                      Hello@dialz.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pb-5">
            {/* form */}
            <div>
              <h4 style={{ color: "#9F7A49" }} className="text-center fw-bold">
                We are available
              </h4>
              <h1
                style={{ color: "#212121" }}
                className="text-center mb-3 fw-bold"
              >
                Any Question? Feel Free to Contact
              </h1>
            </div>
            <form className="row g-3 mt-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control p-3 bg-white border border-2"
                  placeholder="First name*"
                  aria-label="First name"
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="text"
                  className="form-control p-3 bg-white border border-2"
                  placeholder="Last name*"
                  aria-label="Last name"
                />
              </div>
              <div className="col-md-6">
                {/* <label for="inputEmail4" className="form-label ">
                Email
              </label> */}
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder=" Your email*"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                {/* <label for="inputPassword4" className="form-label p-3">
                Password
              </label> */}
                <input
                  type="password"
                  className="form-control p-3 bg-white border border-2"
                  placeholder=" Your password*"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                {/* <label for="inputAddress" className="form-label p-3">
                Address
              </label> */}
                <input
                  type="text"
                  className="form-control p-3 bg-white border border-2"
                  id="inputAddress"
                  placeholder="Address"
                />
              </div>
              <div className="form-floating col-12">
                <textarea
                  className="form-control p-3 text-black-50"
                  placeholder="Write your comment here*"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2" className="text-black-50">
                  Write your comment here*
                </label>
              </div>
              <div className="col-12">
                <button
                  style={{ backgroundColor: "#9F7A49" }}
                  type="submit"
                  className="btn text-dark rounded-pill ps-3 pe-3 pt-3 pb-3 fw-bold"
                >
                  SUBMIT MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
