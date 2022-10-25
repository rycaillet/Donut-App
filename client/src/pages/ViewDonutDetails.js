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

  const deleteDonut = async (id) => {
    try {
      const response = await axios.delete(`http:localhost:3001/donuts/${id}`)
      console.log(response)
      getDonuts()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="main">
      <h1>Donuts</h1>
      <section className="donutShop-container">
        {donuts.map((donut) => (
          <>
            <DonutDetails
              key={donut._id}
              donutName={donut.name}
              price={donut.price}
              image={donut.image}
            />
            <button onClick={() => deleteDonut(donut._id)}>x</button>
          </>
        ))}
      </section>
    </div>
  )
}

export default ViewDonutDetails
