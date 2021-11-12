import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="" style={{ backgroundColor: "#F6F4F1" }}>
      <div className="container-md  ">
        <div>
          {/* <h5 style={{ color: "#9F7A49" }} className="text-center fw-bold">
            LATEST WATCHES YOU CAN'T RESIST!
          </h5>
          <h2
            style={{ color: "#212121" }}
            className="text-center text-light mb-3 fw-bold"
          >
            ONE STEP AHEAD WITH THE RIGHT TIME
          </h2> */}
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
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
