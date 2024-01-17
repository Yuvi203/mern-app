import React from 'react'
import styled from 'styled-components'
import img from "../img/man.png"
import { Bounce} from 'react-reveal'

const Addition = ({ setPage,  formdata, Setformdata, handleSubmit}) => {
  return (
    <Bounce right>
    <Container>
        <div className='wrapper'>
        <div className='img-con'>
         <img src={img} alt=""/>
          </div>
          <form>
          <h3>Additional details</h3>
          <div className='form-wrapper'>
            <input placeholder='Address line1...' type='txt' value={formdata.Address1} onChange={(e)=>{
       Setformdata({...formdata, Address1:e.target.value})
      }}/>
            <input placeholder='Address line2...' type='txt' value={formdata.Address2} onChange={(e)=>{
       Setformdata({...formdata, Address2:e.target.value})
      }}/>
          </div>
          <div className='form-group'>
            <input placeholder='Location...' value={formdata.Location} onChange={(e)=>{
       Setformdata({...formdata, Location:e.target.value})
      }} type='txt'/>
            <input placeholder='Languages...' value={formdata.Languages} type='txt' onChange={(e)=>{
       Setformdata({...formdata, Languages:e.target.value})
      }}/>
          </div>
          <div className='form-wrapper'>
            <input placeholder='Github Link...' value={formdata.Sociallink1} onChange={(e)=>{
       Setformdata({...formdata, Sociallink1:e.target.value})
      }} type='txt'/>
            <input placeholder='Linkedin Link...' type='txt' value={formdata.Sociallink2} onChange={(e)=>{
       Setformdata({...formdata, Sociallink2:e.target.value})
      }}/>
        <input placeholder='Other Link...' type='txt' value={formdata.Sociallink3} onChange={(e)=>{
       Setformdata({...formdata, Sociallink3:e.target.value})
      }}/>
          </div>
          <div className='but-container'>
           <button className='btn3' onClick={()=>{
           setPage((curr)=> curr-1 )
           }}>Preview</button>
           <button className='btn3' onClick={handleSubmit}>Submit</button>
          </div>
          </form>
        </div>
    </Container>
    </Bounce>
  )
}

export default Addition


const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`