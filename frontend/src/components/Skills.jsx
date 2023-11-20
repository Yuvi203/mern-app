import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import { Flip } from 'react-reveal'

const Skills = ({page, setPage}) => {
  const [inputelment, setInputelement] = useState([])

  const Add = (e) =>{
    e.preventDefault()
    setInputelement([...inputelment,
      <div className='form-group'>
      <input type='text' placeholder='Skills'/>
      <input type='text' placeholder='Percentage'/>
     </div>
    ])
  }

  return (
    <Flip left> 
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
         <img src={img} alt=""/>
      </div>
    <form>
    <h3>Skills</h3>
      <div className='form-group'>
      <input type='text' placeholder='Skills'/>
      <input type='text' placeholder='Percentage'/>
     </div>
     <div className='form-group'>
      <input type='text' placeholder='Skills'/>
      <input type='text' placeholder='Percentage'/>
     </div>
     <div className='form-group'>
      <input type='text' placeholder='Skills'/>
      <input type='text' placeholder='Percentage'/>
     </div>
     <div className='form-group'>
      <input type='text' placeholder='Skills'/>
      <input type='text' placeholder='Percentage'/>
     </div>
     {inputelment}
     <div className='but-container'>
     <button className='btn3' onClick={Add}>Add</button>
     </div>
     <div className='but-container'>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr-1 )
     }}>Preview</button>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr+1 )
     }}>Next</button>
     </div>
   </form>
    </div>
  </Container>
  </Flip>
  )
}

export default Skills

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`