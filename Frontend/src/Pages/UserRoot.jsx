import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNav from '../Components/User/UserNavbar'
import UserFoot from '../Components/User/UserFooter'
function UserRoot() {
  return (
    <div>
      <UserNav />
      <Outlet />
      <UserFoot />
    </div>
  )
}

export default UserRoot
