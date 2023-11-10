import styled from 'styled-components'
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react'
import {MdVisibility, MdVisibilityOff} from "react-icons/md"
import { isEmail, isEmpty } from '../helpers/validate'
import axios from 'axios'
import {useDispatch} from "react-redux"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {login} from "../redux/slices/AuthSlice"

const initialState = {
  email:"",
  password:""
}

const LoginScreen = () => {
  const [visible, setVissible] = useState(false)
  const [data, setData] = useState(initialState)
  const { email, password} = data
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const handleChange = (e) =>{
    setData({...data, [e.target.name]:e.target.value})
   }


  const handleClick = () =>{
    setVissible(!visible)
  }
  const Login  = async (e) =>{
     e.preventDefault()
     if(isEmpty(email) || isEmpty(password)){
      return toast("Please fill in all fields.", {
        className: "toast",
        bodyClassName:"toast"
      });
     }
     if(!isEmail(email)){
      return toast("Please enter a valid email address.", {
        className: "toast",
        bodyClassName:"toast"
      });
   }
   try {
        await axios.post("http://localhost:8000/api/auth/signing", {email, password})
        localStorage.setItem("_appSigning", true)
        dispatch(login())
        navigate("/")
      
   } catch (error) {
      toast(error.response.data.msg, {
         className: "toast",
         bodyClassName:"toast"
      })
   }
  }
  return (
    <Container>
      <ToastContainer/>
      <form className='form-container' onSubmit={Login}>
      <h4>Cloud  <span>Portfolio</span></h4>
      <h5>Sign in to your account.</h5>
        <input type="text" name="email" placeholder="Email" onChange={handleChange}/> 
        <div className='pass-con'>
        <input type={visible ? "text":"password"} name="password" placeholder="Passsword" onChange={handleChange}/>
        <div className="svg" onClick={handleClick}>
        {visible ? <MdVisibility/>:<MdVisibilityOff/>}
        </div>
        </div>
        <Link to={"/register"} className="dnthave">Don’t have an account? Sign up</Link>
        <Link to={"/forget-pass"} className="forgetpass">Forget Password?</Link>
        <input type="submit" value="Sign in" className="btn1"/>
      </form>
   
    </Container>
  )
}

export default LoginScreen

const Container = styled.div`
position:relative;
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
  } 
  .pass-con{
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
}
.svg{
  position:absolute;
  right:10%;
  margin-right:10px;
}
@media screen and (min-width:1824px) {
  position:absolute;
  left:50%;
  top:20%;
}
@media screen and (max-width:1224px) {
  position:absolute;
  left:50%;
  top:5%;
  bottom:5%;
} 
@media screen and (max-width:1218px) {
  position:absolute;
  top:25%;
 
} 
@media screen and (max-width:1818px) {
  position:absolute;
  top:5%;
  left:50%;
  bottom:15%;
} 
@media screen and (max-width:622px) {
  position:absolute;
  top:25%;
  bottom:5%;
}
@media screen and (max-width:1250px) {
  position:absolute;
  top:25%;
  bottom:5%;
}

`
