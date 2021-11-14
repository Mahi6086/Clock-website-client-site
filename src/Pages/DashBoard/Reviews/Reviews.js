import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const Reviews = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://calm-plains-59373.herokuapp.com/rating", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });

    /* console.log(data);
    if (data.insertedId) {
      alert("added successfully");
      reset();
    } */
  };
  return (
    <div
      style={{ marginTop: "10px", backgroundColor: "#F6F4F1" }}
      className="shadow p-4 rounded rounded-4"
    >
      <h1
        style={{ /* color: "#9F7A49", */ fontSize: "45px" }}
        className="mt-1 mb-3 text-center text-info fw-bolder"
      >
        Reviews
      </h1>

      <div className="container mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
            type="link"
            {...register("image", { required: true })}
            required
            placeholder="Please Type image URL"
          />
          <br />
          <br />
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6 bg-white"
            type="text"
            {...register("name")}
            required
            placeholder="Your Name"
          />
          <br /> <br />
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6 bg-white"
            type="text"
            {...register("title")}
            required
            placeholder="Designation"
          />
          <br /> <br />
          {/* include validation with required or other standard HTML validation rules */}
          <textarea
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
            type="textarea"
            {...register("description", { required: true })}
            required
            placeholder="Description"
          />
          <br />
          <br />
          <input
            className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
            type="number"
            {...register("rating")}
            required
            placeholder="rating number"
          />
          <br /> <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            /* style={{ backgroundColor: "#9F7A49" }} */
            className="p-2 mb-5  btn bg-info  text-center w-100 fw-bolder fs-4"
            type="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Reviews;
