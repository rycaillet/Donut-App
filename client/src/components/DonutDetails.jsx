import React from 'react'

const DonutDetails = (props) => {
    return (
        <div className="donuts">
            <div className="img-wrapper">
                <img src={props.image} alt="shop-image" />
            </div>
            <div className="info-wrapper">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default DonutDetails