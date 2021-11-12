import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.status = "Pending";
    // data.status = user?.email;

    axios.post("http://localhost:5000/addProducts", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });

    console.log(data);
  };

  return (
    <div>
      <div style={{ backgroundColor: "#F6F4F1" }}>
        <div className=" container pt-5 pb-5 rounded rounded-3">
          <h1
            style={{ color: "Black", fontSize: "40px" }}
            className="fw-bolder text-center pt-5 pb-5"
          >
            Purchase Your{" "}
            <span style={{ color: "#9F7A49" }}>Favourite Watch</span>
          </h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="text"
                value={user?.displayName}
                {...register("name")}
                required
                placeholder="Customer Name"
              />
              <br /> <br />
              <input
                //   defaultValue={data.status}
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="email"
                value={user?.email}
                {...register("email")}
                required
                placeholder="Customer E-mail"
              />
              <br /> <br />
              <select
                {...register("brand")}
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                placeholder="Watch Brand"
              >
                <option value="rolex">Rolex</option>
                <option value="omega">Omega</option>
                <option value="rado">Rado</option>
              </select>
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="text"
                {...register("watch")}
                required
                placeholder="Watch Name"
              />
              <br /> <br />
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="number"
                //   value={user?.displayName}
                {...register("price")}
                required
                placeholder="Watch Price"
              />
              <br /> <br />
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="link"
                {...register("image", { required: true })}
                required
                placeholder="Please Type image URL"
              />
              <br />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                style={{ backgroundColor: "#9F7A49" }}
                className="p-2 mb-5  btn  text-center w-100 fw-bolder fs-4"
                type="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
