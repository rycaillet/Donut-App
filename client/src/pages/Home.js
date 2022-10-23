import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DonutDetails from '../components/DonutDetails'
import DonutShop from '../components/DonutShop'
import { Link } from 'react-router-dom'

const Base_URL = 'http://localhost:3001/api'

const Home = () => {
  const [donuts, setDonuts] = useState([])
  const [donutShop, setDonutShop] = useState([])

  const getDonuts = async () => {
    const response = await axios.get(`${Base_URL}/donuts`)

    setDonuts(response.data.donuts)
    console.log(response.data.donuts)
  }

  const getDonutShop = async () => {
    const response = await axios.get(`${Base_URL}/donutShops`)

    setDonutShop(response.data.donutShop)
    console.log(response.data.donutShop)
  }

  useEffect(() => {
    getDonuts()
    getDonutShop()
  }, [])
  console.log(donuts.name)
}

export default Home
