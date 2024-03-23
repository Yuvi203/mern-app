import React, { useState } from 'react' 
import Personaldetails2 from '../components/updateresume/Personaldetails2'
import Education2 from '../components/updateresume/Education2'
import Skill22 from '../components/updateresume/Skill22'
import Experience2 from '../components/updateresume/Experience2'
import Resume2 from '../components/updateresume/Resume2'
import { initialState } from '../helpers/initialState'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Additional2 from '../components/updateresume/Additional2'
import { useNavigate } from 'react-router-dom'

const Resumescreen2 = () => {
    const [page, setPage] = useState(0)
    const [formdata, Setformdata] = useState(initialState)
    const [Fileurl, SetFileurl] = useState("")
    const [profile, Setprofile] = useState("")
    const navigate = useNavigate()
    const {users} = useSelector((state)=> state.resume)
    const {Firstname, Lastname, Email, Profession, Age, MobileNo, PersonalDescription, CollegeStartdate, CollegeEnddate, Degree, University, EducationDescription, CollegeStartdate2, CollegeEnddate2, Degree2, University2, EducationDescription2, Skill, Skill2, Skill3, Skill4, Skill5, Skill6, Skill7, Skill8, Skill9, Skill10, CompanyStartdate, CompanyEnddate, Roll, Companyname, ExperienceDescription, CompanyStartdate2, CompanyEnddate2, Roll2, Companyname2, ExperienceDescription2, Title, Link, Description, Title2, Link2, Description2, Address1, Address2, Location, Languages, Sociallink1, Sociallink2, Sociallink3} = formdata

    const handleSubmit = async (e) =>{
      try {
        e.preventDefault()
        await axios.put(`http://localhost:8000/api/updateresume/${users._id}`, {profile, Firstname, Lastname, Email, Profession, Age, MobileNo, PersonalDescription,CollegeStartdate, CollegeEnddate, Degree, University, EducationDescription, CollegeStartdate2, CollegeEnddate2, Degree2, University2,EducationDescription2, Skill,Skill2, Skill3, Skill4, Skill5, Skill6, Skill7, Skill8, Skill9, Skill10, CompanyStartdate, CompanyEnddate, Roll, Companyname, ExperienceDescription, CompanyStartdate2, CompanyEnddate2, Roll2, Companyname2, ExperienceDescription2, Fileurl , Address1, Address2, Location, Languages, Sociallink1, Sociallink2, Sociallink3}).then((res)=>{
        toast(res.data, {
          className: "toast",
          bodyClassName: "toast",
        });
        })
      
      } catch (error) {
        toast(error.response.data.msg, {
          className: "toast",
          bodyClassName:"toast"
       })
      }
      
    }
    

   const PageDisplay = () =>{
    if(page === 0){
        return <Personaldetails2 page={page} setPage={setPage} formdata={formdata}  Setformdata={Setformdata} profile={profile} Setprofile={Setprofile}/>
      }
      else if(page === 1){
        return <Education2  page={page} setPage={setPage} formdata={formdata}  Setformdata={Setformdata}/>
      }
      else if(page === 2){
        return <Skill22 page={page} setPage={setPage} formdata={formdata}  Setformdata={Setformdata}/>
      }
      else if(page === 3){
        return <Experience2  page={page} setPage={setPage} formdata={formdata}  Setformdata={Setformdata}/>
      }
      else if(page === 4){
        return <Resume2  page={page} setPage={setPage} formdata={formdata}  Setformdata={Setformdata} Fileurl={Fileurl} SetFileurl={SetFileurl}/>
      }
      else if(page === 5){
       return <Additional2 page={page} setPage={setPage} formdata={formdata}  Setformdata={Setformdata} handleSubmit={handleSubmit}/>
  }
}
  return (
    <div>
        <ToastContainer/>
         {PageDisplay()}
    </div>
  )
}

export default Resumescreen2