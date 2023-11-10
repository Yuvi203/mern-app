import React, { useState } from 'react'
import styled from "styled-components"
import { isEmail, isEmpty } from '../helpers/validate';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        return toast("Please fill email field.", {
          className: "toast",
          bodyClassName:"toast"
        });
       }
       if(!isEmail(email)){
        return toast("Please enter a valid email address.", {
          className: "toast",
          bodyClassName:"toast"
        });
       }
       try {
        const res =  await axios.post("http://localhost:8000/api/auth/forgot_pass", {email})
              localStorage.setItem("data", res.data)
              console.log(res.data)
           handleReset()
           navigate("/reset-password")
           return toast("Please check your email 📧", {
            className: "toast",
            bodyClassName: "toast",
          });
       } catch (error) {
        toast(error.response.data.msg, {
          className: "toast",
          bodyClassName: "toast",
        });
       }
    }
  return (
    <>
     <ToastContainer/>
     <Container>
       <form className='form-container' onSubmit={handleSubmit}>
        <input type='text' name='email' placeholder='Enter Email...' onChange={(e)=> setEmail(e.target.value)}/>
       <button>Send</button>
       </form>
     </Container>
    </>
    
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