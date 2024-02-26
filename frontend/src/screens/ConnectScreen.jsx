import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import img1 from "../img/blog1.svg"
import img2 from "../img/blog5.svg"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { getfollowers, getusers, getprofiles } from '../redux/slices/ResumeSlice'
import Categaries from '../components/Categaries'
import Buttons2 from '../components/Buttons2'

const ConnectScreen = () => { 
    const {users} = useSelector((state)=> state.resume)
  //  const id = users._id
      const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
      axios.get(`http://localhost:8000/api/getdetails/${id}`).then((res)=>{
        dispatch(getusers(res.data))
      })
    }, [])
    
    const getdetails = async () =>{
        await axios.get(`http://localhost:8000/api/getdetailsall/${id}`).then((res)=>{
          dispatch(getprofiles(res.data))
        })
      }
    
    const getfollower = async () =>{
     await axios.get(`http://localhost:8000/api/getfollowers/${id}`).then((res)=>{
      dispatch(getfollowers(res.data))
     })
    }

  return (
     <Container>
        <div className='left-c'>
          <div className='avatar'>
          <img src={users.Profile} alt=''/>
          </div>
         <div>
          <Buttons2 getdetails={getdetails} getfollower={getfollower}/>
         </div>
         </div>
        <div className='right-c'> 
        <div className='content' >
        <Link to={"/blog"}><Categaries img={img1} title={"Write Your Blog"} /></Link>
        </div>
        <div className='content'>
        <Link to={"/project"}><Categaries  img={img2} title={"Write Your Project"} /></Link>
        </div>
        </div>
     </Container>
  )
}

export default ConnectScreen

const Container = styled.div`
padding:2rem;
display:grid;
grid-template-columns:repeat(2, 1fr);
grid-gap:1rem;
@media screen and (max-width:820px) {
grid-template-columns:repeat(1, 1fr);
grid-gap:2rem;
}
.left-c{
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-right: 1px solid var(--border-color);
@media screen and (max-width:820px) {
border-right:none;
}
margin-bottom:2rem;
.avatar{
    width:100%;
    text-align: center;
    padding: 1rem 0;
    img{
    width: 40%;
    border-radius: 50%;
    border: 8px solid var(--border-color);
    }
}

}
.right-c{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    :nth-last-child(2){
          img{
            width:300px;
          }
        }
    .content{
        margin-bottom:10px;
    }
}
`