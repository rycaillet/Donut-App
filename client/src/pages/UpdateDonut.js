import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BASE_URL = 'https://donut-app.herokuapp.com/api'

const UpdateDonut = () => {
  let { donutId } = useParams()
  let navigate = useNavigate()

  const initialForm = {
    name: '',
    price: '',
    image: '',
    donutShop_id: donutId
  }

  const [donutState, setDonutState] = useState(initialForm)

  useEffect(() => {
    const getDonutById = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/donuts/${donutId}`)
        setDonutState(response.data.donut)
      } catch (err) {
        console.log(err)
      }
    }

    getDonutById()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      axios.put(`${BASE_URL}/donuts/${donutId}`, donutState)
    } catch (err) {
      console.log(err)
    }

    setDonutState(initialForm)
    navigate(`/donutshops/${donutState.donutShop_id}`)
  }

  const handleChange = (e) => {
    setDonutState({ ...donutState, [e.target.id]: e.target.value })
  }

  return (
    <div className="update-donut">
      <h1>Edit Donut</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Donut Name:</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={donutState?.name}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={donutState?.image}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            onChange={handleChange}
            value={donutState?.price}
            required
          ></input>
        </div>
        <div>
          <button type="submit" className="button2">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateDonut
