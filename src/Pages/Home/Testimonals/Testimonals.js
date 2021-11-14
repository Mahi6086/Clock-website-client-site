import React, { useEffect, useState } from "react";
import Rating from "react-rating";

// import img01 from "../../../images/review/player-1.png";
/* import img03 from "../../../images/review/player-3.png";
import img05 from "../../../images/review/player-5.png"; */

const Testimonals = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rating")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        What Our
        <span className="border-3 border-bottom border-warning">
          Clients Say Ab
        </span>
        out Us?
      </h2>
      <div className="pb-5 h-100">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div>
            {reviews.map((review) => (
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="px-5 pt-3 pb-5">
                    <div className="px-5 my-5 shadow-lg w-100 bg-light rounded-20">
                      <img
                        width="200"
                        className="mx-auto rounded-circle d-block"
                        src={review.image}
                        alt=""
                      />
                      <div className="pb-5 mt-3 text-center">
                        <h4>{review.name}</h4>
                        <small>
                          <span className="text-second">{review.title} </span>
                          <span className="px-2">at</span>
                          <span className="text-warning">
                            The Nielsen Company
                          </span>
                        </small>

                        <p className="mx-auto col-sm-8">{review.description}</p>

                        <Rating
                          className="text-warning"
                          initialRating={review.rating}
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          readonly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;

{
  /*  <div className="allrating">
        {reviews.map((review) => (

          <Review
          key={review.name}
          review={review}
          
          ></Review>
         
        ))}
      </div> */
}

{
  /* <div className="single-rate">
            <q>{r.description} </q> <br />
            <Rating
              initialRating={r.rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            />
            <h6>
              Name: <span style={{ color: "blue" }}> {r.name}</span>
            </h6>
          </div> */
}
