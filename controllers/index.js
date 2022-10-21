const { Donut, DonutShop } = require('../models')

const createDonutShop = async (req, res) => {
  try {
    const donutShop = await new DonutShop(req.body)
    await donutShop.save()
    return res.json({ donutShop })
  } catch (error) {
    return res.json({ error: error.message })
  }
}

const getAllDonutShops = async (req, res) => {
  try {
    const donutShop = await DonutShop.find({})
    return res.json({ donutShop })
  } catch (error) {
    return res.send(error.message)
  }
}

const createDonut = async (req, res) => {
  try {
    const donut = await new Donut(req.body)
    await donut.save()
    return res.json({ donut })
  } catch (error) {
    return res.json({ error: error.message })
  }
}

const getAllDonuts = async (req, res) => {
  try {
    const donuts = await Donut.find()
    return res.json({ donuts })
  } catch (error) {
    return res.send(error.message)
  }
}

const getDonutById = async (req, res) => {
  try {
    const { id } = req.params
    const donut = await Donut.findById(id)
    if (donut) {
      return res.json({ donut })
    }
    return res.send('Donut with the specific ID does not exist')
  } catch (error) {
    return res.send(error.message)
  }
}

const updateDonut = async (req, res) => {
  try {
    const donut = await Donut.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(donut)
  } catch (error) {
    return res.send(error.message)
  }
}

const deleteDonut = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Donut.findByIdAndDelete(id)
    if (deleted) {
      return res.send('Donut deleted')
    }
    throw new Error('Donut not found')
  } catch (error) {
    return res.send(error.message)
  }
}

module.exports = {
  createDonut,
  getAllDonuts,
  getDonutById,
  updateDonut,
  deleteDonut,
  createDonutShop,
  getAllDonutShops
}
