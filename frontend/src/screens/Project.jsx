import React from 'react'
import styled from 'styled-components'
import video from "../img/video.mp4"


const Project = () => {
  return (
     <Container>
        <form>
          <div className='img-b'>
               <video src={video} autoPlay/>
          </div>
        <div className='file-input'>
        <label>
          Select demo video
        <input className='file' type='file' accept='video/*' />
        </label>
       </div>
         <input placeholder='Source Link...'/>
           <textarea placeholder="Write about Your Project..."/>
           <label>Post Project</label>
        </form>
     </Container>
  )
}

export default Project

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
  input{
    display: block;
    width: 70%;
    height: 30px;
    padding: 0;
    margin-bottom: 25px;
    border-bottom:1.5px solid black;
    background-color:transparent;
    color:white;
    outline:none;
    border-left:none;
    border-right:none;
    border-top:none;
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
  video{
    width:100%;
  }
}
`