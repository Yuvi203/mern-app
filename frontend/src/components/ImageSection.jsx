import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ImageSection = () => {
    const {users} = useSelector((state)=> state.resume)
  return (
     <Container>
          <div className='left-content'>
           <img src={users.Profile} alt=''/>
          </div>
          <div className='right-content'>
            <h4>I am <span>{users.Firstname}</span></h4>
            <p className='paragraph'>
              {users.PersonalDescription}
            </p>
            <div className='about-info'>
               <div className='info-title'>
                 <p>Full Name</p>
                 <p>Profession</p>
                 <p>Age</p>
                 <p>Nationality</p>
                 <p>Languages</p>
                 <p>Location</p>
               </div>
               <div className='info'>
               <p>: {users.Firstname} {users.Lastname}</p>
               <p>: {users.Profession}</p>
               <p>: {users.Age}</p>
               <p>: India</p>
               <p>: {users.Languages}</p>
               <p>: {users.Location}</p>
               </div>
            </div>
          </div>
     </Container>
  )
}

export default ImageSection

const Container = styled.div`
margin-top:5rem;
display:flex;
@media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
.left-content{
    width:70%;
    img{
        width:50%;
        object-fit:cover;
    }
}    
.right-content{
    width:100%;
    h4{
        font-size:2rem;
        color:var(--white-color);
        span{
            font-size:2rem;
            color: var(--primary-color);
        }
    }
    .paragraph{
        padding:1rem 0;
    }
    .about-info{
        display:flex;
        padding-bottom:1.4rem;
        .info-title{
            padding-right:3rem;
            p{
                font-weight:600;
            }
    }
    .info-title, .info{
           p{
                padding: .3rem 0;
           }
            }
    }
}
`