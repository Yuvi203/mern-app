import React from 'react'
import { Bounce } from 'react-reveal'
import styled from 'styled-components'

const Categaries = ({img, title, profiles}) => {
  return (
    <Bounce top>
     <Container onClick={profiles}>
      <div className='image'>
        <img src={img} alt=""/>
      </div>
      <div className='title'>
        <a>{title}</a>
      </div>
     </Container>
     </Bounce>
  )
}

export default Categaries

const Container = styled.div`
background-color:var(--background-dark-grey);
padding:1rem 1rem;
cursor:pointer;
.image{
    width:100%;
    overflow:hidden;
    padding-bottom:.5rem;
    img{
        height:90%;
        width:100%;
    }
}
.title{
    a{
        font-size:1.2rem;
        padding:2rem 0;
        color:var(--white-color);
        cursor:pointer;
        transition:all .4s ease-in-out;
    }

}
`

