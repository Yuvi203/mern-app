import React from 'react'
import styled from 'styled-components'
import Categaries from '../components/Categaries'
import img1 from "../img/blog1.svg"
import img2 from "../img/blog2.svg"
import img3 from "../img/blog3.svg"
import img4 from "../img/blog4.svg"
import img5 from "../img/blog5.svg"
import { Link } from 'react-router-dom'

const ExploteScreen = () => {
  return (
      <Container>
        <Link to={"/profiles"}><Categaries img={img1} title={"Data Scientist"}/></Link>
       <Categaries img={img2} title={"App developer"}/>
       <Categaries img={img3} title={"Web developer"}/>
       <Categaries img={img4} title={"Block chain developer"}/>
       <Categaries img={img5} title={"DevOps engineer"}/>
       <Categaries img={img2} title={"UI UX designer"}/>
       <Categaries img={img1} title={"Data Analayst"}/>
       <Categaries img={img4} title={"Cloud engineer"}/>
      </Container>
  )
}

export default ExploteScreen

const Container = styled.div`
padding:2rem;
display:grid;
grid-template-columns:repeat(4, 1fr);
grid-gap:2rem;
@media screen and (max-width:820px) {
  grid-template-columns:repeat(1, 1fr);
}

`