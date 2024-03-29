import React from 'react'
import styled from 'styled-components'

const ResumeItem = ({year,year2, title, description, text}) => {
  return (
    <Container>
       <div className='left-content'>
          <p>{year}-{year2}</p>
       </div>
       <div className='right-content'>
          <h5>{title}</h5>
          <h6>{text}</h6>
          <p>{description}</p>
       </div>
    </Container>
  )
}

export default ResumeItem

const Container = styled.div`
    display:flex;
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
      width:50%;
      padding-left:20px;
      position:relative;
      &::before{
        content:"";
        position:absolute;
        left:-10px;
        top:5px;
        height:15px;
        width:15px;
        border-radius:50%;
        border: 2px solid var(--border-color);
        background-color: var(--background-dark-color);
      }
      p{
            display: inline-block;
        }
    }
    .right-content{
      padding-left:5rem;
      position:relative;
      &::before{
       content:"";
       position:absolute;
       left:0;
      top:20px;
       height:2px;
       width:3rem;
       background-color: var(--border-color);
      }
      h5{
        color:var(--primary-color);
        font-size:2rem;
        padding-bottom:.7rem;
      }
      h6{
        padding-bottom: .4rem;
        font-size: 1.5rem;
        color:var(--white-color);

        }
    }
`