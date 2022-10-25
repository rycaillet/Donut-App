import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DonutDetails = ({donutName, price, image, onClick}) => {

    let { id } = useParams()

    return (
        <div className="donuts" onClick={onClick}>
        <div className="info-wrapper">
            <h3>{donutName}</h3>
        <div className="img-wrapper">
            <img src={image} alt="shop-image" />
        </div>
            <p>price: {price}</p>
        </div>
        </div>
    )
}

export default DonutDetails