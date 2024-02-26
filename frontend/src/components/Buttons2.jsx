import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Buttons2 = ({getfollower, getdetails}) => {
  return (
    <Container>
         <Link to={"/yournetworks"}><button className='primary' onClick={getfollower}>Networks</button></Link>
         <Link to={"/connectusers"}><button className='primary' onClick={getdetails}>Connect</button></Link>
         <Link to={"/followedpeople"}><button className='primary'>Followed </button></Link>
         <button className='primary'>Messages</button>
    </Container>
  )
}

export default Buttons2

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-gap:1rem;
    padding:1rem;
  
`