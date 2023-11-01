import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ActivateScreen = () => {
    const {activation_token} = useParams()
    useEffect(()=>{
    if(activation_token){
        const activateUser = async () =>{
            try {
                const res = await axios.post("http://localhost:8000/api/auth/activatation",{
                    activation_token
                })
                alert("activate succesfully")
            } catch (error) {
               console.log(error)
            }
        }
        activateUser()
    }
    }, [activation_token])
  return (
    <div>
        <p>
            ready to login ? <Link to={"/"}><span>Here</span></Link>
        </p>
    </div>
  )
}

export default ActivateScreen