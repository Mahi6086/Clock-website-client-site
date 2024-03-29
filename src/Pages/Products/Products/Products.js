import React, { useEffect, useState } from "react";

import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  /* `${process.env.REACT_APP_SERVER_API}/services?email=${user.email}` */
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_API}/services`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <Navber></Navber>
      </div>
      <div className="" style={{ backgroundColor: "#F6F4F1" }}>
        <div className="container-md ">
          <div>
            <h1 className="text-light fw-bolder text-black pt-5 mb-0">
              <span style={{ color: "#9F7A49" }}>FEATURED</span> PRODUCTS
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
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 pb-5">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Products;
