import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DonutShop from '../components/DonutShop'

const Base_URL = 'http://localhost:3001/api'

const ViewDonutShops = () => {
  const [donutShop, setDonutShop] = useState([])

  const getDonutShop = async () => {
    const response = await axios.get(`${Base_URL}/donutShops`)

    setDonutShop(response.data.donutShop)
    console.log(response.data.donutShop)
  }

  useEffect(() => {
    getDonutShop()
  }, [])

  return (
    <div className="main">
      <h1>Donut Shops</h1>
      <section className="donutShop-container">
        {donutShop.map((donutShops) => (
          <DonutShop
            key={donutShops._id}
            donutShopName={donutShops.name}
            location={donutShops.location}
            review={donutShops.review}
            url={donutShops.url}
            image={donutShops.image}
          />
        ))}
      </section>
    </div>
  )
}

export default ViewDonutShops
