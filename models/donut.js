const { Schema } = require('mongoose')

const Donut = new Schema(
  {
    donut_name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    donutShop_id: { type: Schema.Types.ObjectId, ref: 'donutShop_id' }
  },
  { timestamps: true }
)

module.exports = Donut
