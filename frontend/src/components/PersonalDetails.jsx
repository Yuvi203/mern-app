import React from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import {Fade} from "react-reveal"
import axios from 'axios'

const PersonalDetails = ({page, setPage, formdata, Setformdata}) => {
  
  return (
    <Fade left>
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
         <img src={img} alt=""/>
      </div>
    <form>
    <h3>Personal details</h3>
     <div className='form-group'>
      <input type='text' placeholder='First Name' value={formdata.Firstname} onChange={(e)=>{
       Setformdata({...formdata, Firstname:e.target.value})
      }}/>
      <input type='text' placeholder='Last Name' value={formdata.Lastname} onChange={(e)=>{
       Setformdata({...formdata, Lastname:e.target.value})
      }}/>
     </div> 
     <div className='form-wrapper'>
     <input placeholder='Email...' value={formdata.Email} onChange={(e)=>{
       Setformdata({...formdata, Email:e.target.value})
      }}/>
      <input placeholder='Profession...' value={formdata.Profession} onChange={(e)=>{
       Setformdata({...formdata, Profession:e.target.value})
      }}/>
     <textarea placeholder='About yourself...' value={formdata.PersonalDescription} onChange={(e)=>{
       Setformdata({...formdata, PersonalDescription:e.target.value})
      }}/>
     <div className='form-group'>
      <input placeholder='Age..' value={formdata.Age} onChange={(e)=>{
       Setformdata({...formdata, Age:e.target.value})
      }}/>
      <input placeholder='Mobile No' value={formdata.MobileNo} onChange={(e)=>{
       Setformdata({...formdata, MobileNo:e.target.value})
      }}/>
     </div>
     </div>
     <div className='but-container'>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr+1 )
     }}>Next</button>
     </div>
   </form>
    </div>
  </Container>
  </Fade>
  )
}

export default PersonalDetails

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`