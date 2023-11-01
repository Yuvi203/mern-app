import {Router, Route, Routes} from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from "./screens/HomeScreen"
import ActivateScreen from "./screens/ActivateScreen"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import {gettoken, getusers, login} from "./redux/slices/AuthSlice"
import ForgetScreen from "./screens/ForgetScreen"
import ResetScreen from "./screens/ResetScreen"

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
    <Routes>
      {isLoggedin ?   <Route path="/" element={<HomeScreen users={users}/>}/> :<>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/register" element={<RegisterScreen/>}/>
     <Route path="/activation/:activation_token" element={<ActivateScreen/>}/>
     <Route path="/forget-pass" element={<ForgetScreen/>}/>
     <Route path="/reset-password" element={<ResetScreen/>}/>
      </> }
     
     
    </Routes> 

    </div>
  )
}

export default App