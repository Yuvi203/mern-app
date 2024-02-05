import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../../img/man10.png" 
import {Fade, Flip} from "react-reveal"
import { useSelector } from 'react-redux'

const Education2 = ({page, setPage, formdata, Setformdata}) => {
  const {users} = useSelector((state)=> state.resume)
  const [inputelment, setInputelement] = useState([])
  const [show, Setshow] = useState(true)

   const Add = (e) =>{
    e.preventDefault()
    setInputelement([...inputelment, <>
            <div className='form-group'>
      <input type='text' placeholder='Start date' defaultValue={users.CollegeStartdate2}  onChange={(e)=>{
        Setformdata({...formdata, CollegeStartdate2:e.target.value})
      }}/>
      <input type='text' placeholder='End date' defaultValue={users.CollegeEnddate2}  onChange={(e)=>{
        Setformdata({...formdata, CollegeEnddate2:e.target.value})
      }}/>
     </div>
     <div className='form-wrapper'>
     <input placeholder='degree...' defaultValue={users.Degree2}  onChange={(e)=>{
        Setformdata({...formdata, Degree2:e.target.value})
      }}/>
      <input placeholder='University...' defaultValue={users.University2}  onChange={(e)=>{
        Setformdata({...formdata, University2:e.target.value})
      }}/>
      <textarea placeholder='description...' defaultValue={users.EducationDescription2}  onChange={(e)=>{
        Setformdata({...formdata, EducationDescription2:e.target.value})
      }}/>
     </div>
    </>])
     Setshow(false)
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
      <input type='txt' placeholder='Start year'  defaultValue={users.CollegeStartdate} onChange={(e)=>{
        Setformdata({...formdata, CollegeStartdate:e.target.value})
      }}/>
      <input type='txt' placeholder='End year'  defaultValue={users.CollegeEnddate} onChange={(e)=>{
        Setformdata({...formdata, CollegeEnddate:e.target.value})
      }}/> 
     </div>
     <div className='form-wrapper'>
     <input placeholder='Degree...'  defaultValue={users.Degree} onChange={(e)=>{
        Setformdata({...formdata, Degree:e.target.value})
      }}/>
      <input placeholder='University Name...'  defaultValue={users.University} onChange={(e)=>{
        Setformdata({...formdata, University:e.target.value})
      }}/>
      <textarea placeholder='Tell About Your College Experience'  defaultValue={users.EducationDescription} onChange={(e)=>{
        Setformdata({...formdata, EducationDescription:e.target.value})
      }}/>
     </div>
     {inputelment}
     <div className='but-container'>
     {show ? <button className='btn3' onClick={Add}>Add</button> : <></>}
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

export default Education2


const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`