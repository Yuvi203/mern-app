import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Loading from '../components/Loading'
import Profile3 from '../components/Profile3'

const NetworkScreen = () => {
    const {followers} = useSelector((state)=> state.resume)

  return (
     <Container>
        {followers ? <div>
          <div className='profiles'>
          {followers.map((item, i)=>{
         return(
          <>
          <div key={i}>
            <Profile3 data={item}/>         
          </div>
        </>
         )
      })}
      </div>
        </div>:
         <div>
         Not found
          </div>}
     </Container>
  )
}

export default NetworkScreen

const Container = styled.div`
padding:2rem;
position:relative;
.profiles{
  display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:1rem;
margin-left:2rem;
@media screen and (max-width:938px) {
 margin-left:0;
 grid-template-columns:repeat(2, 1fr);
}
}
`