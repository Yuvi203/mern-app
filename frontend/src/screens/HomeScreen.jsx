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

`