import React, { useContext, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SideBar, Header } from '../AllFiles'
import { UsersContext } from '../context/UserContext'

const DashboardLayout = () => {
  let userData = useContext(UsersContext)
  const [, , , , , , , , mobile, setmobile] = userData

  const scrollRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className='layoutContainer'>
      <div className='layout'>
        <div className={mobile ? "sidebarMobile" : "sidebar"}>
          <SideBar setmobile={setmobile} mobile={mobile} />
        </div>
        <div className='wrapper' ref={scrollRef}>
          <Header setmobile={setmobile} mobile={mobile} />
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default DashboardLayout
