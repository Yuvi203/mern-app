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
margin:0 !important;
grid-template-columns:repeat(3, 1fr);
grid-column-gap:1rem;
grid-row-gap:1rem;
@media screen and (max-width:820px) {
  grid-template-columns:repeat(1, 1fr);
}
`