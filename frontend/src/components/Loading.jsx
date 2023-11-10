import React from 'react'
import styled from 'styled-components'
import {MoonLoader} from "react-spinners"

const Loading = () => {
  return (
    <Container>
        <div>
        <MoonLoader color="#36d7b7"/>
        </div>
    </Container>
  )
}

export default Loading

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:relative;
padding-left:10rem;
padding-right:10rem;
padding-top:5rem;
padding-bottom:5rem;
div{
  padding-left:10rem;
  padding-right:10rem;
  padding-top:10rem;
  padding-bottom:5rem;
}

`