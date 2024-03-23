import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {PrettyChatWindow} from "react-chat-engine-pretty"
import { useSelector } from 'react-redux'
const MessageScreen = (props) => {
    const {users} = useSelector((state)=> state.resume)
   const username = users.Firstname + users.Lastname || users.Firstname

   useEffect(()=>{
    const getuser = async () =>{
      await axios.get("https://api.chatengine.io/users/me/",{
          headers:{
              "Project-ID":import.meta.env.REACT_PRIVATE_ID,
              "User-Name": username,
              "User-Secret": import.meta.env.REACT_SECRET_KEY,
          }
      })
    }
    getuser()
   })


 return(
<div style={{height:"100vh", width:"100vw"}}>
<PrettyChatWindow
projectId={import.meta.env.REACT_PRIVATE_ID}
username={username}
secret={import.meta.env.REACT_SECRET_KEY}
style={{height:"100%"}}
/>
</div>
 )
}

export default MessageScreen