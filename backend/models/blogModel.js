const {Schema, model} = require("mongoose")

const blogSchema = Schema({
     blogid:{
        type:String
    },
    blogimg:{
        type:String,
    },
    description:{
        type:String,
    },
},{timestamp:true})


const Blog = new model("blog", blogSchema)

module.exports = Blog