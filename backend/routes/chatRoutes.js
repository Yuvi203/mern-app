const {Router} = require("express")
const chatController = require("../controllers/chatController")
const route = Router()

route.post("/api/sendmessage", chatController.sendmessage)
route.get("/api/messages/:receiverId/:senderId", chatController.getmessage)
module.exports = route