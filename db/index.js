const mongoose = require('mongoose')
require('dotenv').config()

let MONGODB_URI = process.env.MONGODB_URI
// || 'mongodb://127.0.0.1:27017/donutDatabase'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`Successfully connected to MongoDB at ${MONGODB_URI}`)
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db
