import React, { useState, useTransition } from 'react'
import Profile from '../components/Profile'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'
import axios from 'axios'


const Profiles = ({users, loading, setLoading, show, Setshow, getreact,  Setusers}) => {
const {allusers} = useSelector((state)=> state.resume)
const [filter, Setfilter] = useState("")
const [isPending, startTransition] = useTransition()


const handleSubmit = async (e)=>{
 await axios.get(`http://localhost:8000/api/filterprofiles/${filter}`).then((res)=>{
  console.log("filter users", res.data)
  startTransition(()=>{
    Setusers(res.data)
  })
})
}

  return (
    <Container>
      <div>
        <div className='input'>
           <input type='txt' placeholder='filter profiles...' onChange={(e)=> Setfilter(e.target.value)} />
           <button onClick={handleSubmit}>Search</button>
        </div>
      <div>  
        {users ? <div>
          <div className='profiles'>
          {users.map((item, i)=>{
         return(
          <>
          {loading ? <Loading/> : 
          <div key={i}>
            <Profile data={item}/>         
          </div>
          }
        </>
         )
      })}
      </div>
        </div>:
         <div>
         Not found
          </div>}
      </div>

      </div>
    </Container>
  )
}

export default Profiles

const Container = styled.div`
padding:2rem;
position:relative;
.profiles{
  display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:1rem;
margin-left:2rem;
@media screen and (max-width:938px) {
 margin-left:0;
 grid-template-columns:repeat(2, 1fr);
}
}
 .category{
  position:absolute;
  right:0;
  top:10px;
  @media screen and (max-width:820px) {
   right:0;
   margin-left:1rem;
}
  select {
  width: 180px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  @media screen and (max-width:820px) {
    width: 100px;
}
}
option {
  font-size: 16px;
}
 }
.input{
  display:flex;
  align-items:center;
  justify-content:center;
  padding-bottom:1rem;
  input{
    border: 2px solid var(--border-color);
    outline: none;
    background: transparent;
    height:50px;
    padding:0 15px;
    color:white;
  }
  button{
  border:0;
  background: #7f5feb;
  color: #dfdeee;
  border-radius:100px;
  width: 140px;
  height: 49px;
  font-size: 16px;
  cursor:pointer;
  &:hover{
    background: #5d33e6;
  }
  }
}
`