import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Buttons = ({users}) => {
  return (
    <Container>
      <Link to={`/portfolio/${users._id}`}><button className='btn3'>Portfolio</button></Link>
          <button className='btn3'>Connect</button>
          <Link to={`/updateresume/${users._id}`}><button className='btn3'>Update</button></Link>
          <Link to={"/portfolios"}><button className='btn3'>Explore</button></Link>
    </Container>
  )
}

export default Buttons

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-gap:1rem;
    padding:1rem;
`