import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { isEmail, isEmpty, isLength, isMatch } from "../helpers/validate"
import axios from "axios"
import {MdVisibility, MdVisibilityOff} from "react-icons/md"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  name:"",
  email:"",
  password:"",
  cf_password:""
}

const RegisterScreen = () => {
  const navigate = useNavigate()
  const [visible, setVissible] = useState(false)
  const [data, setData] = useState(initialState)
  const {name, email, password, cf_password} = data
   
  const handleChange = (e) =>{
   setData({...data, [e.target.name]:e.target.value})
  }

  const handleClick = () =>{
    setVissible(!visible)
  }

  const register = async (e) =>{
     e.preventDefault()

     if(isEmpty(name) || isEmpty(password)){
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
     if(isLength(password)){
      return toast("Password must be at least 6 characters.", {
        className: "toast",
        bodyClassName: "toast",
      });
     }
     if(!isMatch(password, cf_password)){
      return toast("Password did not match.", {
        className: "toast",
        bodyClassName: "toast",
      });
     }
     try {
       const res = await axios.post("http://localhost:8000/api/auth/register", {
        name,
        email,
        password
       })
       toast(res.data.msg, {
        className: "toast",
        bodyClassName: "toast",
      });
       navigate("/")
     } catch (error) {
      toast(error.response.data.msg, {
        className: "toast",
        bodyClassName: "toast",
      });
     }
     handleReset()
    
  }
 
  const handleReset = () =>{
    Array.from(document.querySelectorAll("input").forEach((input)=>{
      input.value = ""
    }))
    setData({...data, name:"", email:"", password:"", cf_password:""})
  }

  return (
    <>
     <ToastContainer />
     <Container>
       <form className='form-container' onSubmit={register}>
      {/* <h4>Cloud  <span>Portfolio</span></h4>
      <h5>Register your account.</h5> */}
        <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
        <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
        <div className="pass-con">
        <input type={visible ? "text":"password"} name="password" placeholder="Passsword" onChange={handleChange} />
        <div className="svg" onClick={handleClick}>
        {visible ? <MdVisibility/>:<MdVisibilityOff/>}
        </div>
        </div>
        <div className="pass-con">
        <input type={visible ? "text":"password"} name="cf_password" placeholder="Confirm password" onChange={handleChange}/>
        <div className="svg" onClick={handleClick}>
        {visible ? <MdVisibility/>:<MdVisibilityOff/>}
        </div>
        </div>
        <button>Register</button>
      </form>
     </Container>
     </>
  )
}

export default RegisterScreen

const Container = styled.div`
display:flex;
flex-direction:column;
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

.form-container{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

}
.pass-con{
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
}

.svg{
  position:absolute;
  right:0;
  margin-right:10px;
}

  button{
  border:0;
  background: #7f5feb;
  color: #dfdeee;
  border-radius: 100px;
  font-size: 16px;
  width: 340px;
  height: 49px;
  cursor:pointer;
  :hover{
    background: #5d33e6;
  }
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