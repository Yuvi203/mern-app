import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { getid, getusers } from '../redux/slices/ResumeSlice'
import styled from 'styled-components'
import HomeScreen from './portfolio/HomeScreen'
import AboutScreen from './portfolio/AboutScreen'
import Resumescreen from './portfolio/Resumescreen'
import ProjectScreen from './portfolio/ProjectScreen'
import BlogScreen from './portfolio/BlogScreen'
import ContactScreen from './portfolio/ContactScreen'
import Loading from "../components/Loading"
import { BsBrightnessHigh } from "react-icons/bs";
import Switch from "@material-ui/core/Switch"


const PortfolioScreen = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState('dark-theme')
    const [checked, setChecked] = useState(false)

    useEffect(()=>{
      axios.get(`http://localhost:8000/api/getdetails/${id}`).then((res)=>{
       console.log("data", res.data)
       dispatch(getusers(res.data))
       setLoading(false)
      })
   }, [])


  
  return (
    <Container>
      {loading ? <Loading/> :
       <>
          <HomeScreen/>
          <AboutScreen/>
          <Resumescreen/>
          <ContactScreen/>
      </>}
    </Container>
  )
}

export default PortfolioScreen

const Container = styled.div`
.light-dark-mode{
  position:fixed;
  right:0;
  top:50%;
  background-color: var(--background-light-color-2);
  width:6.5rem;
  height:2.5rem;
  z-index:15;
  display:flex;
  align-items:center;
  justify-content:center;
  svg{
    display:flex;
    align-items:center;
    font-size:1.7rem;
    color:var(--white-color);
  }
}
`