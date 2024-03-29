import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BASE_URL = 'https://donut-app.herokuapp.com/api'

const ViewDonutShops = () => {
  const [donutShop, setDonutShop] = useState([])

  const getDonutShop = async () => {
    const response = await axios.get(`${BASE_URL}/donutShops`)

    setDonutShop(response.data.donutShop)
  }

  useEffect(() => {
    getDonutShop()
  }, [])

  return (
    <div className="main-donutShop-container">
      <h1 className="title">Donut Shops</h1>
      <section className="donutShop-container">
        {donutShop?.map((donutShops) => (
          <Link to={`/donutshops/${donutShops._id}`} key={donutShops._id} className="donutShop-link">
            <h2 className="donutShop-name">{donutShops.name}</h2>
            <img src={donutShops.image} alt={donutShops.name} className="donutShop-image"></img>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default ViewDonutShops
