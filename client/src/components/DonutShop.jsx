import React from 'react'

const DonutShop = ({donutShopName, location, review, url, image}) => {
  return (
    <div className="donut-shops">
        <div className="info-wrapper">
            <h3>{donutShopName}</h3>
        <div className="img-wrapper">
            <img src={image} alt="shop-image" />
        </div>
            <p>Location: {location}</p>
            <p>Rating: {review}</p>
            <a href="link-to-donut-shop">{url}</a>
        </div>
        </div>
  )
}

export default DonutShop