const express = require('express')
const router = express.Router()
const controller = require('../controllers/vaccineController')

router.post('/',controller.createVaccine)

router.get('/', controller.getAllVaccine)

router.get('/:id', controller.getVaccine)

router.patch('/:id', controller.updateVaccine)
    
module.exports = router