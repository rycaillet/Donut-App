import DonutDetails from '../components/DonutDetails'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Base_URL = 'http://localhost:3001/api'

const ViewDonutDetails = () => {
  const [donuts, setDonuts] = useState([])

  const getDonuts = async () => {
    const response = await axios.get(`${Base_URL}/donuts`)

    setDonuts(response.data.donuts)
    console.log(response.data.donuts)
  }

  useEffect(() => {
    getDonuts()
  }, [])

  return (
    <div className="main">
      <h1>Donut Shops</h1>
      <section className="donutShop-container">
        {donuts.map((donut) => (
          <DonutDetails
            key={donut._id}
            donutName={donut.donut_name}
            price={donut.price}
            image={donut.image}
          />
        ))}
      </section>
    </div>
  )
}

export default ViewDonutDetails
