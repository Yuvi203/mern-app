import React, { useEffect } from 'react'
import {Link, useParams} from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getid, getusers } from '../redux/slices/ResumeSlice'
import styled from 'styled-components'
import img from "../img/man.png"
import Profile from '../components/Profile'


const User = () => { 
  const {id} = useParams()
  const dispatch = useDispatch()
  const {users} = useSelector((state)=> state.resume)
 
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/getdetails/${id}`).then((res)=>{
     console.log("data", res.data)
     console.log("database users", users)
     dispatch(getusers(res.data))
     dispatch(getid(res.data._id))
    })
 }, [])

 
  
  return (
    <Container>
      <div className='box'>
        <div>
          <Profile name={users.Firstname} age={users.Age} profession={users.Profession} skill1={users.Skill} skill2={users.Skill2} skill3={users.Skill3} skill4={users.Skill4}/>
        </div>
        <div className='buttons'>
          <Link to={`/portfolio/${users._id}`}><button className='primary'>Portfolio</button></Link>
          <button className='primary'>Connect</button>
          <button className='primary'>Update</button>
          <Link to={"/portfolios"}><button className='primary'>Discover</button></Link>
        </div>
     </div>
    </Container>
  )
}

export default User


const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:2rem;
  .box{
    display:flex;
  align-items:center;
  justify-content:center;
  margin:auto;
    padding: 20px;
    background: rgb( 33, 41, 66 );
    max-width: 850px;
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-gap:2rem;
    position:relative;
    @media screen and (max-width:820px) {
      grid-template-columns:repeat(1, 1fr);
      grid-gap:2rem;
}
  }
.buttons{
  display:flex;
  flex-wrap:wrap !important;
  align-items:center;
  justify-content:center;
}
`