import React from 'react'
import styled from "styled-components"
import Homecom1 from '../components/Homecom1'
import { Link } from 'react-router-dom'




const HomeScreen = () => {
  return (
    <Container>
         <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
      <Homecom1/>
      
    </Container>
  )
}

export default HomeScreen

const Container = styled.div`
position:relative;
.lines{
  position:absolute;
  min-height:100%;
  width:100%;
  display:flex;
  justify-content:space-evenly;
  opacity:0.4;
  z-index:-1;
  .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
}

`