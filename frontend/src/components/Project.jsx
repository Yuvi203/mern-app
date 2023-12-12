import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import { Bounce, Zoom } from 'react-reveal'


const Project = ({page, setPage,  formdata, Setformdata,  handleSubmit}) => {
  const [inputelment, setInputelement] = useState([])
 
  const Add =  (e) =>{
    e.preventDefault()
   setInputelement([...inputelment,  <div className='form-wrapper'>
   <input placeholder='Project Title...'   onChange={(e)=>{
      Setformdata({...formdata, Title:e.target.value})
    }}/>
   <input placeholder='Project link...' value={formdata.Link} onChange={(e)=>{
      Setformdata({...formdata, Link:e.target.value})}}/>
   <textarea value={formdata.Description} placeholder='Write About your Project...' onChange={(e)=>{
        Setformdata({...formdata, Description:e.target.value})
    }}/>
    
   </div>])
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
     <input  placeholder='Project Title...'    onChange={(e)=>{
        Setformdata({...formdata,Title:e.target.value})
      }}/>
     <input placeholder='Project link...' onChange={(e)=>{
      Setformdata({...formdata, Link:e.target.value})
    }}/>
     <textarea value={formdata.Description} placeholder='Write About your Project...' onChange={(e)=>{
          Setformdata({...formdata, Description:e.target.value})
      }}/>
     </div>
   {inputelment.map((input, index)=>(
     <div key={index}>
       {input}
     </div>
   ))}
     <div className='but-container'>
     <button className='btn3' onClick={Add}>Add</button>
     </div>
     <div className='but-container'>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr-1 )
     }}>Preview</button>
     <button className='btn3' onClick={handleSubmit}>Submit</button>
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