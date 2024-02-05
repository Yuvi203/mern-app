import {Router, Route, Routes, useNavigate, Navigate, useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import {gettoken, getusers, login} from "./redux/slices/AuthSlice"
import { lazy, Suspense } from "react"
import Loading from "./components/Loading"
import { SelectisUser, getid, getusersall } from "./redux/slices/ResumeSlice"
import Resumescreen2 from "./screens/Resumescreen2"


const Loginscreen = lazy(()=> import("./screens/LoginScreen"))
const Registerscreen = lazy(()=> import("./screens/RegisterScreen"))
const Homescreen = lazy(()=> import("./screens/HomeScreen"))
const Forgetscreen = lazy(()=> import("./screens/ForgetScreen"))
const Resetscreen = lazy(()=> import("./screens/ResetScreen"))
const Profiles = lazy(()=> import("./screens/Profiles"))
const Pagenotfoundscreen = lazy(()=> import("./screens/404Screen"))
const Userscreen = lazy(()=> import("./screens/User"))
const ResumeScreen = lazy(()=> import("./screens/ResumeScreen"))
const Explorescreen = lazy(()=> import("./screens/ExploteScreen"))
const Successscreen = lazy(()=> import("./screens/Success"))
const PortfolioScreen = lazy(()=> import("./screens/PortfolioScreen"))


const App = () => {
 
  const dispatch = useDispatch()
  const {token, isLoggedin} = useSelector((state)=> state.auth)
  const navigate = useNavigate()
  const isUser = useSelector(SelectisUser)
  const appsigning = localStorage.getItem("_appSigning")
  const data = localStorage.getItem("data")
  const active = localStorage.getItem("active")
  const user_id = localStorage.getItem("id")
  const {ResumeLink} = useSelector((state)=> state.resume)
  const {id} = useParams()
  const [Fileurl, SetFileUrl] = useState("")
  const [users, Setusers] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, Setshow] = useState(false)


  useEffect(()=>{
    const allusers = axios.get("http://localhost:8000/api/getdetailsall").then((res)=>{
      dispatch(getusersall(res.data))
    })
  }, [dispatch])

  useEffect(()=>{
   if(active){  
    navigate(`/user/${user_id}`) 
    console.log(user_id)
   }
   else{
    navigate("/")
   }
  }, [active])

  useEffect(()=>{
   if(appsigning){

    const getToken = async () =>{
      const res = await axios.post("http://localhost:8000/api/auth/access", null)
      dispatch(gettoken({
        ac_token:res.data.ac_token
      }))
    }
    getToken()
   }
  }, [dispatch, isLoggedin])
  useEffect(()=>{
     if(token){
      const getUser = async () =>{
        dispatch(login())
        const res = await axios.get("http://localhost:8000/api/auth/user_info",{
          headers:{Authorization:token}
        })
        dispatch(getusers({
          users:res.data
        }))
      }
      console.log("data", res.data)

      getUser()
     }
  }, [dispatch, token])

  const getreact = async () =>{
    await axios.get("http://localhost:8000/api/getreact",).then((res)=>{
      Setusers(res.data)
      console.log("designers", res.data)
      setLoading(false)
    })
  }
 
  return (
    <div>
       <Suspense fallback={<Loading/>}>
      <Routes>
      {data  ? <>
      <Route path="/" element={<Homescreen/>}/>
      <Route path="/portfolios" element={<Explorescreen users={users} Setusers={Setusers} loading={loading} setLoading={setLoading} show={show} Setshow={Setshow}/>}/>
      <Route path="/profiles" element={<Profiles  users={users} Setusers={Setusers} loading={loading} setLoading={setLoading} show={show} Setshow={Setshow} getreact={getreact}/>} Setusers={Setusers}  />
      <Route path="/portfolio/:id" element={<PortfolioScreen Fileurl={Fileurl} SetFileUrl={SetFileUrl} />}/>
      <Route path="/sucess" element={<Successscreen/>}/>
      <Route path="/updateresume/:id" element={<Resumescreen2/>} Fileurl={Fileurl} SetFileUrl={SetFileUrl}/>
      {active ?  <Route path="/user/:id" element={<Userscreen />}/> :  <Route path="/resume" element={<ResumeScreen Fileurl={Fileurl} SetFileUrl={SetFileUrl}/>}/>}
     </>:<>
      <Route path="/" element={<Loginscreen/>}/>
      <Route path="/register" element={<Registerscreen/>}/>
      <Route path="/forget-pass" element={<Forgetscreen/>}/>
      <Route path="/reset-password" element={<Resetscreen/>}/>
      <Route path="*" element={<Pagenotfoundscreen/>}/>
     </>}
    </Routes> 
    </Suspense>
    </div>
  )
}

export default App

