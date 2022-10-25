import { useState, useEffect } from 'react'
import DonutDetails from './DonutDetails'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Base_URL='http://localhost:3001/api'

const DonutShop = () => {

    let { id } = useParams()

    const [ donutShop, setDonutShop ] = useState({})
    const [ donuts, setDonuts] = useState([])

    const getDonutShop = async () => {
        const response = await axios.get(`${Base_URL}/donutShops/${id}`)
    
        setDonutShop(response.data.donutShop)
        console.log(response.data.donutShop)
      }

      const getDonutsByShop = async () => {
        const response = await axios.get(`${Base_URL}/donutShops/${id}/donuts`)

        setDonuts(response.data)
      }

      useEffect(() => {
        getDonutShop()
        getDonutsByShop()
      }, [id])

  return (
    <div className="donut-shops">
        <div className="info-wrapper">
            <h1>{donutShop.name}</h1>
        <div className="img-wrapper">
            <img src={donutShop.image} alt="shop-image" />
        </div>
            <h3>Location: {donutShop.location}</h3>
            <h4>Rating: {donutShop.review}</h4>
            <a href="link-to-donut-shop">{donutShop.url}</a>
        </div>
        {donuts.map((donut) => (
            <div>
            <h1>{donut.name}</h1>
            <img src={donut.image}></img>
            <h4>price: {donut.price}</h4>
            </div>
            
        ))}
        </div>
  )
}

export default DonutShop
