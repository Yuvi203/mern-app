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
import { initialState } from '../helpers/initialState'
import Addition from '../components/Addition'

const ResumeScreen = () => {
  const [page, setPage] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formdata, Setformdata] = useState(initialState)
  const [Profile, SetProfile] = useState("")



  const {Firstname, Lastname, Email, Profession, Age, MobileNo, PersonalDescription, CollegeStartdate, CollegeEnddate, Degree, University, EducationDescription, CollegeStartdate2, CollegeEnddate2, Degree2, University2, EducationDescription2, Skill, Skill2, Skill3, Skill4, Skill5, Skill6, Skill7, Skill8, Skill9, Skill10, CompanyStartdate, CompanyEnddate, Roll, Companyname, ExperienceDescription, CompanyStartdate2, CompanyEnddate2, Roll2, Companyname2, ExperienceDescription2, Title, Link, Description, Title2, Link2, Description2, Address1, Address2, Location, Languages, Sociallink1, Sociallink2, Sociallink3} = formdata
 
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(isEmpty(formdata)){
      return toast("Please fill in all fields.", {
        className: "toast",
        bodyClassName:"toast"
      });
    }
    try {
      await axios.post("http://localhost:8000/api/resume", {Profile, Firstname, Lastname, Email, Profession, Age, MobileNo, PersonalDescription, CollegeStartdate, CollegeEnddate, Degree, University, EducationDescription, CollegeStartdate2, CollegeEnddate2, Degree2, University2,EducationDescription2, Skill,Skill2, Skill3, Skill4, Skill5, Skill6, Skill7, Skill8, Skill9, Skill10, CompanyStartdate, CompanyEnddate, Roll, Companyname, ExperienceDescription, CompanyStartdate2, CompanyEnddate2, Roll2, Companyname2, ExperienceDescription2, Title, Link, Description, Title2, Link2, Description2, Address1, Address2, Location, Languages, Sociallink1, Sociallink2, Sociallink3})
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
      return <PersonalDetails page={page} setPage={setPage} formdata={formdata} Setformdata={Setformdata} SetProfile={SetProfile}/>
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
      return <Project  page={page} setPage={setPage} formdata={formdata} Setformdata={Setformdata}/>
    }
    else if(page === 5){
     return <Addition setPage={setPage} formdata={formdata} Setformdata={Setformdata} handleSubmit={handleSubmit} />
    }
  }

  return (
    <div>
        <ToastContainer/>
     {PageDisplay()}
    </div>
  )
}

export default ResumeScreen