import React from 'react'
import Profile from '../components/Profile'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Profiles = () => {
  const {allusers} = useSelector((state)=> state.resume)
  

  return (
    <Container>
      {allusers.map((item, i)=>{
         return(
          <div key={i}>
           <Profile data={item}/>
          </div>
         )
      })}
    </Container>
  )
}

export default Profiles

const Container = styled.div`
padding:2rem;
display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:2rem;
@media screen and (max-width:820px) {
  grid-template-columns:repeat(1, 1fr);
}
`