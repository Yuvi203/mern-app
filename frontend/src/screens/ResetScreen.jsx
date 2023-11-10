import React, { useState } from 'react'
import axios from "axios"
import {MdVisibility, MdVisibilityOff} from "react-icons/md"
import styled from "styled-components"
import { isEmpty, isLength, isMatch } from '../helpers/validate'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    password:"",
    cf_password:""
  }

const ResetScreen = () => {
    const token = localStorage.getItem("data")
    const [visible, setVissible] = useState(false)
    const [data, setData] = useState(initialState)
    const {password, cf_password} = data

    const handleChange = (e) =>{
        setData({...data, [e.target.name]:e.target.value})
       }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
        setData({ ...data, password: "", cf_password: "" });
      };
       

    const handleClick = () =>{
        setVissible(!visible)
      }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(isEmpty(password) || isEmpty(cf_password)){
          return toast("Please fill in all fields.", {
            className: "toast",
            bodyClassName: "toast",
          });
        }
        if (isLength(password)){
          return toast("Password must be at least 6 characters.", {
            className: "toast",
            bodyClassName: "toast",
          });
        }
        if(!isMatch(password, cf_password)){
          return toast("Password did not match", {
            className: "toast",
            bodyClassName: "toast",
          });
        }
        try {
            await axios.post("http://localhost:8000/api/auth/reset_pass", {
                password
            }, {
                headers:{Authorization:token}
            })
            handleReset()
            return toast("Password was successfully changed 🤗", {
              className: "toast",
              bodyClassName: "toast",
            });
        } catch (error) {
          toast(error.response.data.msg, {
            className: "toast",
            bodyClassName: "toast",
          });
        }
        console.log(token)
    }  
  return (
    <>
     <ToastContainer/>
    <Container>
        <form className='form-container' onSubmit={handleSubmit}>
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
        <button type='submit'>Submit</button>
        </form>
    </Container>
    </>
  )
}

export default ResetScreen

const Container = styled.div`
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
    background: #7f5feb;
    color: #dfdeee;
    border-radius: 100px;
    border:0;
    width: 340px;
    height: 49px;
    font-size: 16px;
    left: 8%;
  transition: 0.3s;
  cursor: pointer;
  :hover{
    background: #5d33e6;
  }
}
`
