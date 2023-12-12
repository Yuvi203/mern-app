import React from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import { Link } from 'react-router-dom'
import {Rotate} from "react-reveal"
import { useSelector } from 'react-redux'


const Success = () => {
 const user_id = localStorage.getItem("id")
 const {users, users_id} = useSelector((state)=> state.resume)
   
  return (
    <Rotate RIGHT>
     <Container>
      <div className='wrapper' >
      <div className='img-con'>
         <img src={img} alt=""/>
      </div>
      <div className='right'>
        <h1>Sucessfully Created</h1>
        <h3>Continue to see your website</h3>
        <Link to={`user/${user_id}`}><button className='btn3'>Continue</button></Link>
      </div>
      </div>
     </Container>
     </Rotate>
  )
}

export default Success

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
  h3{
   padding-top:1rem;
  }
  h1{
    font-size:2rem;
    padding-bottom:1rem;
  }
  button{
    margin-bottom:1rem;
  }
  .right{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
`