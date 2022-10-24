import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DonutDetails from '../components/DonutDetails'
import DonutShop from '../components/DonutShop'
import { Link } from 'react-router-dom'

const Base_URL = 'http://localhost:3001/api'

const Home = () => {
  return (
    <div className="home-header">
      <h1>Welcome to my Donut app!</h1>
      <div className="home-img1">
        <img src="https://i.imgur.com/yTQdd7R.jpeg"></img>
      </div>
    </div>
  )
}

export default Home
