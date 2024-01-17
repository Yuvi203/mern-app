import {Router, Route, Routes, useNavigate, Navigate, useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import {gettoken, getusers, login} from "./redux/slices/AuthSlice"
import { lazy, Suspense } from "react"
import Loading from "./components/Loading"
import { SelectisUser, getid, getusersall } from "./redux/slices/ResumeSlice"
import Sidebar  from "./components/Sidebar"

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
  
  const {users} = useSelector((state)=> state.resume)
  const {id} = useParams()

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

  return (
    <div>
       <Suspense fallback={<Loading/>}>
      <Routes>
      {data  ? <>
      <Route path="/" element={<Homescreen/>}/>
      <Route path="/portfolios" element={<Explorescreen/>}/>
      <Route path="/profiles" element={<Profiles/>}/>
      <Route path="/portfolio/:id" element={<PortfolioScreen/>}/>
      <Route path="/sucess" element={<Successscreen/>}/>
      {active ?  <Route path="/user/:id" element={<Userscreen/>}/> :  <Route path="/resume" element={<ResumeScreen/>}/>}
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

