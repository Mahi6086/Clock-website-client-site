import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    console.log(user);
    fetch("http://localhost:5000/users/admin", {
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
            className="form-control"
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
          Login
        </button>

        {/*  {isLoading && (
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )} */}
        {success && (
          <div
            className="alert alert-success fw-bolder w-25 mx-auto"
            role="alert"
          >
            Alhumdulilah! Add Admin Successfully!!
          </div>
        )}
        {/*  {authError && (
        <div className="alert alert-danger" role="alert">
          {authError}
        </div>
      )} */}
      </form>
    </div>
  );
};

export default MakeAdmin;
