import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_API}/services`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  console.log(booking);
  // const url = `${process.env.REACT_APP_SERVER_API}/services/${id}`;
  const cancelOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `${process.env.REACT_APP_SERVER_API}/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Order cancel successfully");
            const remain = booking.filter((order) => order._id !== id);
            setBooking(remain);
          }
        });
    }
  };

  return (
    <div>
      <div className="" style={{ backgroundColor: "#F6F4F1" }}>
        <div className="container-md ">
          <div>
            <h1 className="text-light fw-bolder text-black pt-5 mb-0">
              <span style={{ color: "#9F7A49" }}>ALL</span> PRODUCTS
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
              {booking.map((bk) => (
                <div key={bk._id}>
                  <div className="col">
                    <div
                      //   style={{ border: "2px solid #9F7A49" }}
                      className="card h-100 service"
                    >
                      <img
                        src={bk.image}
                        className="card-img-top rounded-3  mx-auto"
                        alt="..."
                      />
                      <div className="card-body ms-1">
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="card-title fw-bolder ">{bk.name}</h4>
                          <span
                            style={{ color: "#9F7A49" }}
                            className="fw-bolder fs-4 mb-2"
                          >
                            RS.{bk.price}
                            {/* $350/per */}
                          </span>
                        </div>
                        <p className="card-text text-black-50 text-start">
                          {bk.description}
                        </p>

                        <button
                          onClick={() => cancelOrder(bk._id)}
                          type="button"
                          className="btn text-dark bg-info text-center fw-bold w-100"
                        >
                          <span className="fw-bolder  fs-6 me-1 mt-2">
                            <i className="fas fa-shopping-cart"></i>
                          </span>
                          Delete Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
