import React from 'react'
import styled from 'styled-components'

const SmallTitle = ({icon, title}) => {
  return (
     <Container>
         <p>{icon}</p>
         <h3>{title}</h3>
     </Container>
  )
}

export default SmallTitle

const Container = styled.div`
display:flex;
align-items:center;
p{
    padding-right:1rem;
    svg{
        font-size:1.5rem;
    }
}
h3{
    color:var(--white-color);
    font-size:1.5rem;
}
`