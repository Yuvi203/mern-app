const express = require("express")
const mongoose = require("mongoose")
const db = require("./config/db")
require("dotenv").config()
const User = require("./models/userModel")
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")
const bodyparser = require("body-parser")
const cookieparser = require("cookie-parser")

db()

const corsOption = {
    origin:"http://localhost:3000",
    credentials:true,
    method:["GET","POST","PUT","DELETE"],
    allowedHeaders:[
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Credentials"
    ]
}

const app = express()
app.use(express.json())
app.use(bodyparser.json())
app.use(cookieparser())
app.use(cors(corsOption))
express.urlencoded({extended:false})
app.use(userRoutes)



app.get("/", (req, res)=>{
res.send("Home page")
})



app.listen(process.env.PORT, ()=>{
    console.log("Server is listening")
})