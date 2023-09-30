import styled from "styled-components"
import { Link } from "react-router-dom"

const RegisterScreen = () => {
  return (
     <Container>
       <form className='form-container'>
      <h4>Cloud  <span>Portfolio</span></h4>
      <h5>Register your account.</h5>
        <input type="text" name="email" placeholder="Email" autocomplete="off"/>
        <i className="typcn typcn-eye" id="eye"></i>
        <input type="password" name="password" placeholder="Passsword" id="pwd" autocomplete="off"/>
        <Link to={"/login"}> 
        <input type="submit" value="Register" className="btn1"/>
        </Link>
       
      
      </form>
     </Container>
  )
}

export default RegisterScreen

const Container = styled.div`

  
`