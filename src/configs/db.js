const { Sequelize } = require('sequelize')

const database = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true, 
            rejectUnauthorized: false
        }
    }
})

database.authenticate()
    .then(()=> console.log('Database connection successful'))
    .catch(()=> console.error('Cannot connect to a database', error))

module.exports = {
    database
}