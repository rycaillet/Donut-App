import React from 'react';

const DonutDetails = ({ donutName, price, image, onClick }) => {
  return (
    <div className="donuts" onClick={onClick}>
      <div className="info-wrapper">
        <h3>{donutName}</h3>
        <div className="img-wrapper">
          <img src={image} alt="shop-image" />
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default DonutDetails;