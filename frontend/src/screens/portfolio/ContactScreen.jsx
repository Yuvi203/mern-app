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
  
  return (
    <Container>
       <ToastContainer/>
    <Title title={"Contact"}/>
    <div className='contact-info'>
    <div className='left-content'>
      <h4>Get In Touch</h4>
      <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
     </div>
      
    <div className='right-content'>
     <ContactItem title={"Phone"} icon={phone} phone={users.MobileNo}/>
     <ContactItem title={"Email"} icon={email2} email={users.Email}/>
     <ContactItem title={"Location"} icon={location} address1={users.Address1} address2={users.Address2}/>
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
  .contact-info{
    display:grid;
grid-template-columns:repeat(2, 1fr);
grid-column-gap:2rem;
@media screen and (max-width: 978px){
    grid-template-columns:repeat(1, 1fr);
  }
h4{
  color:var(--white-color);
  padding:1rem 0;
  font-size:1.4rem;
}
  }
.right-content{
  margin-top:5rem;
}
.left-content{
  padding:1rem;
  margin-top:1rem;
  .map-sect{
    width: 87%;
    height:87%;
    background-color:#191D2B;
    iframe{
        width: 100%;
        height: 100%;
    }
}
}
`