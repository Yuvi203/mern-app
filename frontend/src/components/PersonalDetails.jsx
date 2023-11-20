import React from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import {Fade} from "react-reveal"

const PersonalDetails = ({page, setPage}) => {
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
      <input type='text' placeholder='First Name'/>
      <input type='text' placeholder='Last Name'/>
     </div>
     <div className='form-wrapper'>
      <input placeholder='Profession...'/>
     <textarea placeholder='About yourself...'/>
     <div className='form-group'>
      <input placeholder='Age..'/>
      <input placeholder='Nationality'/>
     </div>
     <input placeholder='Languages...'/>
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