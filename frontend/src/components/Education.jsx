import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import {Fade, Flip} from "react-reveal"

const Education = ({page, setPage, formdata, Setformdata}) => {
  const [inputelment, setInputelement] = useState([])

  const Add = (e) =>{
    e.preventDefault()
    setInputelement([...inputelment,
    <>
      <div className='form-group'>
      <input type='text' placeholder='Start date'  onChange={(e)=>{
        Setformdata({...formdata, CollegeStartdate:e.target.value})
      }}/>
      <input type='text' placeholder='End date'  onChange={(e)=>{
        Setformdata({...formdata, CollegeEnddate:e.target.value})
      }}/>
     </div>
     <div className='form-wrapper'>
     <input placeholder='degree...' value={formdata.Degree}  onChange={(e)=>{
        Setformdata({...formdata, Degree:e.target.value})
      }}/>
      <input placeholder='University...' value={formdata.University}  onChange={(e)=>{
        Setformdata({...formdata, University:e.target.value})
      }}/>
      <textarea placeholder='description...' value={formdata.Description}  onChange={(e)=>{
        Setformdata({...formdata, Description:e.target.value})
      }}/>
     </div>
    </>])
  }

  return (
    <Flip right>
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
         <img src={img} alt=""/>
      </div>
    <form>
    <h3>Educational details</h3>
      <div className='form-group'>
      <input type='date' placeholder='Start date' value={formdata.CollegeStartdate}  onChange={(e)=>{
        Setformdata({...formdata, CollegeStartdate:e.target.value})
      }}/>
      <input type='date' placeholder='End date' value={formdata.CollegeEnddate} onChange={(e)=>{
        Setformdata({...formdata, CollegeEnddate:e.target.value})
      }}/> 
     </div>
     <div className='form-wrapper'>
     <input placeholder='Degree...' value={formdata.Degree}  onChange={(e)=>{
        Setformdata({...formdata, Degree:e.target.value})
      }}/>
      <input placeholder='University...' value={formdata.University}  onChange={(e)=>{
        Setformdata({...formdata, University:e.target.value})
      }}/>
      <textarea placeholder='description...' value={formdata.EducationDescription}  onChange={(e)=>{
        Setformdata({...formdata, EducationDescription:e.target.value})
      }}/>
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

export default Education

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`