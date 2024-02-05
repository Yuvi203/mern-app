import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../../img/man7.png"
import { Flip } from 'react-reveal'
import { useSelector } from 'react-redux'

const Skill22 = ({page, setPage, formdata, Setformdata}) => {
  const [inputelment, setInputelement] = useState([])
  const [show, Setshow] = useState(true)
  const {users} = useSelector((state)=> state.resume)
  const {Skill, Skill2, Skill3, Skill4, Skill5,Skill6, Skill7, Skill8, Skill9, Skill10} = formdata

  const Add = (e) =>{
    e.preventDefault()
    setInputelement([...inputelment, <>
         <div className='form-group'>
      <input type='text' placeholder='Skills' defaultValue={users.Skill9} onChange={(e)=>{
        Setformdata({...formdata, Skill9:e.target.value})
      }}/>
      <input type='text' placeholder='Skills...' defaultValue={users.Skill10} onChange={(e)=>{
        Setformdata({...formdata, Skill10:e.target.value})
      }}/>
     </div>
    </>])
      Setshow(false)
  }

  return (
    <Flip left> 
    <Container>
    <div className='wrapper'>
      <div className='img-con'>
         <img src={img} alt="" style={{width:"80%"}}/>
      </div>
    <form>
    <h3>Update Your Top  Skills</h3>
      <div className='form-group'>
      <input type='text' placeholder='Skills...'  defaultValue={users.Skill} onChange={(e)=>{
        Setformdata({...formdata, Skill:e.target.value})
      }}/>
      <input type='text' placeholder='Skills...' defaultValue={users.Skill2} onChange={(e)=>{
        Setformdata({...formdata, Skill2:e.target.value})
      }}/>
     </div>
     <div className='form-group'>
      <input type='text' placeholder='Skills' defaultValue={users.Skill3} onChange={(e)=>{
        Setformdata({...formdata, Skill3:e.target.value})
      }}/>
      <input type='text' placeholder='Skills...' defaultValue={users.Skill4} onChange={(e)=>{
        Setformdata({...formdata, Skill4:e.target.value})
      }}/>
     </div>
     <div className='form-group'>
      <input type='text' placeholder='Skills' defaultValue={users.Skill5} onChange={(e)=>{
        Setformdata({...formdata, Skill5:e.target.value})
      }}/>
      <input type='text' placeholder='Skills...' defaultValue={users.Skill6} onChange={(e)=>{
        Setformdata({...formdata, Skill6:e.target.value})
      }}/>
     </div>
     <div className='form-group'>
      <input type='text' placeholder='Skills' defaultValue={users.Skill7} onChange={(e)=>{
        Setformdata({...formdata, Skill7:e.target.value})
      }}/>
      <input type='text' placeholder='Skills...' defaultValue={users.Skill8} onChange={(e)=>{
        Setformdata({...formdata, Skill8:e.target.value})
      }}/>
     </div>
     {inputelment}
     <div className='but-container'>
     {show ? <button className='btn3' onClick={Add}>Add</button> : <></>}
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

export default Skill22


const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`