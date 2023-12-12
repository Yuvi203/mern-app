import React from 'react'
import styled from 'styled-components'
import img from "../img/profile3.png"
import {Bounce} from "react-reveal"
import { Link } from 'react-router-dom'


const Homecom1 = () => {
  return (
    <Container>
      <Bounce left>
      <div className='left'>
          <h1>Where You Can Search <span>Millions of Portfolios</span></h1>
          <p>Cloud Portfolio provides a platform for individuals to build and maintain a professional online Porfolio. Users can showcase their career achievements, connect with others in their industry.</p>
          <div className='left-button'>
            <Link to={"/portfolios"}><button className='btn1'>Explore</button></Link>
            <Link to={"/resume"}><button className='btn1'>Create</button></Link>
          </div>
       </div>
      </Bounce>
      <Bounce right>
      <div className='right'>
         <img src={img} alt=""/>
       </div>
      </Bounce>
    </Container>
  )
}

export default Homecom1

const Container = styled.div`
padding:4rem 6rem;
display:flex;
justify-content:space-between;
align-items:center;
min-height:100vh;
.left{
  flex:1;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  flex-direction:column;
  h1{
    font-size:3rem;
    color:var(--white-color);
  }
  @media screen and (min-width:2000px) {
    h1{
      font-size:3rem;
    }
    span{
      font-size:3rem;
    }
  }
  @media screen and (max-width:1150px) {
    h1{
      font-size:3rem;
    }
    span{
      font-size:3rem;
    }
  }
  @media screen and (max-width:650px) {
    h1{
      font-size:3rem;
    }
  }
  @media screen and (max-width:650px) {
    span{
      font-size:3rem;
    }
  }
  @media screen and (max-width:450px) {
    h1{
      font-size:3rem;
    }
  }
  
  span{
    font-size:3rem;
    color:var(--primary-color);
  }
}
.right{
  flex:1;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:2rem;
  img{
    object-fit:cover;
    border-radius:20px;
  }
}
button{
  margin-top:1rem;
  margin-right:1rem;
  border:0;
  background: #7f5feb;
  color: #dfdeee;
  border-radius: 100px;
  width: 140px;
  height: 49px;
  font-size: 16px;
  cursor:pointer;
}
@media screen  and (max-width:1150px) {
  flex-direction: column;
.right{
  margin: 5rem 0 0 0;
}
img{
  width:100%;
}
}
@media screen and (max-width:850px) {
  padding:4rem 2rem;
}
.left-button{
  display:flex;
}

`