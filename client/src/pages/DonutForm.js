import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import e from 'express'

const DonutFrom = () => {
  let navigate = useNavigate()
  const initialForm = {
    name: '',
    price: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/donuts', formState)
    setFormState(initialForm)
    navigate('/donuts')
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <div className="DonutForm">
      <h1>Add a New Donut</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Donut title</label>
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
        <div></div>
      </form>
    </div>
  )
}
