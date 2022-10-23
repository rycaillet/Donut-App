import React from 'react'

const DonutShop = (props) => {
  return (
    <div className="donut-shops">
        <div className="img-wrapper">
            <img src={props.image} alt="shop-image" />
        </div>
        <div className="info-wrapper">
            <h3>{props.name}</h3>
            <p>Located at {props.location}</p>
            <p>{props.review}</p>
            <a href="link-to-donut-shop">{props.url}</a>
        </div>
        </div>
  )
}

export default DonutShop