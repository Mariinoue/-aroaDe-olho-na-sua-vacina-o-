const express = require('express')
const router =express.Router()

router.get('/', (req, res)=> {
    res.status(200).send({
        title:'API Rest Node.js',
        version: '1.0.0'
    })
})

module.exports = router