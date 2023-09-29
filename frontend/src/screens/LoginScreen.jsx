import styled from 'styled-components'

const LoginScreen = () => {
  return (
    <Container>
      <div className='form-container'>
      <h4>Cloud  <span>Portfolio</span></h4>
      <h5>Sign in to your account.</h5>
        <input type="text" name="email" placeholder="Email" autocomplete="off"/>
        <i className="typcn typcn-eye" id="eye"></i>
        <input type="password" name="password" placeholder="Passsword" id="pwd" autocomplete="off"></input>
        
        <a href="#" className="forgetpass">Forget Password?</a>
      </div>
    </Container>
  )
}

export default LoginScreen

const Container = styled.div`
 
  .form-container{
    margin: 0;
  top: 50px;
  left: 50%;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  background-color: rgb( 33, 41, 66 );
  border-radius: 9px;
  border-top: 10px solid #79a6fe;
  border-bottom: 10px solid #8BD17C;
  width: 400px;
  height: 500px;
  box-shadow: 1px 1px 108.8px 19.2px rgb(25,31,53);
  h4{
    font-family: 'Source Sans Pro', sans-serif;
  color: #5c6bc0; 
  font-size: 18px;
  margin-top:94px;;
  }
 span {
  color: #dfdeee;
  font-weight: lighter;
  }
  h5{
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 13px;
  color: #a1a4ad;
  letter-spacing: 1.5px;
  margin-top: -1px;
  padding:10px;
  margin-bottom: 70px;
  }
  input{
  display: block;
  margin: 20px auto;
  background: #262e49;
  border: 0;
  border-radius: 5px;
  padding: 14px 10px;
  width: 320px;
  outline: none;
  color: #d6d6d6;
  transition:all .2s ease-out;
  .forgetpass {
  position: relative;
  float: right;
  right: 28px;
}

  } 
    
 
  }
`
