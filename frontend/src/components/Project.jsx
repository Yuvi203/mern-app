import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../img/woman9.png"
import { Bounce, Zoom } from 'react-reveal'
import axios from 'axios'


const Project = ({page, setPage,  formdata, Setformdata,}) => {
 
  const handleChange = (e) =>{
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append("upload_preset",import.meta.env.REACT_PRESET_KEY)
    axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.REACT_CLOUD_NAME}/image/upload`, formData)
    .then((res)=>{
    alert("submitted")
    })
    .catch(()=>{
      alert("failed")
    })
 }

  return (
    <Bounce left>
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
         <img src={img} alt=""/>
      </div>
    <form>
    <h3>Upload your CV</h3>
     <div className='form-wrapper'>
     <div className='file-input'>
        <label>
          Select file
        <input className='file' type='file' onChange={handleChange}/>
        </label>
       </div>
     </div>
     <div className='but-container'>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr-1 )
     }}>Preview</button>
     <button className='btn3' onClick={()=>{
      setPage((curr)=> curr+1)
     }}>Next</button>
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
  .file-input{
    label{
  display: flex;
  margin-top:1rem;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border: 2px solid #3498db;
  border-radius: 5px;
  color: #3498db;
  input{
    display:none;
  }
}
  }
`