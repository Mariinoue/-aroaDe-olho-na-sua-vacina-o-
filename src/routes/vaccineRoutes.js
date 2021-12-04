const express = require('express')
const router = express.Router()
const { body, param, validationResult } = require('express-validator')
const controller = require('../controllers/vaccineController')


router.get('/', controller.getAllVaccine)

router.get('/:id', controller.getVaccine)

router.post('/',[

    body('name').notEmpty().withMessage('This field is required'),
    body('expected_date').isLength({ min: 10}).withMessage('This field is required day/month/year'),
],controller.createVaccine )

router.patch('/:id', [
    param('id')
        .isNumeric()
        .withMessage('The parameter ID must be an interger')

], controller.updateVaccine)
    
module.exports = router