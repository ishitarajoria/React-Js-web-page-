import React from "react";
import "./detailsPage.css";
const DetailsPage = ({ car }) => {
  return (
    <div className="details">
      <div className="image">
        <img src={car.url} alt="" />
      </div>

      <div className="detail">
        <p>{car.brand}</p>
        <p>{car.price}</p>
        <p>{car.color}</p>
        <p>{car.average}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
