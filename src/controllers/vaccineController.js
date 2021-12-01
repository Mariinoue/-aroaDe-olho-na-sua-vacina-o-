const Vaccine = require('../models/Vaccine')

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
    try{
        const vaccine = await Vaccine.create({ name, expected_date, vaccinated })
        console.log(` Cadasto de vacina criado`)
        res.status(201).send(vaccine)
    }catch(error){
        res.status(500).send({ message: error.message})

    }
    
}
const updateVaccine = async(req, res)=> {
    const { id } = req.params
    const { vaccinated } = req.body
    try{ 
        const rowsUpdated = await Vaccine.update( { vaccinated } , { where: { id } })
        if( rowsUpdated && rowsUpdated>0 ){
            res.status(200).send({ message: `${rowsUpdated[0]} vacina atualizada.`})
        }else{
            res.status(404).send( {message: `Vacina com id ${id} não encotrada para atualizar`})
        }
    }catch(error){
        res.status(500).send({ message: error.message })    
    }
}

              

module.exports = {
    getAllVaccine,
    getVaccine,
    createVaccine,
    updateVaccine
}