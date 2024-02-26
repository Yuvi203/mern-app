import React from 'react'
import styled from "styled-components"
import { LuSend } from "react-icons/lu";
import { useSelector } from 'react-redux';

const MessageScreen = () => {
  const {users} = useSelector((state)=> state.resume)
  return (
     <Container>
     <div className='chat'>
      <div className='messages1'>
      <div className='msg2'>
        hi how are you this is my first message
      </div>
      <div className='msg2'>
        hi how are you this is my second message
      </div>
      </div>
      <div className='messages'>
      <div className='msg'>
        hi how are you this is my first message
      </div>
      <div className='msg'>
        hi how are you this is my second message
      </div>
      <div className='msg'>
        hi how are you this is my first message
      </div>
      <div className='msg'>
        hi how are you this is my first message
      </div>
      </div>
    </div>
       <div className='chat-input'>
        <input placeholder='Send Hi...'/>
        <LuSend/>
       </div>
     </Container>
  )
}

export default MessageScreen


const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:2rem;
//position:relative;
.chat-input{
 display:flex;
 align-items:center;
 justify-content:space-between;
 position:absolute;
 bottom:10%;
 width:50%;  
 padding:1rem 1.5rem;
 border-radius:999px;
 margin:0 auto;
 border:2px solid #7f5feb;
 input{
  width:100%;
  border: none;
  padding: 0 5px;
  outline:none;
  background-color: transparent;
  color:white;
 }
 svg{
  color: #7f5feb;
  cursor:pointer;
  font-size:2rem;
 }
}
.chat{
  display:flex;
  align-content:center;
  justify-content:space-between;
  .msg{
  background: #7f5feb;
  color: #dfdeee;
  border-radius: 100px;
  font-size: 16px;
  padding:1rem;
  margin:1rem;
  }
  .msg2{
  /* background-color:#dfdeee;
  color:#7f5feb; */
  border-radius: 100px;
  font-size: 16px;
  padding:1rem;
  margin:1rem;
  border: 1px solid #dfdeee;
  }
}
.messages{
  position:fixed;
  right:10%;
  bottom:25%;
  
}
.messages1{
  position:absolute;
  left:5%;
  bottom:25%;
}
`