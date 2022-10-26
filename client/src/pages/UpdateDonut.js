import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Base_URL = 'http://localhost:3001/api'

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
        const response = await axios.get(`${Base_URL}/donuts/${donutId}`)
        // console.log(response.data.donut)
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
      axios.put(`${Base_URL}/donuts/${donutId}`, donutState)
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateDonut
