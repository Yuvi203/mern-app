import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../../img/man11.png"
import { Bounce, Rotate } from 'react-reveal'
import { useSelector } from 'react-redux'

const Experience2 = ({page, setPage, formdata, Setformdata}) => {
  const [inputelment, setInputelement] = useState([])
  const [show, Setshow] = useState(true)
  const {users} = useSelector((state)=> state.resume)

  const Add = (e) =>{
    e.preventDefault()
    setInputelement([...inputelment,
    <div>
      <div className='form-group'>
      <input type='text' placeholder='Start date' defaultValue={users.CompanyStartdate2} onChange={(e)=>{
         Setformdata({...formdata, CompanyStartdate2:e.target.value})
      }}/>
      <input type='text' placeholder='End date' defaultValue={users.CompanyEnddate2} onChange={(e)=>{
         Setformdata({...formdata, CompanyEnddate2:e.target.value})
      }}/>
     </div>
     <div className='form-wrapper'>
     <input placeholder='Roll...' defaultValue={users.Roll2} onChange={(e)=>{
         Setformdata({...formdata, Roll2:e.target.value})
      }}/>
      <input placeholder='Company Name...' defaultValue={users.Companyname2} onChange={(e)=>{
         Setformdata({...formdata, Companyname2:e.target.value})
      }}/>
      <textarea placeholder='description...' defaultValue={users.ExperienceDescription2} onChange={(e)=>{
         Setformdata({...formdata, ExperienceDescription2:e.target.value})
      }}/>
     </div>
    </div>])
      Setshow(false)
  }

  return (
    <Rotate left>
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
         <img src={img} alt="" style={{width:"80%"}}/>
      </div>
    <form>
    <h3>Experience details</h3>
    <div className='form-group'>
      <input  type="txt" placeholder='Start year' defaultValue={users.CompanyStartdate} onChange={(e)=>{
        Setformdata({...formdata, CompanyStartdate:e.target.value})
      }}/>
      <input type='txt' placeholder='End year' defaultValue={users.CompanyEnddate} onChange={(e)=>{
        Setformdata({...formdata, CompanyEnddate:e.target.value})
      }}/>
     </div>
     <div className='form-wrapper'>
     <input placeholder='Roll...' defaultValue={users.Roll} onChange={(e)=>{
         Setformdata({...formdata, Roll:e.target.value})
      }}/>
      <input placeholder='Company Name...' defaultValue={users.Companyname} onChange={(e)=>{
         Setformdata({...formdata, Companyname:e.target.value})
      }}/>
      <textarea placeholder='Tell About Your Working Experience...' defaultValue={users.ExperienceDescription} onChange={(e)=>{
         Setformdata({...formdata, ExperienceDescription:e.target.value})
      }}/>
     </div>
     {inputelment}
     <div className='but-container'>
     {show ? <button className='btn3' onClick={Add}>Add</button> : <></>}
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
  </Rotate>
  )
}

export default Experience2


const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`