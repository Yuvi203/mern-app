import React, { useEffect, useState } from 'react'
import PersonalDetails from '../components/PersonalDetails'
import Education from '../components/Education'
import Experiences from '../components/Experiences'
import Project from '../components/Project'
import Skills from '../components/Skills'
import axios from 'axios'
import {ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { isEmpty } from '../helpers/validate'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getusersall } from '../redux/slices/ResumeSlice'




const initialState = {
    Firstname:"",
    Lastname:"",
    Email:"",
    Profession:"",
    PersonalDescription:"",
    Age:"",
    MobileNo:"",
    CollegeStartdate:"",
    CollegeEnddate:"",
    Degree:"",
    University:"",
   EducationDescription:"",
    Skill:"",
    Skill2:"",
    Skill3:"",
    Skill4:"",
    AdditionalSkills:[],
    Percentage:"",
    Percentage2:"",
    Percentage3:"",
    Percentage4:"",
    CompanyStartdate:"",
    CompanyEnddate:"",
    Roll:"",
    Companyname:"",
    ExperienceDescription:"",
    Title:"",
    Link:"",
    Description:"",
}

const ResumeScreen = () => {
  const [page, setPage] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formdata, Setformdata] = useState(initialState)
  const [sucess, setSucess] = useState(false)
  const {Firstname, Lastname, Email, Profession, Age, MobileNo, PersonalDescription, CollegeStartdate, CollegeEnddate, Degree, University, EducationDescription, Skill, Skill2, Skill3, Skill4, AdditionalSkills, Percentage, Percentage2, Percentage3, Percentage4, CompanyStartdate, CompanyEnddate, Roll, Companyname, ExperienceDescription, Title, Link, Description} = formdata
 


  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(isEmpty(formdata)){
      return toast("Please fill in all fields.", {
        className: "toast",
        bodyClassName:"toast"
      });
    }
    try {
      await axios.post("http://localhost:8000/api/resume", {Firstname, Lastname, Email, Profession, Age, MobileNo, PersonalDescription, CollegeStartdate, CollegeEnddate, Degree, University, EducationDescription, Skill, Skill2, Skill3, Skill4,AdditionalSkills, Percentage,Percentage2, Percentage3, Percentage4, CompanyStartdate, CompanyEnddate, Roll, Companyname, ExperienceDescription, Title, Link, Description})
     .then((res)=>{
      localStorage.setItem("active", res.data.activation_token)
      localStorage.setItem("id", res.data.id)
      getUsers()
      navigate("/sucess")
     })
    } catch (error) {
      toast(error.response.data.msg, {
        className: "toast",
        bodyClassName:"toast"
     })
  
    }
  }
  const getUsers = async () =>{
    const allusers = await axios.get("http://localhost:8000/api/getdetailsall").then((res)=>{
      dispatch(getusersall(res.data))
    })
  }
  const PageDisplay = () =>{
    if(page === 0){
      return <PersonalDetails page={page} setPage={setPage} formdata={formdata} Setformdata={Setformdata}/>
    }
    else if(page === 1){
      return <Education  page={page} setPage={setPage} formdata={formdata} Setformdata={Setformdata}/>
    }
    else if(page === 2){
      return <Skills page={page} setPage={setPage} formdata={formdata} Setformdata={Setformdata}/>
    }
    else if(page === 3){
      return <Experiences  page={page} setPage={setPage} formdata={formdata} Setformdata={Setformdata}/>
    }
    else if(page === 4){
      return <Project  page={page} setPage={setPage} formdata={formdata} Setformdata={Setformdata} handleSubmit={handleSubmit}/>
    }

  }
  return (
    <div>
        <ToastContainer/>
     {PageDisplay()}
{/* {titles[page]}

     <button 
 
     onClick={()=>{
      setPage((curr) => curr-1)
     }}
     >prev</button>
     <button 
     onClick={(e)=>{
       if(page === titles.length-1){
        alert("submitted")
        handleSubmit(e)
        console.log(formdata)
       } else{
        setPage((curr)=> curr+1)
       }
     }}
     >{page === titles.length - 1? "Submit": "Next"}</button> */}
    </div>
  )
}

export default ResumeScreen