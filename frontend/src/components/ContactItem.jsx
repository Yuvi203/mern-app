import React from 'react'
import styled from "styled-components"

const ContactItem = ({title, icon, phone, email, address1, address2}) => {
  return (
      <Container>
        <div className='left'>
          {icon}
        </div>
        <div className='right'>
          <h6>{title}</h6>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{address1}</p>
          <p>{address2}</p>
        </div>
      </Container>
  )
}

export default ContactItem


const Container = styled.div`
padding:1.5rem 2rem;
background-color:var(--background-dark-grey);
display: flex;
align-items: center;
&:not(:last-child){
  margin-bottom: 2.5rem;
}
.left{
  padding:1.5rem;
  border: 1px solid var(--border-color);
  font-size:2rem;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:1.5rem;
  svg{
    font-size:1.3rem;
  }
}
.right{
  h6{
    color:var(--white-color);
    font-size:1.2rem;
    padding-bottom: .6rem;
  }
  p{
    padding: .1rem 0;
  }
}
`