import React, { useState } from 'react'
import styled from 'styled-components'
import {Fade} from "react-reveal"
import axios from 'axios'


const PersonalDetails = ({page, setPage, formdata, Setformdata, SetProfile}) => {

  const [image , setImage] = useState()

  const handleChange = (e) =>{
     const file = e.target.files[0]
     const formData = new FormData()
     formData.append('file', file)
     formData.append("upload_preset", import.meta.env.REACT_IMAGE_KEY)
     axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.REACT_IMAGE_NAME}/image/upload`, formData)
     .then((res)=>{
      setImage(res.data.secure_url)
      SetProfile(res.data.secure_url)
     })
     .catch(err => console.log(err))
  }
  
  return (
    <Fade left>
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
      <div className="image-upload-container">
      <div className="box-decoration">
         {image ? <img src={image} alt=""/> : <img src='http://i.pravatar.cc/500?img=7s' alt=''/>}
        </div>
       <div className='file-input'>
        <label>
          Select file
        <input className='file' type='file' onChange={handleChange} accept='image/*'/>
        </label>
       </div>
       </div>
  </div>
    <form>
    <h3>Personal details</h3>
     <div className='form-group'>
      <input type='text' placeholder='First Name' value={formdata.Firstname} onChange={(e)=>{
       Setformdata({...formdata, Firstname:e.target.value})
      }}/>
      <input type='text' placeholder='Last Name' value={formdata.Lastname} onChange={(e)=>{
       Setformdata({...formdata, Lastname:e.target.value})
      }}/>
     </div> 
     <div className='form-wrapper'>
     <input placeholder='Email...' value={formdata.Email} onChange={(e)=>{
       Setformdata({...formdata, Email:e.target.value})
      }}/>
      <input placeholder='Profession...' value={formdata.Profession} onChange={(e)=>{
       Setformdata({...formdata, Profession:e.target.value})
      }}/>
     <textarea placeholder='About yourself...' value={formdata.PersonalDescription} onChange={(e)=>{
       Setformdata({...formdata, PersonalDescription:e.target.value})
      }}/>
     <div className='form-group'>
      <input placeholder='Age..' value={formdata.Age} onChange={(e)=>{
       Setformdata({...formdata, Age:e.target.value})
      }}/>
      <input placeholder='Mobile No' value={formdata.MobileNo} onChange={(e)=>{
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

export default PersonalDetails

const Container = styled.div`
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