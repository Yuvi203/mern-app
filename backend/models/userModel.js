const {Schema, model} = require("mongoose")


const userSchema = Schema({
    name:{
        type:String,
        required:[true, "Please enter your name"],
        trim:true
    },
    email:{
        type:String,
        required:[true, "Please enter your email"],
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Please enter your password"],
    }
},
{timestamp:true}
)

const User = model("users", userSchema)

module.exports = User