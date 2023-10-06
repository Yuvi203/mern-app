const express = require("express")
const mongoose = require("mongoose")
const db = require("./config/db")
require("dotenv").config()
const User = require("./models/userModel")
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")
const bodyparser = require("body-parser")

db()


const app = express()
app.use(express.json())
app.use(bodyparser.json())
app.use(cors())
express.urlencoded({extended:false})
app.use(userRoutes)



app.get("/", (req, res)=>{
res.send("Home page")
})



app.listen(process.env.PORT, ()=>{
    console.log("Server is listening")
})