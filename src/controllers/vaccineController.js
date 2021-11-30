const Vaccine = require('../models/Vaccine')

const getAllVaccine = async(req, res)=> {
     const vaccineAll = Vaccine.findAll()
}
const getVaccine = async(req, res)=> {
    
}
const createVaccine = async(req, res)=> {
    
}
const updateVaccine = async(req, res)=> {
    
}

module.exports = {
    getAllVaccine,
    getVaccine,
    createVaccine,
    updateVaccine
}