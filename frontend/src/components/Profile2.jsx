import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getfollowed } from '../redux/slices/ResumeSlice'
const Profile2 = ({data}) => {
   const {users} = useSelector((state)=> state.resume)
   const id = data._id
   const uniqueid = users._id
   const [connect, SetConnect] = useState(false)
   const [connect2, SetConnect2] = useState(false)
   const dispatch = useDispatch()

   const handleConnect = async () =>{
     try {
        await axios.post(`http://localhost:8000/api/connectviews/${id}`, {uniqueid})
        SetConnect(true)
     } catch (error) {
        console.log(error)
     }
   }
   const handleFollow = async () =>{
    try {
        await axios.post(`http://localhost:8000/api/follow/${uniqueid}`, {id})
        .then((res)=>{
            dispatch(getfollowed(res.data))
            SetConnect2(true)
        })
    } catch (error) {
        console.log(error)
    }
   }
  return (
      <Container>
       <img src={data.Profile} alt="user"/>
       <h3>{data.Firstname}</h3>
	   <h6>{data.Age}</h6>
       <p>{data.Profession}<br/> </p>
       <div className='buttons'> 
       <button className='primary' onClick={handleConnect}>{connect ? "Connected" :"Connect"}</button>
       <button className='primary' onClick={handleFollow}>{connect2 ? "Followed" :"Follow"}</button>
       </div>
       <p>{data.Connectcount} Connections</p>
      </Container>
  )
}

export default Profile2

const Container = styled.div`
    background-color: #231E39;
	border-radius: 30px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
    color: #B3B8CD;
    width: 320px;
	max-width: 100%;
	text-align: center;
    padding-top:30px;
    padding-bottom:30px;
    h3{
        margin:10px 0;
    }
    h6{
        margin:5px 0;
        text-transform:uppercase;
    }
    p{
        font-size:14px;
        line-height:21px;
    }
    img{
        border:1px solid #03BFCB;
        border-radius:50%;
        padding:7px;
        object-fit:cover;
        width:50%;
    }
    .skills{
    background-color: #1F1A36;
	text-align: left;
	padding: 15px;
	margin-top: 30px;
    border-radius: 30px;
    ul{
    list-style-type: none;
	margin: 0;
	padding: 0;
    }
    li{
    border: 1px solid #2D2747;
	border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
    }
    }

`