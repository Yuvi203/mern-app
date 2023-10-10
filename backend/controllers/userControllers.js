const createToken = require("../helpers/createToken")
const validateEmail = require("../helpers/validateEmail")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const sendmail = require("../helpers/sendEmail")
const jwt = require("jsonwebtoken")

const userController = {
    register: async (req, res) =>{
      try {
         //get info
         const name = req.body.name
         const email = req.body.email
         const password = req.body.password
         //check fields
         if(!name || !email ||!password){
            return res.status(400).json({msg:"Please fill in all fields."})
            
         }
         //check email
         if(!validateEmail(email)){
            return res.status(400).json({msg:"Please enter a valid email address."})
         }
         //check user
         const user = await User.findOne({email})
         if(user){
            return res.status(400).json({msg:"This email is already registered in our system."})
         }

         //check password

         if(password.length < 6){
           return res.status(400).json({msg:"Password must be at least 6 characters."})
         }
         // hash passoword
         const salt = await bcrypt.genSalt()
         const hashpassword = await bcrypt.hash(password, salt)
        // create token
        const newUser = {name, email, password:hashpassword}
        const activation_token = createToken.activation(newUser)
         //send email
         const url = `https://localhost:8000/api/auth/activate/${activation_token}`
         sendmail.sendEmailRegsister(email, url, "Verify your email")
        //regsistration success
        res.status(200).json({msg:"Welcome! Please check your email."})
      } catch (error) {
        res.status(500).json({msg:error.message})
      }
    },
    activate: async (req, res) =>{
     try{
       //get token
       const {activation_token} = req.body
       //verify token
       const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN)
       const {name, email, password} = user

       //check user

       const check = await User.findOne({email})
       if(check){
        return res.status(400).json({msg:"This email is already registered"})
       }
      
       // add user
       const newUser = new User({
        name,
        email,
        password
       })
       await newUser.save()
       // activation success
       res.status(200).json({msg:"Your account has been activated, you can now sign in"})
     }
     catch (error){
        res.status(500).json({msg:error.message})
     }
   
      
    },
    signing: async (req, res) =>{
      try{
         // get cred
      const { email, password } = req.body;

      // check email
      const user = await User.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "This email is not registered in our system." });

      // check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "This password is incorrect." });

      // refresh token
      const rf_token = createToken.refresh({ id: user._id });
      res.cookie("_apprftoken", rf_token, {
        httpOnly: true,
        path: "/api/auth/access",
        maxAage: 24 * 60 * 60 * 1000, 
      });

      // signing success
      res.status(200).json({ msg: "Signing success" });
    } catch(err) {
      res.status(500).json({ msg: err.message });
    }
  },
  access: async (req, res) =>{
   try {
    // rf token
    const rf_token = req.cookies._apprftoken
    if(!rf_token) return res.status(400).json({msg:"Please sign in."})
    // validate
     jwt.verify(rf_token, process.env.REFRESH_TOKEN, (err, user)=>{
       if(err) return res.status(400).json({msg:"Please sign in again"})
       // create access token
      const ac_token = createToken.access({id:user.id})
       // access success
       return res.status(200).json({ac_token})
     })
   } catch (error) {
     return res.status(500).json({msg: error.message})
   }
  },
  forgot: async (req, res) =>{
    try {
      // get email
      const {email} = req.body
      // check email
      const user = await User.findOne({email})
      if(!user){
        return res.status(400).json({msg:"This email is not registered in our system"})
      }
      
      // create ac token
      const ac_token = createToken.access({id:user.id})
      
      // send email
      const url = `http://localhost:3000/auth/reset-password/${ac_token}`;
      const name = user.name
      sendmail.sendEmailReset(email, url, "Reset your password", name)
      // sucess
      res.status(200).json({msg:"Re-send the password , please check your email"})

    } catch (error) {
         res.status(500).json({msg:error.message})
    }
  },
  reset: async (req, res) =>{
    try{
      // get password
      const {password} = req.body
      // hash password
      const salt = bcrypt.genSalt()
      const hashpassword = await bcrypt.hash(password, salt)
      //update password
      await User.findOneAndUpdate(
        {_id:req.user.id},
        {password:hashpassword}
      )
      // reset success
       res.status(200).json({msg:"Password was updated succesfully"})
    }
    catch(err){
      res.status(500).json({msg:err.message})
    }
  }
}

    
  


module.exports = userController