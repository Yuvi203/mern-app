import React from 'react'
import img from "../img/404.png"
import styled from 'styled-components'

const PagenotFoundScreen = () => {
  return (
     <Container>
        <img src={img} alt=""/>
     </Container>
  )
}

export default PagenotFoundScreen

const Container = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 
 img{
    width:500px;
    height:500px;
 }

`

