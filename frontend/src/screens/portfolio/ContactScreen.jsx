import React, { useState } from 'react'
import styled from 'styled-components'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Title from '../../components/Title';
import ContactItem from '../../components/ContactItem';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


const ContactScreen = () => {
  const {users} = useSelector((state)=> state.resume)
  const phone = <FaPhoneAlt/>
  const email2 = <MdEmail/>
  const location = <FaLocationDot/>
  const [name, Setname] = useState("")
  const [email, Setemail] = useState("")
  const [subject, Setsubject] = useState("")
  const [message, Setmessage] = useState("")
  const user_mailid = users.Email
  
  const Sendmail = async (e) =>{
    try {
    e.preventDefault()
    await axios.post("http://localhost:8000/api/sendmail", {name, email, subject, message, user_mailid}).then((res)=>{
      alert("Email send Succesfull")
    })
    } catch (error) {
     alert("error!!")
    }
  }

  return (
    <Container>
       <ToastContainer/>
    <Title title={"Contact"}/>
    <div className='contact-section'>
    <div className='left-content'>
       <h4>Get In Touch</h4>
     <form className='contact-form'>
     <div className="form-field">
          <label>Enter your name</label>
          <input type="text"  value={name} onChange={(e)=>{
            Setname(e.target.value)
          }}/>
      </div>
    <div className="form-field">
          <label>Enter my email</label>
          <input type="email" value={email} onChange={(e)=>{
            Setemail(e.target.value)
          }}/>
    </div>
    <div className="form-field">
          <label>Enter your subject</label>
          <input type="text" value={subject} onChange={(e)=>{
            Setsubject(e.target.value)
          }}/>
    </div>
    <div className="form-field">
          <label>Enter your Message</label>
          <textarea cols={"30"} rows={"10"} value={message} onChange={(e)=>{
            Setmessage(e.target.value)
          }}></textarea>
    </div>
    <button className='btn3' onClick={Sendmail}>Send Email</button>
     </form>
    </div>
    <div className='right-content'>
     <ContactItem title={"Phone"} icon={phone} phone={users.MobileNo}/>
     <ContactItem title={"Phone"} icon={email2} email={users.Email}/>
     {users.Address1 || users.Address2 ?    <ContactItem title={"Address"} icon={location} address1={users.Address1} address2={users.Address2}/> :<></>}
    </div>
    </div>
    </Container>
  )
}

export default ContactScreen

const Container = styled.div`
padding:3rem;
@media screen and (max-width: 642px){
        padding: 4rem;
 }
 @media screen and (max-width: 510px){
        padding: 3rem;
 }
  @media screen and (max-width: 571px){
        padding: 2rem .4rem;
    }
.contact-section{
  display:grid;
grid-template-columns:repeat(2, 1fr);
grid-column-gap:2rem;
@media screen and (max-width: 978px){
    grid-template-columns:repeat(1, 1fr);
 
  }
  
.right-content{
  display:grid;
  grid-template-columns:repeat(1, 1fr);
  @media screen and (max-width: 502px){
     width: 70%;
  }
  @media screen and (max-width: 978px){
     width: 10%;
     padding-top:1rem;
  }
}
h4{
  color:var(--white-color);
  padding:1rem 0;
  font-size:1.4rem;
}
.contact-form{
width:100%;
@media screen and (max-width: 502px){
  width: 100%;
 }
 .form-field{
  margin-top:2rem;
  position:relative;
  width:100%;
  label{
    position:absolute;
    left:20px;
    top:-19px;
    display:inline-block;
    background-color: var(--background-dark-color);
    padding:0 .5rem;
    color: inherit;
  }
  input{
    border: 1px solid var(--border-color);
    outline: none;
    background: transparent;
    height:50px;
    padding:0 15px;
    width:100%;
    color:white;
  }
  textarea{
    border: 1px solid var(--border-color);
    outline: none;
    background: transparent;
    height:50px;
    padding:0 15px;
    width:100%;
    color:white;
  }
 }
}
 }
`