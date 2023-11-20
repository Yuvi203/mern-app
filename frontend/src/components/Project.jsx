import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import { Bounce, Zoom } from 'react-reveal'

const Project = ({page, setPage}) => {
  const [inputelment, setInputelement] = useState([])

  const Add = (e) =>{
    e.preventDefault()
    setInputelement([...inputelment,
      <div className='form-wrapper'>
      <input placeholder='Project Title...'/>
      <textarea placeholder='Write About your Project...'/>
      </div>
     ])
  }

  return (
    <Bounce left>
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
         <img src={img} alt=""/>
      </div>
    <form>
    <h3>Project details</h3>
     <div className='form-wrapper'>
     <input placeholder='Project Title...'/>
     <textarea placeholder='Write About your Project...'/>
     </div>
     {inputelment}
     <div className='but-container'>
     <button className='btn3' onClick={Add}>Add</button>
     </div>
     <div className='but-container'>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr-1 )
     }}>Preview</button>
     <button className='btn3'>Submit</button>
     </div>
   </form>
    </div>
  </Container>
  </Bounce>
  )
}

export default Project


const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`