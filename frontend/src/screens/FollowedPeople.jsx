import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Profile4 from '../components/Profile4'

const FollowedPeople = () => {
  const {users} = useSelector((state)=> state.resume)
  const id = users._id
  const [followed, Setfollowed] = useState([])

useEffect(()=>{
 axios.get(`http://localhost:8000/api/getfollowedpeople/${id}`).then((res)=>{
  Setfollowed(res.data)
 })
}, [])
  return (
      <Container>
           {followed ? <div>
          <div className='profiles'>
          {followed.map((item, i)=>{
         return(
          <>
          <div key={i}>
            <Profile4 data={item}/>         
          </div>
        </>
         )
      })}
      </div>
        </div>:
         <div>
         Not found
          </div>}
      </Container>
  )
}

export default FollowedPeople

const Container = styled.div`
padding:2rem;
position:relative;
.profiles{
  display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:1rem;
margin-left:2rem;
@media screen and (max-width:938px) {
 margin-left:0;
 grid-template-columns:repeat(2, 1fr);
}
}
`