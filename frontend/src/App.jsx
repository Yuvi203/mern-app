import {Router, Route, Routes} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import {gettoken, getusers, login} from "./redux/slices/AuthSlice"
import { lazy, Suspense } from "react"
import Loading from "./components/Loading"
import ExploteScreen from "./screens/ExploteScreen"
import ResumeScreen from "./screens/ResumeScreen"

const Loginscreen = lazy(()=> import("./screens/LoginScreen"))
const Registerscreen = lazy(()=> import("./screens/RegisterScreen"))
const Homescreen = lazy(()=> import("./screens/HomeScreen"))
const Forgetscreen = lazy(()=> import("./screens/ForgetScreen"))
const Resetscreen = lazy(()=> import("./screens/ResetScreen"))
const Pagenotfoundscreen = lazy(()=> import("./screens/404Screen"))




const App = () => {
 
  const dispatch = useDispatch()
  const {users, token, isLoggedin} = useSelector((state)=> state.auth)
  useEffect(()=>{
   const appsigning = localStorage.getItem("_appSigning")
   if(appsigning){
    const getToken = async () =>{
      const res = await axios.post("http://localhost:3000/api/auth/access", null)
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
        const res = await axios.get("http://localhost:3000/api/auth/user_info",{
          headers:{Authorization:token}
        })
        dispatch(getusers({
          users:res.data
        }))
      }
      getUser()
     }
  }, [dispatch, token])
  return (
    <div>
       <Suspense fallback={<Loading/>}>
      <Routes>
     
      {isLoggedin ? <>
        <Route path="/" element={<Homescreen/>}/>
        <Route path="/portfolios" element={<ExploteScreen/>}/>
        <Route path="/resume" element={<ResumeScreen/>}/>
       </> 
       :<>
        <Route path="/" element={<Loginscreen/>}/>
        <Route path="/register" element={<Registerscreen/>}/>
     <Route path="/forget-pass" element={<Forgetscreen/>}/>
     <Route path="/reset-password" element={<Resetscreen/>}/>
       </>
      }
      <Route path="*" element={<Pagenotfoundscreen/>}/>
   
    </Routes> 
    </Suspense>
  
   
    </div>
  )
}

export default App