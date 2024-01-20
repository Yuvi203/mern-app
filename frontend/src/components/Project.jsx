import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../img/woman9.png"
import { Bounce, Zoom } from 'react-reveal'
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {storage} from "../helpers/firebase"

const Project = ({page, setPage,  formdata, Setformdata, Fileurl, SetFileUrl}) => {

  const handleChange = (e) =>{
    const file = e.target.files[0]
    const fileRef = ref(storage, `files/${file.name}`)
    uploadBytes(fileRef, file).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        console.log(url)
         SetFileUrl(url)
      })
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
           {Fileurl ? "Uploaded" :"Select File"}
        <input className='file' type='file' onChange={handleChange} accept='application/pdf'/>
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