import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import { Bounce } from 'react-reveal'


const Experiences = ({page, setPage}) => {
  const [inputelment, setInputelement] = useState([])
  const Add = (e) =>{
    e.preventDefault()
    setInputelement([...inputelment,
    <>
      <div className='form-group'>
      <input type='text' placeholder='Start date'/>
      <input type='text' placeholder='End date'/>
     </div>
     <div className='form-wrapper'>
     <input placeholder='Roll...'/>
      <input placeholder='Company Name...'/>
     </div>
    </>])
  }
  return (
    <Bounce right>
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
         <img src={img} alt=""/>
      </div>
    <form>
    <h3>Experience details</h3>
    <div className='form-group'>
      <input type='text' placeholder='Start date'/>
      <input type='text' placeholder='End date'/>
     </div>
     <div className='form-wrapper'>
     <input placeholder='Roll...'/>
      <input placeholder='Company Name...'/>
     </div>
     {inputelment}
     <div className='but-container'>
     <button className='btn3' onClick={Add}>Add</button>
     </div>
     <div className='but-container'>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr-1 )
     }}>Preview </button>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr+1 )
     }}>Next</button>
     </div>
   </form>
    </div>
  </Container>
  </Bounce>
  )
}

export default Experiences

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`