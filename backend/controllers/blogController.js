const Blog = require("../models/blogModel")

const blogController = {

postblog: async (req, res)=>{
try {
    const {blogid, blogimg, description} = req.body
    const newBlog = new Blog({blogid, blogimg, description})
    await newBlog.save()
    res.status(200).json({msg:"Blog upload succesfully"})
} catch (error) {
    res.status(500).json({msg:error.message})
}
},
getblog: async (req, res) =>{
try {
     const {id} = req.body
     const blog = await Blog.find({blogid:id})
     res.status(200).json(blog)
} catch (error) {
    res.status(500).json({msg:error.message})
}
}
}

module.exports = blogController