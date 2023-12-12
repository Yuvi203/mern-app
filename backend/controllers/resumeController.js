const createToken = require("../helpers/createToken")
const Portfolio = require("../models/resumeModel")
const jwt = require("jsonwebtoken")

const resumeController ={
    details: async (req, res) =>{
        try{
         const activation_token = createToken.activation(req.body)
    const user = await Portfolio.create(req.body)
        res.status(200).send({id:user._id, activation_token:activation_token})
        console.log(verifyUser)
        }
        catch(error){
             res.status(500).json({msg:error.message})
        }
    },
    getdetails: async (req, res) =>{
         try {
         const user = await Portfolio.findById(req.params.id)
         res.status(200).json(user)
         }
         catch (error) {
            res.status(500).json({msg:error.message})
         }
    },
    getdetailsall: async (req, res) =>{
      try {
        const user = await Portfolio.find()
        res.status(200).send(user)
      } catch (error) {
        res.status(500).json({msg:error.message})
      }
    }
}

module.exports = resumeController;