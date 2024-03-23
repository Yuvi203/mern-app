import React, { useState } from 'react'
import styled from 'styled-components'
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { storage } from '../helpers/firebase'
import axios from 'axios'


const Blog = () => {
  const [image , setImage] = useState()
  const [blogimg, SetBlogimg] = useState("")
  const [description, Setdescription] = useState("")
  const blogid = localStorage.getItem("id")
 
  const handleChange = (e) =>{
    const file = e.target.files[0]
    const fileRef = ref(storage, `blogimg/${file.name}`)
    uploadBytes(fileRef, file).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        console.log(url)
         SetBlogimg(url)
         setImage(url)
      })
    })
 }

  const Postblog = async () =>{
    try {
     await axios.post("http://localhost:8000/api/postblog", {blogid, blogimg, description}).then(()=>{
        alert("Post uploaded Succesfully")
      })
    } catch (error) {
        alert("Error!")
    }
  
  }
  return (
     <Container>
        <form>
          <div className='img-b'>
              {image ? <img src={image} alt=''/> :<img/>}
          </div>
        <div className='file-input'>
        <label>
          Select file
        <input className='file' type='file' accept='image/*' onChange={handleChange}/>
        </label>
       </div>
           <textarea placeholder="Write Your Blog..." onChange={(e)=>{
            Setdescription(e.target.value)
           }}/>
           <label onClick={Postblog}>Post your Blog</label>
        </form>
     </Container>
  )
}

export default Blog

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:2rem;
form{
  background-color: rgb( 33, 41, 66 );
  padding:1rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:1rem;
  height:500px;
  width:600px;
  textarea{
    width:100%;
    resize:none;
    height:40%;
    outline:none;
    padding:15px;
    font-size:16px;
    border-radius:5px;
    margin-top:1rem;
    max-height:330px;
    caret-color:#4671EA;
    border:1.5px solid black;
    background:transparent;
    color:white;
    ::-webkit-scrollbar{
      width: 9px;
      background-color: #383838;
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
}
.img-b{
  //border-radius: 50%;
  height:300px;
  width:300px;
  cursor:pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  border:2px solid #3498db;
  img{
    width:100%;
  }
}
`