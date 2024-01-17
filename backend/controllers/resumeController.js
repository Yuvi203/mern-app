const createToken = require("../helpers/createToken")
const Portfolio = require("../models/resumeModel")

const resumeController ={
    details: async (req, res) =>{
        try{
         const activation_token = createToken.resume(req.body)
         const user = await Portfolio.create(req.body)
         if(user){
          return res.status(200).json({id:user._id})
         }
          res.status(200).json({activation_token:activation_token})
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