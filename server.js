require('dotenv').config()
const {app} = require('./src/app')
const port = process.env.PORT || DATABASE_URL

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})