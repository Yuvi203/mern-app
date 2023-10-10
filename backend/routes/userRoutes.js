const {Router} = require("express")
const userController = require("../controllers/userControllers")
const route = Router()

route.post("/api/auth/register", userController.register)
route.post("/api/auth/activate", userController.activate)
route.post("/api/auth/signing", userController.signing)
route.post("/api/auth/access", userController.access)
route.post("/api/auth/forgot_pass", userController.forgot)

module.exports = route