const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const index =require('./routes/index')
const vaccine= require('./routes/vaccineRoutes')

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept'
    )
    next()
})

app.options('/*', (req, res)=> {
    res.header('Access-Control-Allow-Origin', '/*')
    res.header('Access-Control-Allow-Headers')
    res.header('Accesse-Control-Allow-Methods',
    'PUT, POST, GET, DELETE, OPTIONS, PATCH')
    res.send('send something whatever')
})


app.use('/', index)
app.use('/vaccine',vaccine)

module.exports = {app}