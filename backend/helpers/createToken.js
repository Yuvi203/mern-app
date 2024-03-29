const jwt = require("jsonwebtoken")

const createToken = {
    activation:(payload)=>{
     return jwt.sign(payload, process.env.ACTIVATION_TOKEN, {expiresIn:"20m"})
    },
    refresh:(payload) =>{
     return jwt.sign(payload, process.env.REFRESH_TOKEN, {expiresIn:"24h"})
    },
    access: (payload) =>{
      return jwt.sign(payload, process.env.ACCESS_TOKEN, {expiresIn:"15m"})
    },
    resume:(payload) =>{
      return jwt.sign(payload, process.env.RESUME_TOKEN, {expiresIn:"40m"})
    }
}

module.exports = createToken