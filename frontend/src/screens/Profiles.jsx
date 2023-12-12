import React from 'react'
import Profile from '../components/Profile'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Profiles = () => {
  const {users} = useSelector((state)=> state.resume)

  return (
    <Container>
     {users.map((data , i)=>{
      return(
        <Profile name={data.Firstname} age={data.Age} profession={data.Profession} skill1={data.Skill} skill2={data.Skill2} skill3={data.Skill3} skill4={data.Skill4}/>
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