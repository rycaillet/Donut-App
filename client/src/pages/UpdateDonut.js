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
    <h1 className="heading">Edit Donut</h1>
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="name">Donut Name:</label>
        <input
          type="text"
          id="name"
          className="input-field"
          onChange={handleChange}
          value={donutState?.name}
          required
        />
      </div>
      <div>
        <label className="label" htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          className="input-field"
          onChange={handleChange}
          value={donutState?.image}
          required
        />
      </div>
      <div>
        <label className="label" htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          className="input-field"
          onChange={handleChange}
          value={donutState?.price}
          required
        />
      </div>
      <div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default UpdateDonut
