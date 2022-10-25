const db = require('../db')
const { DonutShop, Donut } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const dunkin = await DonutShop.find({ name: 'Dunkin' })
  const duckDonuts = await DonutShop.find({ name: 'Duck Donuts' })
  const donutChew = await DonutShop.find({ name: 'DONUTCHEW' })
  const texasDonuts = await DonutShop.find({ name: 'Texas Donuts' })

  const donuts = [
    {
      donut_name: 'Strawberry frosted with sprinkles',
      price: '$1.09',
      image:
        'https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=800&height=746&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FFWXDC5Za9XHusggqFW34Nw%2Fnormalized.jpg',
      donutShop_id: dunkin[0]._id
    },
    {
      donut_name: 'Spider donut',
      price: '$1.59',
      image: 'https://pbs.twimg.com/media/EknrHRTWkAI_kH3.jpg',
      donutShop_id: dunkin[0]._id
    },
    {
      donut_name: 'Werewolf',
      price: '$2.28',
      image:
        'https://d2nmqj11l1ij0u.cloudfront.net//cms/thumbnails/00/550x550/images/menu-items/seasonal/Werewolf.png',
      donutShop_id: duckDonuts[0]._id
    },
    {
      donut_name: 'Rasberry Fluff',
      price: '$2.28',
      image:
        'https://d2nmqj11l1ij0u.cloudfront.net//cms/thumbnails/00/550x550/images/menu-items/donuts/Raspberry-Fluff.png',
      donutShop_id: duckDonuts[0]._id
    },
    {
      donut_name: 'Red Velvet',
      price: '$2.75',
      image:
        'https://static.wixstatic.com/media/b322c9_fd01cddab3a04713ab6dca90abeae6e0~mv2.jpg/v1/crop/x_0,y_238,w_4267,h_3791/fill/w_340,h_302,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_JPG.jpg',
      donutShop_id: donutChew[0]._id
    },
    {
      donut_name: 'Oreo cookies & cream mochi donut',
      price: '$2.75',
      image:
        'https://static.wixstatic.com/media/b322c9_55602ec5fb9b4133b40b1eac1cac3058~mv2.jpg/v1/crop/x_0,y_223,w_4006,h_3559/fill/w_340,h_302,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/oreo%20cookie_JPG.jpg',
      donutShop_id: donutChew[0]._id
    },
    {
      donut_name: 'Chocolate texas donut basic',
      price: '$3.49',
      image:
        'https://usakor.com/texasdonutsva-lorton/wp-content/uploads/sites/244/2020/10/Texas-donuts-basic-2-500x375.jpg',
      donutShop_id: texasDonuts[0]._id
    },
    {
      donut_name: 'Glazed texas donut basic',
      price: '$3.49',
      image:
        'https://www.fronteraridge.com/wp-content/uploads/2016/10/8092563177_48b5681eb7.jpg',
      donutShop_id: texasDonuts[0]._id
    }
  ]

  await Donut.insertMany(donuts)
  console.log('Created donuts with Donut Shops')
}

const run = async () => {
  await main()
  db.close()
}

run()
