const db = require('../db')
const Donut = require('../models/donut')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const donuts = []
}
