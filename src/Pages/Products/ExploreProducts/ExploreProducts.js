import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PlaceOrder from "../PlaceOrder/PlaceOrder";

const ExploreProducts = () => {
  const { watchId } = useParams();
  const [exploreProducts, setExploreProducts] = useState({});

  // const {name, price} = exploreProducts;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${watchId}`)
      .then((res) => res.json())
      .then((data) => setExploreProducts(data));
  }, [watchId]);

  /* {
        const details = data.find((dp) => dp?.id == watchId);
        setExploreProducts(details);} */

  return (
    <div style={{ backgroundColor: "#F6F4F1" }} className="tour-details">
      <div className="container  pb-5 pt-5">
        <div>
          <h5 style={{ color: "#9F7A49" }} className="text-center fw-bold">
            LATEST WATCHES YOU CAN'T RESIST!
          </h5>
          <h2 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
            ONE STEP AHEAD WITH THE RIGHT TIME
          </h2>
          <p className="text-black-50 text-center mb-4">
            Time plays a significant role in our life. Time helps us make a good
            habit of structuring <br /> and organizing our daily activities. If
            you understand the value of time better, you can gain experience and
            develop skills over time.
          </p>
        </div>
        <div className="row mt-5 mx-5 shadow p-5 rounded rounded-3">
          <div className="col col-sm-12 col-md-6">
            <img
              className="rounded-3 img-fluid mt-5"
              src={exploreProducts?.image}
              alt=""
            />
          </div>
          <div style={{ marginTop: "40px" }} className="col col-sm-12 col-md-6">
            <div className="d-flex justify-content-between align-items-center">
              <h3 style={{ color: "Black" }} className="card-title fw-bolder ">
                {exploreProducts?.name}
              </h3>
              <span
                style={{ color: "#9F7A49" }}
                className="fw-bolder fs-4 mb-2"
              >
                RS.{exploreProducts?.price}
              </span>
            </div>

            <p className="text-justify">{exploreProducts?.description}</p>
            <h3 style={{ color: "#9F7A49" }} className="card-title fw-bolder ">
              Watch Details
            </h3>
            <div className="row d-flex ">
              <div className="col col-md-3">
                <h5 className="mb-3">Size:</h5>
                <h5>Color:</h5>
                <h5 className="mt-3">Material:</h5>
                <h5 className="mt-3">Vendor:</h5>
                <h5 className="mt-3">Type:</h5>
                <h5 className="mt-3">Availability:</h5>
              </div>
              <div className="col col-md-3">
                <p className="mb-3">-----------------</p>
                <p>-----------------</p>
                <p>-----------------</p>
                <p>-----------------</p>
                <p>-----------------</p>
                <p>-----------------</p>
              </div>
              <div className="col col-md-3">
                <p
                  style={{
                    color: "#9F7A49",
                    border: "1px solid #9F7A49",
                    fontWeight: "bolder",
                  }}
                >
                  700mm
                </p>
                <p
                  className=""
                  style={{
                    color: "#9F7A49",
                    border: "1px solid #9F7A49",
                  }}
                >
                  Gold/Black/Red
                </p>
                <p
                  style={{
                    color: "#9F7A49",
                    border: "1px solid #9F7A49",
                    fontWeight: "bolder",
                  }}
                >
                  Steel
                </p>
                <p
                  style={{
                    color: "#9F7A49",
                    border: "1px solid #9F7A49",
                    fontWeight: "bolder",
                  }}
                >
                  Baggit
                </p>
                <p
                  style={{
                    color: "#9F7A49",
                    border: "1px solid #9F7A49",
                    fontWeight: "bolder",
                    marginBottom: "0px",
                  }}
                >
                  Analog
                </p>
                <p
                  style={{
                    color: "#4F8A10",
                    fontSize: "19px",
                    fontWeight: "bold",
                    marginTop: "2px",
                  }}
                >
                  In Stock!
                </p>
              </div>
              <Link to="/placeOrder">
                <button
                  style={{ backgroundColor: "#9F7A49" }}
                  type="button"
                  className="btn btn-lg w-100 fw-bolder fs-5"
                >
                  <span className="fw-bolder fs-6 me-1 ">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  Purchase Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PlaceOrder
        key={exploreProducts?._id}
        exploreProducts={exploreProducts}
      ></PlaceOrder>
    </div>
  );
};

export default ExploreProducts;
