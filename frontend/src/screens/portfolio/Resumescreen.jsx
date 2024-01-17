import React from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import { useSelector } from 'react-redux'
import SmallTitle from '../../components/SmallTitle'
import { MdBusinessCenter } from "react-icons/md";
import ResumeItem from '../../components/ResumeItem'
import { IoSchoolSharp } from "react-icons/io5";
const Resumescreen = () => {
  const icon = <MdBusinessCenter/>
  const icon2 = <IoSchoolSharp/>
  const {users} = useSelector((state)=> state.resume)
  return (
     <Container>
       <Title title={"My Skills"}/>
       <div className='skills'>
        <li>{users.Skill}</li>
          <li>{users.Skill2}</li>
          <li>{users.Skill3}</li>
          <li>{users.Skill4}</li>
          <li>{users.Skill5}</li>
          <li>{users.Skill6}</li>
          <li>{users.Skill7}</li>
          <li>{users.Skill8}</li>
          <li>{users.Skill9}</li>
          <li>{users.Skill10}</li>
       </div>
       <Title title={"Resume"}/>
       <div className='small-title'>
       <SmallTitle icon={icon} title={"Working Experience"}/>
       </div>
       <div className='resume-content'>
         <ResumeItem year={users.CompanyStartdate} year2={users.CompanyEnddate} title={users.Roll} text={users.Companyname} description={users.ExperienceDescription}/>
         <ResumeItem year={users.CompanyStartdate2} year2={users.CompanyEnddate2} title={users.Roll2} text={users.Companyname2} description={users.ExperienceDescription2}/>
       </div>
      <div className='small-title' style={{marginTop:"4rem"}}>
        <SmallTitle icon={icon2} title={"Educatonal Qualification"}/>
      </div>
      <div className='resume-content'>
        <ResumeItem year={users.CollegeStartdate} year2={users.CollegeEnddate} title={users.Degree} text={users.University} description={users.EducationDescription}/>
        <ResumeItem year={users.CollegeStartdate2} year2={users.CollegeEnddate2} title={users.Degree2} text={users.University2} description={users.EducationDescription2}/>
      </div>
     </Container>
  )
} 

export default Resumescreen

const Container = styled.div`
padding:3rem;
@media screen and (max-width: 642px){
        padding: 4rem;
 }
 @media screen and (max-width: 510px){
        padding: 3rem;
 }
  @media screen and (max-width: 571px){
        padding: 2rem .4rem;
    }
.skills{
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap:1rem;
  padding-top:2rem;
  padding-bottom:3rem;
    li{
    padding-top:1rem;
     text-align:center;
     display:flex;
     align-items:center;
     margin-left:2rem;
     font-size:1rem;
     text-transform:uppercase;
     color:var(--white-color);
    }
}
.small-title{
  padding-top:2rem;
  padding-bottom:3rem;
}
.resume-content{
  border-left: 2px solid var(--border-color);
}
`