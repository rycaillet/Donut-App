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
    // console.log(response.data.donuts)
  }

  useEffect(() => {
    getDonuts()
  }, [])

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
          </>
        ))}
      </section>
      <div>
        <button>
          <Link to={`/donuts/donutForm`}>Add a donut</Link>
        </button>
      </div>
    </div>
  )
}

export default ViewDonutDetails
