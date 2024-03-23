const {Router} = require("express")
const blogController = require("../controllers/blogController")
const route = Router()

route.post("/api/postblog", blogController.postblog)
route.get("/api/getblog", blogController.getblog)
  
module.exports = route