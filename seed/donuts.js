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
      name: 'Strawberry frosted with sprinkles',
      price: '$1.09',
      image:
        'https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=800&height=746&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FFWXDC5Za9XHusggqFW34Nw%2Fnormalized.jpg',
      donutShop_id: dunkin[0]._id
    },
    {
      name: 'Spider donut',
      price: '$1.59',
      image:
        'https://s3.amazonaws.com/cms.ipressroom.com/285/files/20209/5f86e77b2cfac229d5960955_Spider+Donut/Spider+Donut_a8772e8c-5218-4561-89b3-5faeb5b17494-prv.jpg',
      donutShop_id: dunkin[0]._id
    },
    {
      name: 'Butter Pecan donut',
      price: '$1.59',
      image:
        'https://www.chewboom.com/wp-content/uploads/2023/04/New-Butter-Pecan-Donut.jpg',
      donutShop_id: dunkin[0]._id
    },
    {
      name: 'Black Eyed Susan donut',
      price: '$2.15',
      image:
        'https://arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4YM7PLCOBBGINPWSKBG2VQVPXU.jpg',
      donutShop_id: dunkin[0]._id
    },
    {
      name: 'Werewolf',
      price: '$2.28',
      image:
        'https://d2nmqj11l1ij0u.cloudfront.net//cms/thumbnails/00/550x550/images/menu-items/seasonal/Werewolf.png',
      donutShop_id: duckDonuts[0]._id
    },
    {
      name: 'Rasberry Fluff',
      price: '$2.28',
      image:
        'https://d2nmqj11l1ij0u.cloudfront.net//cms/thumbnails/00/550x550/images/menu-items/donuts/Raspberry-Fluff.png',
      donutShop_id: duckDonuts[0]._id
    },
    {
      name: 'Bacon in the Sun',
      price: '$2.25',
      image:
        'https://d2nmqj11l1ij0u.cloudfront.net//cms/thumbnails/00/550x550/images/menu-items/donuts/bacon-in-the-sun.png',
      donutShop_id: duckDonuts[0]._id
    },
    {
      name: 'Beach Ball',
      price: '$2.25',
      image:
        'https://d2nmqj11l1ij0u.cloudfront.net//cms/thumbnails/00/550x550/images/menu-items/donuts/beach-ball-carnival-sprinkles.png',
      donutShop_id: duckDonuts[0]._id
    },
    {
      name: 'Red Velvet',
      price: '$3.50',
      image:
        'https://static.wixstatic.com/media/b322c9_fd01cddab3a04713ab6dca90abeae6e0~mv2.jpg/v1/crop/x_0,y_238,w_4267,h_3791/fill/w_340,h_302,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_JPG.jpg',
      donutShop_id: donutChew[0]._id
    },
    {
      name: 'Oreo cookies & cream mochi donut',
      price: '$3.50',
      image:
        'https://static.wixstatic.com/media/b322c9_55602ec5fb9b4133b40b1eac1cac3058~mv2.jpg/v1/crop/x_0,y_223,w_4006,h_3559/fill/w_340,h_302,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/oreo%20cookie_JPG.jpg',
      donutShop_id: donutChew[0]._id
    },
    {
      name: 'Coffee',
      price: '$3.50',
      image:
        'https://static.wixstatic.com/media/b322c9_9fc9e09db06a4f2483c904c8d3963c92~mv2.jpg/v1/crop/x_0,y_229,w_4097,h_3640/fill/w_484,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%EC%BB%A4%ED%94%BC_JPG.jpg',
      donutShop_id: donutChew[0]._id
    },
    {
      name: 'Churro',
      price: '$3.50',
      image:
        'https://static.wixstatic.com/media/b322c9_3b4f8b637add46dca52bfe99c4cf9091~mv2.jpg/v1/crop/x_0,y_226,w_4041,h_3590/fill/w_484,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%EC%B8%84%EB%A1%9C_JPG.jpg',
      donutShop_id: donutChew[0]._id
    },
    {
      name: 'Chocolate texas donut basic',
      price: '$3.49',
      image:
        'https://usakor.com/texasdonutsva-lorton/wp-content/uploads/sites/244/2020/10/Texas-donuts-basic-2-500x375.jpg',
      donutShop_id: texasDonuts[0]._id
    },
    {
      name: 'Glazed texas donut basic',
      price: '$3.49',
      image:
        'https://www.fronteraridge.com/wp-content/uploads/2016/10/8092563177_48b5681eb7.jpg',
      donutShop_id: texasDonuts[0]._id
    },
    {
      name: 'Cookies and Cream',
      price: '$1.79',
      image:
        'https://usakor.com/texasdonutsva-centreville/wp-content/uploads/sites/192/2020/10/cookies-and-cream.jpg',
      donutShop_id: texasDonuts[0]._id
    },
    {
      name: 'Apple Fritter',
      price: '$1.79',
      image:
        'https://usakor.com/texasdonutsva-centreville/wp-content/uploads/sites/192/2020/10/apple-fritter.jpg',
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
