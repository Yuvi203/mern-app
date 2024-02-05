import React from 'react'
import styled from 'styled-components'
import img from "../../img/man.png"
import { Bounce} from 'react-reveal'
import { useSelector } from 'react-redux'

const Additional2 = ({page, setPage, formdata, Setformdata, handleSubmit}) => {
  const {users} = useSelector((state)=> state.resume)

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
            <input placeholder='Address line1...' type='txt' defaultValue={users.Address1} onChange={(e)=>{
       Setformdata({...formdata, Address1:e.target.value})
      }}/>
            <input placeholder='Address line2...' type='txt' defaultValue={users.Address2} onChange={(e)=>{
       Setformdata({...formdata, Address2:e.target.value})
      }}/>
          </div>
          <div className='form-group'>
            <input placeholder='Location...' type='txt' defaultValue={users.Location} onChange={(e)=>{
       Setformdata({...formdata, Location:e.target.value})
      }}/>
            <input placeholder='Languages...' type='txt' defaultValue={users.Languages}  onChange={(e)=>{
       Setformdata({...formdata, Languages:e.target.value})
      }}/>
          </div>
          <div className='form-wrapper'>
            <input placeholder='Github Link...' type='txt' defaultValue={users.Sociallink1} onChange={(e)=>{
       Setformdata({...formdata, Sociallink1:e.target.value})
      }}/>
            <input placeholder='Linkedin Link...' type='txt' defaultValue={users.Sociallink2} onChange={(e)=>{
       Setformdata({...formdata, Sociallink2:e.target.value})
      }}/>
        <input placeholder='Other Link...' type='txt' defaultValue={users.Sociallink3} onChange={(e)=>{
       Setformdata({...formdata, Sociallink3:e.target.value})
      }}/>
          </div>
          <div className='but-container'>
           <button className='btn3' onClick={()=>{
           setPage((curr)=> curr-1 )
           }}>Preview</button>
           <button className='btn3' onClick={handleSubmit}>Update</button>
          </div>
          </form>
        </div>
    </Container>
    </Bounce>
  )
}

export default Additional2

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3rem;
`