const {Router} = require("express")
const userController = require("../controllers/userControllers")
const { auth } = require("../middlewares/auth")
const route = Router()

route.post("/api/auth/register", userController.register)
route.post("/api/auth/activatation", userController.activate)
route.post("/api/auth/signing", userController.signing)
route.post("/api/auth/access", userController.access)
route.post("/api/auth/forgot_pass", userController.forgot)
route.post("/api/auth/reset_pass", auth, userController.reset)
route.get("/api/auth/user_info", auth, userController.info)
route.get("/api/auth/signout", userController.signout)


module.exports = route