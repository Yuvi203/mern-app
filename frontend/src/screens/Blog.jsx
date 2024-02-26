import React from 'react'
import styled from 'styled-components'


const Blog = () => {
  return (
     <Container>
        <form>
          <div className='img-b'>
               <img />
          </div>
        <div className='file-input'>
        <label>
          Select file
        <input className='file' type='file' accept='image/*' />
        </label>
       </div>
           <textarea placeholder="Write Your Blog..."/>
           <label>Post your Blog</label>
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