const Vaccine = require('../models/Vaccine')
const { body, param, validationResult } = require('express-validator')
const ErrorResponse = require('./error/error-response')
const NotFoundError = require('./error/error-not-found')
const BadRequestError = require('./error/bad-request-error')
const ErrorService = require('./error/error')

const getAllVaccine = async(req, res)=> {
     const {vaccineAll} = req.params     
     try{
         const where = vaccineAll ? { where: {vaccineAll }} : {}
         const vaccines = await Vaccine.findAll( where )
         if( vaccines && vaccines.length > 0){
             res.status(200).send(vaccines)
         }else{
             res.status(204).send()
         }
    }catch(error){
             res.status(500).send({ message: error.message})
         }

     }


const getVaccine = async(req, res)=> {

    const requiredId = req.params.id
    try{
        const vaccine = await Vaccine.findOne( { where: {id: requiredId} })
        if(vaccine){
            res.status(200).send(vaccine)
        }else{
            res.sttaus(400).send({ message:`Cadastro de vacina não ${requiredId}`})
        }
    }catch(error){
        res.status(500).send({message: error.message})
    }
}
const createVaccine = async(req, res)=> {
    const { name, expected_date, vaccinated } = req.body
    const error = validationResult(req)

    try{
        if(!error.isEmpty()){
            ErrorResponse(res, {message:error.array()},400, 'Bad Request')
        }else{
            const vaccine = await Vaccine.create({ name, expected_date, vaccinated })
            console.log(` Cadasto de vacina criado`)
            res.status(201).send(vaccine)
        }
        
    }catch(error){
        ErrorResponse(res, error)

    }
    
}
const updateVaccine = async(req, res)=> {
    const idVaccinne = req.params.id
    const vaccinated = req.body.vaccinated
    const error =validationResult(req)
        
    try{ 
        if(!error.isEmpty()){
            ErrorResponse(res ,{message: error.array()}, 400, 'Bad request')}
        else{
            const rowsUpdated = await Vaccine.update( { vaccinated } , { where: { id:idVaccinne } })
            if( rowsUpdated && rowsUpdated>0 ){
                res.status(200).send({ message: `${rowsUpdated[0]} vacina atualizada.`})
                } 
            else{
                res.status(404).send({ message: `Vaicna  com id ${idVaccinne} não encontrado para atualizar informação de favorito` })
                }
            }
    }catch(error){
        ErrorResponse(res,{ message: `Medico com id ${idVaccinne} não encontrado para atualizar informação de favorito` })    
    }
}   
       
            
        
      
   
           
            
            
        
            
        



              

module.exports = {
    getAllVaccine,
    getVaccine,
    createVaccine,
    updateVaccine
}