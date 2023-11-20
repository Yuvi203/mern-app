import React, { useState } from 'react'
import PersonalDetails from '../components/PersonalDetails'
import Education from '../components/Education'
import Experiences from '../components/Experiences'
import Project from '../components/Project'
import Skills from '../components/Skills'

const ResumeScreen = () => {
  const [page, setPage] = useState(0)
  const PageDisplay = () =>{
    if(page === 0){
      return <PersonalDetails page={page} setPage={setPage}/>
    }
    else if(page === 1){
      return <Education  page={page} setPage={setPage}/>
    }
    else if(page === 2){
      return <Skills page={page} setPage={setPage}/>
    }
    else if(page === 3){
      return <Experiences  page={page} setPage={setPage}/>
    }
    else if(page === 4){
      return <Project  page={page} setPage={setPage}/>
    }
  }
  return (
    <div>
     {PageDisplay()}
    </div>
  )
}

export default ResumeScreen