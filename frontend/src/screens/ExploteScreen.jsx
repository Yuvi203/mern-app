import React, { useState } from 'react'
import styled from 'styled-components'
import Categaries from '../components/Categaries'
import img1 from "../img/blog1.svg"
import img2 from "../img/blog2.svg"
import img3 from "../img/blog3.svg"
import img4 from "../img/blog4.svg"
import img5 from "../img/blog5.svg"
import { Link } from 'react-router-dom'
import axios from 'axios'

const ExploteScreen = ({users, Setusers, loading, setLoading, show, Setshow}) => {

 
  const getDevelopers = async () =>{
     const users = await axios.get("http://localhost:8000/api/getdevelopers").then((data)=>{
      console.log("profiles", data)
      Setusers(data.data)
      setLoading(false)
      Setshow(true)
     })
  }
  const getdesigners = async () =>{
    await axios.get("http://localhost:8000/api/getdesigners").then((res)=>{
      Setusers(res.data)
      console.log("designers", res.data)
      setLoading(false)
      Setshow(false)
    })
 }
 const getdatascientist = async () =>{
  await axios.get("http://localhost:8000/api/getdatascientist").then((res)=>{
    Setusers(res.data)
    console.log("designers", res.data)
    setLoading(false)
  })
}
const getbusinessanalyst = async () =>{
  await axios.get("http://localhost:8000/api/getbusinessanalyst").then((res)=>{
    Setusers(res.data)
    console.log("designers", res.data)
    setLoading(false)
  })
}

const getaiandml = async () =>{
  await axios.get("http://localhost:8000/api/getaiandml").then((res)=>{
    Setusers(res.data)
    console.log("designers", res.data)
    setLoading(false)
  })
}

const getblockchain = async () =>{
  await axios.get("http://localhost:8000/api/getblockchain").then((res)=>{
    Setusers(res.data)
    console.log("designers", res.data)
    setLoading(false)
  })
}

const getdevops = async () =>{
  await axios.get("http://localhost:8000/api/getdevops").then((res)=>{
    Setusers(res.data)
    console.log("designers", res.data)
    setLoading(false)
  })
}
const getcloud = async () =>{
  await axios.get("http://localhost:8000/api/getcloud").then((res)=>{
    Setusers(res.data)
    console.log("designers", res.data)
    setLoading(false)
  })
}

  return (
      <Container>
       <Link to={"/profiles"}><Categaries img={img1} title={"Data Scientist /Analyst"} profiles={getdatascientist}/></Link>
       <Link to={"/profiles"}><Categaries img={img3} title={"AI and ML"} profiles={getaiandml} users={users}/></Link>
       <Link to={"/profiles"}><Categaries img={img2} title={"Web/App developer"} profiles={getDevelopers} users={users} show={show} /></Link>
       <Link to={"/profiles"}><Categaries img={img4} title={"Tester"} profiles={getblockchain} users={users}/></Link>
       <Link to={"/profiles"}><Categaries img={img5} title={"DevOps/Cloud engineer"} profiles={getdevops} users={users}/></Link>
       <Link to={"/profiles"}><Categaries img={img2} title={"UI UX designer"}  profiles={getdesigners} users={users}/></Link>
       <Link to={"/profiles"}><Categaries img={img1} title={"Business Analyst"} profiles={getbusinessanalyst} users={users}/></Link>
       <Link to={"/profiles"}><Categaries img={img4} title={"Cyber Security"} profiles={getcloud} users={users}/></Link>
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