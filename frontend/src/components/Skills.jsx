import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import { Flip } from 'react-reveal'

const Skills = ({page, setPage, formdata, Setformdata}) => {
  const [inputelment, setInputelement] = useState([])

  const Add = (e) =>{
    e.preventDefault()
    setInputelement([...inputelment,
      <div className='form-group'>
      <input type='text' placeholder='Skills' onChange={(e)=>{
        Setformdata({...formdata, AdditionalSkills: e.target.value})
      }}/>
      <input type='text' placeholder='Percentage' onChange={(e)=>{
        Setformdata({...formdata, Percentage:e.target.value})
      }}/>
     </div>
    ])
  }

  return (
    <Flip left> 
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
         <img src={img} alt=""/>
      </div>
    <form>
    <h3>Skills</h3>
      <div className='form-group'>
      <input type='text' placeholder='Skills' value={formdata.Skill}   onChange={(e)=>{
        Setformdata({...formdata, Skill: e.target.value})
      }}/>
      <input type='text' placeholder='Percentage' value={formdata.Percentage}   onChange={(e)=>{
        Setformdata({...formdata, Percentage:e.target.value})
      }}
      />
     </div>
     <div className='form-group'>
      <input type='text' placeholder='Skills'  onChange={(e)=>{
        Setformdata({...formdata, Skill2: e.target.value})
      }}/>
      <input type='text' placeholder='Percentage'  onChange={(e)=>{
        Setformdata({...formdata, Percentage2:e.target.value})
      }}/>
     </div>
     <div className='form-group'>
      <input type='text' placeholder='Skills'  onChange={(e)=>{
        Setformdata({...formdata, Skill3: e.target.value})
      }}/>
      <input type='text' placeholder='Percentage'  onChange={(e)=>{
        Setformdata({...formdata, Percentage3:e.target.value})
      }}/>
     </div>
     <div className='form-group'>
      <input type='text' placeholder='Skills'  onChange={(e)=>{
        Setformdata({...formdata, Skill4: e.target.value})
      }}/>
      <input type='text' placeholder='Percentage'  onChange={(e)=>{
        Setformdata({...formdata, Percentage4:e.target.value})
      }}/>
     </div>
     {inputelment.map((d, i)=>(
       <div key={i}>{d}</div>
     ))}
     <div className='but-container'>
     <button className='btn3' onClick={Add}>Add</button>
     </div>
     <div className='but-container'>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr-1 )
     }}>Preview</button>
     <button className='btn3' onClick={()=>{
        setPage((curr)=> curr+1 )
     }}>Next</button>
     </div>
   </form>
    </div>
  </Container>
  </Flip>
  )
}

export default Skills

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`