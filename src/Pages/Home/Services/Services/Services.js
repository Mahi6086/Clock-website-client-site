import React, { useEffect, useState } from "react";

import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  /* `https://calm-plains-59373.herokuapp.com/services?email=${user.email}` */
  useEffect(() => {
    fetch(`https://calm-plains-59373.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="" style={{ backgroundColor: "#F6F4F1" }}>
      <div className="container-md  ">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-light fw-bolder text-black pt-5 mb-0"
          >
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
            {services.slice(0, 6).map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
