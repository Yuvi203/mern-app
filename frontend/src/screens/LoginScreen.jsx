import styled from 'styled-components'
import {Link} from "react-router-dom"

const LoginScreen = () => {
  return (
    <Container>
      <form className='form-container'>
      <h4>Cloud  <span>Portfolio</span></h4>
      <h5>Sign in to your account.</h5>
        <input type="text" name="email" placeholder="Email" autocomplete="off"/> 
         <i className="typcn typcn-eye" id="eye"></i>
        <input type="password" name="password" placeholder="Passsword" id="pwd" autocomplete="off"/>
        <Link to={"/register"} className="dnthave">Don’t have an account? Sign up</Link>
        <a href="#" className="forgetpass">Forget Password?</a>
        <input type="submit" value="Sign in" className="btn1"/>
      
      </form>
   
    </Container>
  )
}

export default LoginScreen

const Container = styled.div`
    

`
