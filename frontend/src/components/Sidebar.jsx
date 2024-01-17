import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

const Sidebar = ({navToggle}) => {
  return (
     <Container className={`${navToggle ? `nav-toggle` :``}`}>
       <Navigation/>
     </Container>
  )
}

export default Sidebar

const Container = styled.div`
width:14.3rem;
position:fixed;
height:100vh;
background-color:var(--sidebar-dark-color);
overflow:hidden;
transition: all .4s ease-in-out;
@media screen and (max-width:1200px){
transform: translateX(-100%);
z-index: 20;
}
`