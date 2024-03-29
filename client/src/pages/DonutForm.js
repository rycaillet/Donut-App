import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const BASE_URL = 'https://donut-app.herokuapp.com/api'

const DonutForm = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  const initialForm = {
    name: '',
    price: '',
    image: '',
    donutShop_id: id
  }

  const [formState, setFormState] = useState(initialForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}/donuts`, formState)

    setFormState(initialForm)
    navigate(`/donutshops/${id}`)
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <div className="donutForm">
      <h1 className="add">Add a New Donut</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Donut Name:</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formState.name}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={formState.image}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            onChange={handleChange}
            value={formState.price}
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

export default DonutForm
