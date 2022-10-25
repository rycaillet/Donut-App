import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DonutForm = () => {
  let navigate = useNavigate()
  const initialForm = {
    name: '',
    price: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/donutShops/donuts', formState)
    setFormState(initialForm)
    navigate(`/api/donuts/${donutId}`)
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <div className="DonutForm">
      <h1>Add a New Donut</h1>
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
          <label htmlFor="image"></label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={formState.image}
            placeholder="image url"
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default DonutForm
