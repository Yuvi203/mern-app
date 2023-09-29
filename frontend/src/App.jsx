import {Router, Route, Routes} from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from "./screens/HomeScreen"

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/register" element={<RegisterScreen/>}/>
    </Routes>
    </div>
  )
}

export default App