import React from "react";
import "./Card.css"

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.images[0]} alt="rasm" className="card-img" />
        <div>
          <h2 className="card-title">
            {props.title.length < 12
              ? props.title
              : props.title.slice(0, 9) + "..."}
          </h2>
          <p className="card-text">
            {props.description.length < 55
              ? props.description
              : props.description.slice(0, 52) + "..."}
          </p>
          <button className="card-btn">Purchase Now</button>
        </div>
      </div>
    </>
  );
}

export default Card;