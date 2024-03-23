const {Schema, model} = require("mongoose")

const chatSchema = Schema({
  senderId:{
    type:Schema.Types.ObjectId,
    ref:"portfolios"
  },
  receiverId:{
    type:Schema.Types.ObjectId,
    ref:"portfolios"
  },
  message:{
    type:String
  },
  timestamp:{
    type:Date,
    default:Date.now()
}
})

const Chat = model("chats", chatSchema)

module.exports = Chat
