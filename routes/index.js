const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// router.get('/', (req, res) => res.send('This is the first page!'))

router.get('/donutShops', controllers.getAllDonutShops)

router.post('/donutShops', controllers.createDonutShop)

router.post('/donuts', controllers.createDonut)

router.get('/donuts', controllers.getAllDonuts)

router.get('/donuts/:id', controllers.getDonutById)

router.put('/donuts/:id', controllers.updateDonut)

router.delete('/donuts/:id', controllers.deleteDonut)

router.get('/donutShops/:id', controllers.getDonutShopById)

router.get('/donutShops/:id/donuts', controllers.getDonutsByShop)

module.exports = router
