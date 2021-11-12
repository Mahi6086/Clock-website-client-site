import React from "react";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { id, img, name, description, price } = props.product;
  return (
    <div>
      <div className="col">
        <div
          //   style={{ border: "2px solid #9F7A49" }}
          className="card h-100 service"
        >
          <img
            src={img}
            className="card-img-top rounded-3  mx-auto"
            alt="..."
          />
          <div className="card-body ms-1">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title fw-bolder ">{name}</h4>
              <span
                style={{ color: "#9F7A49" }}
                className="fw-bolder fs-4 mb-2"
              >
                RS.{price}
                {/* $350/per */}
              </span>
            </div>
            <p className="card-text text-black-50 text-start">{description}</p>
            <Link to={`/exploreProducts/${id}`}>
              <button
                style={{ backgroundColor: "#9F7A49" }}
                type="button"
                className="btn text-dark text-center fw-bold w-100"
              >
                <span className="fw-bolder fs-6 me-1 mt-2">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
