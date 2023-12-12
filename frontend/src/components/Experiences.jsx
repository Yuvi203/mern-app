import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import { Bounce } from 'react-reveal'


const Experiences = ({page, setPage, formdata, Setformdata}) => {
  const [inputelment, setInputelement] = useState([])
  const Add = (e) =>{
    e.preventDefault()
    setInputelement([...inputelment,
    <>
      <div className='form-group'>
      <input type='text' placeholder='Start date'/>
      <input type='text' placeholder='End date' onChange={(e)=>{
         Setformdata({...formdata, CompanyEnddate:e.target.value})
      }}/>
     </div>
     <div className='form-wrapper'>
     <input placeholder='Roll...' onChange={(e)=>{
         Setformdata({...formdata, Roll:e.target.value})
      }}/>
      <input placeholder='Company Name...' onChange={(e)=>{
         Setformdata({...formdata, Companyname:e.target.value})
      }}/>
      <textarea placeholder='description...' onChange={(e)=>{
         Setformdata({...formdata, ExperienceDescription:e.target.value})
      }}/>
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
      <input  type="date" placeholder='Start date' value={formdata.CompanyStartdate} onChange={(e)=>{
         Setformdata({...formdata, CompanyStartdate:e.target.value})
      }}/>
      <input type='date' placeholder='End date' value={formdata.CompanyEnddate} onChange={(e)=>{
         Setformdata({...formdata, CompanyEnddate:e.target.value})
      }}/>
     </div>
     <div className='form-wrapper'>
     <input placeholder='Roll...' value={formdata.Roll} onChange={(e)=>{
         Setformdata({...formdata, Roll:e.target.value})
      }}/>
      <input placeholder='Company Name...' value={formdata.Companyname} onChange={(e)=>{
         Setformdata({...formdata, Companyname:e.target.value})
      }}/>
      <textarea placeholder='description...' value={formdata.ExperienceDescription} onChange={(e)=>{
         Setformdata({...formdata, ExperienceDescription:e.target.value})
      }}/>
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