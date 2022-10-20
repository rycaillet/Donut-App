const mongoose = require('mongoose')
const DonutSchema = require('./donut')
const DonutShopSchema = require('./donutShop')

const Donut = mongoose.model('Book', DonutSchema)
const DonutShop = mongoose.model('Publisher', DonutShopSchema)

module.exports = {
  Donut,
  DonutShop
}
