const createToken = require("../helpers/createToken")
const Portfolio = require("../models/resumeModel")
const sendmail = require("../helpers/sendEmail")
 
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
    },
    getprofileviews: async (req, res) =>{
        try {
          const profile = await Portfolio.findOne({id:req.body})
          if(profile){
            res.json({ViewCount:profile.Viewcount})
          }
          else{
            res.status(404).json({msg:'Profile not found'})
          }
        } catch (error) {
          res.status(500).json({msg:error.message})
       }
    },
    incprofileviews: async (req, res) =>{
      try {
        const profile = await Portfolio.findById(req.params.id)
        const ViewIdentifiers = req.body.uniqueid
       
        if(profile && !profile.ViewIdentifiers.includes(ViewIdentifiers)){
           await profile.updateOne({$inc:{Viewcount:1}, $push: { ViewIdentifiers: ViewIdentifiers}})
          res.json({Viewcount:profile.Viewcount})
        }
        else{
          res.status(400).json({msg:"View count already incremented for this user"})
        }
      } catch (error) {
        res.status(500).json({msg:error.message})
      }
    },
    getdevelopers: async (req, res) =>{
      
      try {
        const users = await Portfolio.find({Profession:new RegExp('developer', 'i')}).sort({Viewcount:'desc'})
         if(users){
          res.status(200).json(users)
         }
         else{
          res.status(404).json("Profile not found")
         }
      } catch (error) {
        res.status(500).json({msg:error.message})
      }
    },
    getdesigners: async (req, res) =>{
      try {
        const users = await Portfolio.find({Profession:new RegExp('designer', 'i')}).sort({Viewcount:'desc'})
         if(users){
          res.status(200).json(users)
         }
         else{
          res.status(404).json("Profile not found")
         }
      } catch (error) {
        res.status(500).json({msg:error.message})
      }
    },
    getdatascientist: async (req, res) =>{
      try {
        const users = await Portfolio.find({Profession:new RegExp('data scientist analyst', 'i')}).sort({Viewcount:'desc'})
        if(users){
         res.status(200).json(users)
        }
        else{
         res.status(404).json("Profile not found")
        }
      } catch (error) {
        res.status(500).json({msg:error.message})
      }

   },
   getbusinessaanalyst: async (req, res) =>{
    try {
      const users = await Portfolio.find({Profession:new RegExp('business analyst', 'i')}).sort({Viewcount:'desc'})
      if(users){
       res.status(200).json(users)
      }
      else{
       res.status(404).json("Profile not found")
      }
    } catch (error) {
      res.status(500).json({msg:error.message})
    }
   },
   getalandml: async (req, res) =>{
    try {
      const users = await Portfolio.find({Profession:new RegExp('ai machine learning', 'i')}).sort({Viewcount:'desc'})
      if(users){
       res.status(200).json(users)
      }
      else{
       res.status(404).json("Profile not found")
      }
    } catch (error) {
      res.status(500).json({msg:error.message})
    }
   },
   getblokchain: async (req, res) =>{
    try {
      const users = await Portfolio.find({Profession:new RegExp('tester', 'i')}).sort({Viewcount:'desc'})
      if(users){
       res.status(200).json(users)
      }
      else{
       res.status(404).json("Profile not found")
      }
    } catch (error) {
      res.status(500).json({msg:error.message})
    }
   },
   getdevops: async (req, res) =>{
    try {
      const users = await Portfolio.find({Profession:new RegExp('devops cloud aws', 'i')}).sort({Viewcount:'desc'})
      if(users){
       res.status(200).json(users)
      }
      else{
       res.status(404).json("Profile not found")
      }
    } catch (error) {
      res.status(500).json({msg:error.message})
    }
   },
   getcloud: async (req, res) =>{
    try {
      const users = await Portfolio.find({Profession:new RegExp('cyber security ethical hacking hunter linux', 'i')}).sort({Viewcount:'desc'})
      if(users){
       res.status(200).json(users)
      }
      else{
       res.status(404).json("Profile not found")
      }
    } catch (error) {
      res.status(500).json({msg:error.message})
    }
   },
   getreact: async (req, res) =>{
    
    try {
      const users = await Portfolio.find({Profession:new RegExp('react', 'i')}).sort({Viewcount:'desc'})
       if(users){
        res.status(200).json(users)
       }
       else{
        res.status(404).json("Profile not found")
       }
    } catch (error) {
      res.status(500).json({msg:error.message})
    }
  },
   filterprofiles : async (req,res) =>{
      try {
      const users = await Portfolio.find({
         "$or":[
          {Firstname:{$regex:req.params.filter, $options:"i"}},
          {Lastname:{$regex:req.params.filter, $options:"i"}},
          {Profession:{$regex:req.params.filter, $options:"i"}},
          {Location:{$regex:req.params.filter, $options:"i"}},
          {Skill:{$regex:req.params.filter, $options:"i"}},
          {Skill2:{$regex:req.params.filter, $options:"i"}},
          {Skill3:{$regex:req.params.filter, $options:"i"}},
          {Skill4:{$regex:req.params.filter, $options:"i"}},
          {Skill5:{$regex:req.params.filter, $options:"i"}},
          {Skill6:{$regex:req.params.filter, $options:"i"}},
          {Skill7:{$regex:req.params.filter, $options:"i"}},
          {Skill8:{$regex:req.params.filter, $options:"i"}},
          {Skill9:{$regex:req.params.filter, $options:"i"}},
          {Skill10:{$regex:req.params.filter, $options:"i"}},
         ]
       }
      ).sort({Viewcount:'desc'})
      if(users){
       res.status(200).json(users)
      }
      else{
       res.status(404).json("Profile not found")
      }
      } catch (error) {
        res.status(500).json({msg:error.message})
      }
   },
    updateresume: async (req, res) =>{
      try {
      const result = await Portfolio.updateOne(
        {_id :req.params.id},
        {$set:req.body}
      )
      if(result){
        res.status(200).json("Sucessfully Updated")
      }
      else{
        res.status(404).json("Resume not Updated")
      }
    
      } catch (error) {
        res.status(500).json({msg:error.message})
      }
   },
   sendemail:async ( req, res) =>{
      try {
         const {name, email, subject, message, user_mailid} = req.body
         sendmail.sendEmail(name, email, subject, message, user_mailid)
         res.status(200).json({msg:"Email send Succesfully"})
      } catch (error) {
        res.status(500).json({msg:error.message})
      }
   }
}

module.exports = resumeController;