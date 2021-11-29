const { Sequelize, DataTypes } = require('sequelize')
const database = require('../configs/db')

const Vaccine = database.define('Vaccine', {

    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }

})