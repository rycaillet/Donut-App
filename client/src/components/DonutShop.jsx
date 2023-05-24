import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

const DonutShop = () => {

    let { id } = useParams()

    const [ donutShop, setDonutShop ] = useState({})
    const [ donuts, setDonuts] = useState([])

    const getDonutShop = async () => {
        try{
          const response = await axios.get(`${BASE_URL}/donutShops/${id}`)
          setDonutShop(response.data.donutShop)
            } catch (err) {
              console.log(err)
            }
      }

      const getDonutsByShop = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/donutShops/${id}/donuts`)
            setDonuts(response.data)
            } catch (err) {
              console.log(err)
            }
      }

      useEffect(() => {
        getDonutShop()
        getDonutsByShop()
      }, [])

      const deleteDonut = async (donutId) => {
        try {
          const response = await axios.delete(`${BASE_URL}/donuts/${donutId}`)
          getDonutShop()
          getDonutsByShop()
        } catch (err) {
          console.log(err)
        }
      }

  return (
    <div className="donut-shops">
        <div className="info-wrapper">
            <h1>{donutShop?.name}</h1>
        <div className="img-wrapper">
            <img src={donutShop?.image} alt="shop-image" />
        </div>
            <h3>Location: {donutShop?.location}</h3>
            <h4>Rating: {donutShop?.review}</h4>
            <a href={`https://${donutShop.url}`} className="url">{donutShop?.url}</a>
        </div>
       
       <div>
        {donuts?.map((donut) => (
            <div key={donut?._id}>
            <h1>{donut?.name}</h1>
            <img src={donut?.image}></img>
            <h4>Price: {donut?.price}</h4>
            <div className="buttons">
            <button onClick={() => deleteDonut(donut?._id)} className="button1">x</button>
            <Link to={`/donut/${donut?._id}/update`}>
            <button className="button1">Update</button>
            </Link>
            </div>
            </div>
        ))}
        </div>
        <div className="buttons1">
        <Link type="button" to={`/donutshops/${id}/donutForm`}>
        <button className="button3">Add a new donut</button>
            </Link>
        </div>
        </div>
  )
}

export default DonutShop

