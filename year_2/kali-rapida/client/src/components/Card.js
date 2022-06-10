import React from "react";

const Card = ({ description }) => {
  return (
    <div className="card info-card">
      <p>{description}</p>
    </div>
  );
};

export default Card;
