import React from 'react'
import { useSelector } from 'react-redux'

const PortfolioScreen = () => {
    const {users} = useSelector((state)=> state.resume)
  return (
    <div>
   PortfolioScreen
   {users.Firstname}
    </div>
  )
}

export default PortfolioScreen