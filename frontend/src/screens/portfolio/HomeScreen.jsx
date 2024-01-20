import React, { useState } from 'react'
import styled from 'styled-components'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FiMessageCircle } from "react-icons/fi";



const HomeScreen = () => {
    const {users} = useSelector((state)=> state.resume)

  return (
    <>
    <Container>        
         <div className='typography'>
         <h1>Hi, I'm <span>{users.Firstname} {users.Lastname}</span></h1>
         <p>{users.PersonalDescription}</p>
         <div className='icons'>
         {users.Sociallink1 ?   <a href={users.Sociallink1} className="icon i-facebook">
            <FaLinkedin/>
         </a> :<></>}
         {users.Sociallink2 ?   <a href={users.Sociallink2} className="icon i-github">
            <FaGithub/>
         </a> :<></>}
         {users.Sociallink3 ?   <a href={users.Sociallink3} className="icon i-youtube">
            <FaFacebookSquare/>
         </a> : <></>}
         </div>
      </div>
    </Container>
    </>
  )
}

export default HomeScreen

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
//position:absolute;
padding-top:1rem;
.typography{
  /* position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%); */
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  width:80%;
  h1{
    font-size: 4rem;
    color: var(--white-color);
  }
  span{
    font-size: 4rem;
    color: var(--primary-color);
 }
}
.icons{
  display: flex;
 justify-content: center;
margin-top: 1rem;
.icon{
  //margin:1rem;
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
 border-radius: 50%;
transition: all .4s ease-in-out;
cursor: pointer;
font-family: inherit;
color: inherit;
font-size: inherit;
 font-size: 1rem;
 svg{
 margin: .5rem;
 }
 &:hover{
  border: 2px solid var(--primary-color);
  color: var(--primary-color)
 }
 &:not(:last-child){
margin-right: 1rem;
}
}
}
.sayhello{
  margin-top:2rem;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  svg{
    font-size:2rem;
  }
  h1{
    color: var(--white-color);
    margin-top:.3rem;
  }
}
`