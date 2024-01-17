import React from 'react'
import styled from 'styled-components'

const UserProfile = ({profile, name, age, profession, skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8}) => {
  return(
    <Container>
    <img src={profile} alt="user"/>
    <h3>{name}</h3>
    <h6>{age}</h6>
    <p>{profession} <br/> </p>
    <div className='skills'>
      <h6>Skills</h6>
      <ul>
         <li>{skill1}</li>
         <li>{skill2}</li>
         <li>{skill3}</li>
         <li>{skill4}</li>
         <li>{skill5}</li>
         <li>{skill6}</li>
         <li>{skill7}</li>
         <li>{skill8}</li>
      </ul>
    </div>
   </Container>
  )
}

export default UserProfile

const Container = styled.div`
    background-color: #231E39;
	border-radius: 30px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
    color: #B3B8CD;
    width: 320px;
	max-width: 100%;
	text-align: center;
    padding-top:30px;
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