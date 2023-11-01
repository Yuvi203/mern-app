import React, { useState } from 'react'
import styled from "styled-components"
import { isEmail, isEmpty } from '../helpers/validate';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgetScreen = () => { 

    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
        setEmail({ email: "" });
      };

    const handleSubmit = async (e) =>{
      e.preventDefault()
       if(isEmpty(email)){
        alert("Please fill Email field")
       }
       if(!isEmail(email)){
        alert("Please enter a valid email address")
       }
       try {
        const res =  await axios.post("http://localhost:8000/api/auth/forgot_pass", {email})
           alert("Please check your email")
              localStorage.setItem("data", res.data)
              console.log(res.data)
           handleReset()
           navigate("/reset-password")
       } catch (error) {
           alert("Error!..")
       }
    }
  return (
     <Container>
       <form className='form-container' onSubmit={handleSubmit}>
        <input type='text' name='email' placeholder='Enter Email...' onChange={(e)=> setEmail(e.target.value)}/>
       <button>Send</button>
       </form>
     </Container>
  )
}

export default ForgetScreen

const Container = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 padding:5rem;
 input{
  display: block;
  margin: 20px auto;
  background: #262e49;
  border: 0;
  border-radius: 5px;
  padding: 14px 10px;
  width: 320px;
  outline: none;
  color: #d6d6d6;
  transition:all .2s ease-out;
  } 
 .form-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

 }
 button{
    background: #7f5feb;
    color: #dfdeee;
    border-radius: 100px;
    border:0;
    width: 340px;
    height: 49px;
    font-size: 16px;
    left: 8%;
  transition: 0.3s;
  cursor: pointer;
  :hover{
    background: #5d33e6;
  }
 }
`