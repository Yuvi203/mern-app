import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components'
import Title from '../../components/Title'
import ImageSection from '../../components/ImageSection'

const AboutScreen = () => {
 
  return (
     <Container>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection/>
     </Container>
  )
}

export default AboutScreen

const Container = styled.div`
padding:3rem;
@media screen and (max-width: 642px){
        padding: 4rem;
 }
 @media screen and (max-width: 510px){
        padding: 3rem;
 }
  @media screen and (max-width: 571px){
        padding: 2rem .4rem;
    }

`