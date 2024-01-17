import React, { useEffect } from 'react'
import {Link, useParams} from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getid, getusers } from '../redux/slices/ResumeSlice'
import styled from 'styled-components'
import UserProfile from '../components/UserProfile'
import Buttons from '../components/Buttons'

const User = () => { 
  const {id} = useParams()
  const dispatch = useDispatch()
  const {users} = useSelector((state)=> state.resume)
  
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/getdetails/${id}`).then((res)=>{
     console.log("data", res.data)
     console.log("database users", users)
     if(!res.data){
        localStorage.clear("active")
        localStorage.clear("id")
     }
     dispatch(getusers(res.data))
     dispatch(getid(res.data._id))
    })
 }, [])

  

 
  return (
    <Container>
      <div className='items box'>
        <div className='profile'>
          <UserProfile profile={users.Profile} name={users.Firstname} age={users.Age} profession={users.Profession} skill1={users.Skill} skill2={users.Skill2} skill3={users.Skill3} skill4={users.Skill4} skill5={users.Skill5} skill6={users.Skill6} skill7={users.Skill7} skill8={users.Skill8}/>
        </div>
        <div className='buttons'>
        <Buttons users={users}/> 
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
  .profile{
  display:flex;
  align-items:center;
  justify-content:center;
  }
  .box{
    display:flex;
  align-items:center;
  justify-content:center;
  margin:auto;
    padding: 20px;
    background-color: rgb( 33, 41, 66 );
  border-radius: 9px;
    border-top: 10px solid #79a6fe;
   //border-bottom: 10px solid #8BD17C;   
  box-shadow: 1px 1px 108.8px 19.2px rgb(25,31,53);
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
  align-items:center;
  justify-content:center;
}
.items{
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  @media screen and (max-width:820px) {
      grid-template-columns:repeat(1, 1fr);
      grid-gap:2rem;
}
}
`