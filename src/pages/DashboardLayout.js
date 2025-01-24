import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { SideBar, Header } from '../AllFiles'
import { UsersContext } from '../context/UserContext'

const DashboardLayout = () => {
  let userData = useContext(UsersContext)
  const [, , , , , , , , mobile, setmobile] = userData
  const navigate = useNavigate()


  return (
    <div className='layoutContainer'>
      <div className='layout'>
        <div className={mobile ? "sidebarMobile" : "sidebar"}>
          <SideBar setmobile={setmobile} mobile={mobile} />
        </div>
        <div className='wrapper'>
          <Header setmobile={setmobile} mobile={mobile} />
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default DashboardLayout