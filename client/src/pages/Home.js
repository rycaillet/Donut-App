import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DonutDetails from '../components/DonutDetails'
import DonutShop from '../components/DonutShop'
import { Link } from 'react-router-dom'

const Base_URL = 'http://localhost:3001/api'

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Donut app!</h1>
    </div>
  )
  //   const [donuts, setDonuts] = useState([])
  //   const [donutShop, setDonutShop] = useState([])

  //   const getDonuts = async () => {
  //     const response = await axios.get(`${Base_URL}/donuts`)

  //     setDonuts(response.data.donuts)
  //     console.log(response.data.donuts)
  //   }

  //   const getDonutShop = async () => {
  //     const response = await axios.get(`${Base_URL}/donutShops`)

  //     setDonutShop(response.data.donutShop)
  //     console.log(response.data.donutShop)
  //   }

  //   useEffect(() => {
  //     getDonuts()
  //     getDonutShop()
  //   }, [])
  //   console.log(donuts.donut_name)

  //   return (
  //     <div className="main">
  //       <h1>Donut Shops</h1>
  //       <section className="donutShop-container">
  //         {donutShop.map((donutShops) => (
  //           <Link to={`api/donutShops/${donutShops._id}`}>
  //             <DonutShop
  //               key={donutShops._id}
  //               donutShopName={donutShops.donutShop_name}
  //               location={donutShops.location}
  //               review={donutShops.review}
  //               url={donutShops.url}
  //               image={donutShops.image}
  //             />
  //           </Link>
  //         ))}
  //       </section>
  //     </div>
  //   )
}

export default Home
