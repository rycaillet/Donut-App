const mongoose = require('mongoose')

let MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/donutDatabase'
//Rycaillet:<password>@donut-app.hx9boji.mongodb.net/?retryWrites=true&w=majority

// let dbUrl =
//   process.env.NODE_ENV === 'production'
//     ? process.env.MONGODB_URI
//     : 'mongodb://127.0.0.1:27017/<database_name>'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db
