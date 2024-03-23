import React, { useState } from 'react'
import styled from 'styled-components'
import {Fade} from "react-reveal"
import { useSelector } from 'react-redux'
import axios from 'axios'
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {storage} from "../../helpers/firebase"


const Personaldetails2 = ({page, setPage, formdata, Setformdata, profile, Setprofile}) => {
  const {users} = useSelector((state)=> state.resume)
  const [image , setImage] = useState()

  const handleChange = (e) =>{
    const file = e.target.files[0]
    const fileRef = ref(storage, `images/${file.name}`)
    uploadBytes(fileRef, file).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        console.log(url)
        Setprofile(url)
         setImage(url)
      })
    })
 }
 
  
  return (
    <Fade left>
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
      <div className="image-upload-container">
      <div className="box-decoration">
      {image ? <img src={image} alt=""/> : <img src={users.Profile} alt=''/>}
        </div>
       <div className='file-input'>
        <label>
          Select file
        <input className='file' type='file' onChange={handleChange} accept='image/*' />
        </label>
       </div>
       </div>
  </div>
    <form>
    <h3>Personal details</h3>
     <div className='form-group'>
      <input type='text' placeholder='First Name' defaultValue={users.Firstname} onChange={(e)=>{
        Setformdata({...formdata, Firstname:e.target.value})
      }}/>
      <input type='text' placeholder='Last Name'  defaultValue={users.Lastname} onChange={(e)=>{
        Setformdata({...formdata, Lastname:e.target.value})
      }}/>
     </div> 
     <div className='form-wrapper'>
     <input placeholder='Email...' defaultValue={users.Email} onChange={(e)=>{
        Setformdata({...formdata, Email:e.target.value})
      }}/>
      <input placeholder='Profession...' defaultValue={users.Profession} onChange={(e)=>{
        Setformdata({...formdata, Profession:e.target.value})
      }}/>
     <textarea placeholder='About yourself...' defaultValue={users.PersonalDescription} onChange={(e)=>{
        Setformdata({...formdata, PersonalDescription:e.target.value})
      }}/>
     <div className='form-group'>
      <input placeholder='Age..' defaultValue={users.Age} onChange={(e)=>{
        Setformdata({...formdata, Age:e.target.value})
      }}/>
      <input placeholder='Mobile No' defaultValue={users.MobileNo} onChange={(e)=>{
        Setformdata({...formdata, MobileNo:e.target.value})
      }}/>
     </div>
     </div>
     <div className='but-container'>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr+1 )
     }}>Next</button>
  
     </div>
   </form>
    </div>
  </Container>
  </Fade>
  )
}

export default Personaldetails2
const Container =  styled.div`
display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
  .image-upload-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:5rem;  
  }
   
.box-decoration {
 // border: 2px dashed #ccc;
    border-radius: 50%;
    height:200px;
   width:200px;
   cursor:pointer;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
   // padding: 130px 100px;   

img{
  width:100%;
  object-fit:cover;
  border-radius: 50%;
    height:200px;
   width:200px;
}
}
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
  
`