import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://calm-plains-59373.herokuapp.com/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };

  return (
    <Container>
      <div className="font order-status-handle">
        <h2 className="order-title">
          <span className="text-info fw-bolder">MAKE ADMIN</span>
        </h2>
        <hr />
        <form onSubmit={handleAdminSubmit}>
          <label className="label-text-status">
            <b>Enter Email</b>
          </label>
          <br />{" "}
          <input
            className="w-50 p-2 mt-2"
            type="email"
            placeholder="Your E-mail"
            onBlur={handleOnBlur}
            name="name"
          />{" "}
          <br />
          <input
            className="btn btn-info mt-3 w-50 mb-3 fw-bolder"
            type="submit"
            value="Make Admin"
          />
        </form>
        {success && (
          <div
            className="alert alert-success fw-bolder w-50 mx-auto"
            role="alert"
          >
            Alhumdulilah! Added Successfully!!
          </div>
        )}
      </div>
    </Container>
  );
};

export default MakeAdmin;

/* import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    console.log(user);
    fetch("https://calm-plains-59373.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Admin Added Successfully ");
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div className="" style={{ marginBottom: "210px", marginTop: "100px" }}>
     
      <form onSubmit={handleAdminSubmit}>
        <h2 className="fw-bolder mb-5" style={{ color: "#9F7A49" }}>
          MAKE AN ADMIN
        </h2>
        <div className="mb-3 mt-3 w-25 mx-auto">
          <input
            onBlur={handleOnBlur}
            type="email"
            className="form-control p-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your E-mail"
          />
        </div>
        <button
          style={{ backgroundColor: "#9F7A49" }}
          type="button"
          className="btn btn-lg w-25 fw-bolder mb-2"
        >
          Add Admin
        </button>

        {success && (
          <div
            className="alert alert-success fw-bolder w-25 mx-auto"
            role="alert"
          >
            Alhumdulilah! Add Admin Successfully!!
          </div>
        )}
      </form>
    </div>
  );
};

export default MakeAdmin;
  */
