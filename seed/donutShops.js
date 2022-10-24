const db = require('../db')
const { DonutShop } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const donutShops = [
    {
      donutShop_name: 'Dunkin',
      location: '10020 Main St, Fairfax, VA 22031',
      review: '3 out of 5 stars',
      url: 'locations.dunkindonuts.com',
      image: 'https://i.imgur.com/syeDQkp.jpeg'
    },
    {
      donutShop_name: 'Duck Donuts',
      location: '10694 Fairfax Blvd, Fairfax, VA 22030',
      review: '4 out of 5 stars',
      url: 'duckdonuts.com',
      image: 'https://i.imgur.com/Aolszob.jpeg'
    },
    {
      donutShop_name: 'DONUTCHEW',
      location: '11703 Fair Oaks Mall #L-145, Fairfax, Va 22033',
      review: '4 out of 5 stars',
      url: 'donutchew.com',
      image:
        'https://patch.com/img/cdn20/users/22924509/20220719/010427/styles/patch_image/public/img-0629___19130244295.jpg'
    },
    {
      donutShop_name: 'Texas Donuts',
      location: '13830 Lee Hwy #4, Centreville, VA 20120',
      review: '5 out of 5 stars',
      url: 'texasdonutsva.com',
      image:
        'https://fastly.4sqi.net/img/general/600x600/3604877_h0luO5QhSv2rTO7cuHr7fr8LUzvlq-V4Ipr7vDjRFrw.jpg'
    }
  ]

  await DonutShop.insertMany(donutShops)
  console.log('Created Donut Shops')
}

const run = async () => {
  await main()
  db.close()
}

run()
