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
}
