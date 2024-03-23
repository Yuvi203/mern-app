const Chat = require("../models/chatModel")

const chatController = {

sendmessage: async (req, res)=>{
   try {
      const {senderId, receiverId, message} = req.body
      const newMessage = new Chat({senderId, receiverId, message})
      await newMessage.save()
      res.status(200).json(newMessage.message)
   } catch (error) {
    res.status(500).json({msg:error.message})
   }
},
getmessage: async (req, res) =>{
try {
    const senderId = req.params.senderId
    const receiverId = req.params.receiverId
    const messages = await Chat.find({senderId, receiverId})
    if(!senderId && !receiverId){
       res.json("Id required")
    } 
    else{
        res.json(messages.map(message => (message.message)));
    }
   
} catch (error) {
    res.status(500).json({msg:error.message})
}
},
getreceivermessage: async (req, res)=>{
try {
    
} catch (error) {
    res.status(500).json({msg:error.message})
}
}
}

module.exports = chatController 