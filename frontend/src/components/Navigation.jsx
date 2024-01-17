import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {
    const {users} = useSelector((state)=> state.resume)
    const {id} = useParams()
  return (
      <Container>
         <div className='avatar'>
           <img src={users.Profile} alt=''/>
         </div>
         <ul className='nav-items'>
            <li className='nav-item'>
                <NavLink to={`/portfolio/${id}`}>
                    Home
                </NavLink>
              <NavLink to={`/portfolio/about/${id}`}>
                About
              </NavLink>
              <NavLink to={`/portfolio/resume/${id}`}>
                Resume
              </NavLink>
              <NavLink to={`/portfolio/project/${id}`}>
                Projects
              </NavLink>
              <NavLink to={`/portfolio/blog/${id}`}>
                Blog
              </NavLink>
              <NavLink to={`/portfolio/contact/${id}`}>
                Contact
              </NavLink>
            </li>
         </ul>
      </Container>
  )
}

export default Navigation

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    height:100%;
    width:100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width:100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }
    .nav-items{
        width:100%;
        text-align:center;
        padding-bottom:5rem;
        @media screen and (max-width:1024px) {
           padding-bottom:10rem;
  
        }
        @media screen and (min-width:1024px) {
           padding-bottom:18rem;
  
        }

        li{
           display:block;
            a{ 
               font-family: inherit;
               color: inherit;
               font-size: inherit;
                margin:1rem;
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                cursor: pointer;
                &:hover{
                    color: var(--white-color);
                    background-color: var(--primary-color-light);
                }
        }
    }
  }
`