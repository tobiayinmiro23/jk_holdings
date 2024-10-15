import React, { useContext } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { UsersContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';


const SideBar = () => {
    let userData = useContext(UsersContext)
    const [, , , , , , , , mobile, setmobile] = userData
    console.log(mobile)
    const navigate = useNavigate()
    let activeroute = window.location.pathname.split('/')[2]
    let sideBarStyle1 = 'pl-[1.9rem] flex items-center  mb-[1.1rem] py-[1rem] cursor-pointer hover:bg-slate-100 hover:text-[darkblue] max-[1415px]:pl-[0.6rem]'
    let sideBarStyle2 = sideBarStyle1 + ' text-[darkblue] bg-slate-100'

    const handleNavigation = (data) => {
        navigate(`/DashBoard/${data}`)
        setmobile(false)
    }
    return (
        <div className='bg-white'>
            <div className='border-[1px] px-[1.7rem]  py-[0.6rem] border-r-[#e9e5e5] w-[100%] h-[100vh]'>
                <div className='flex items-center justify-between mb-[4.6rem] '>
                    <p></p>
                    <h1 className='text-[darkblue] font-semibold text-[2rem] text-center max-[1036px]:text-[1.8rem] max-[956px]:text-[1.6rem]'>JK Holdings</h1>
                    <div>
                        <div className='hidden max-[883px]:block' onClick={() => setmobile(!mobile)}>
                            <CloseOutlinedIcon className='cursor-pointer ml-[1.7rem]' />
                        </div>
                    </div>
                </div>
                <div className='pl-[0rem]'>
                    <div onClick={(e) => handleNavigation('')} className={activeroute === '' ? sideBarStyle2 : sideBarStyle1}>
                        <AppsOutlinedIcon className='mr-[1.2rem] max-[950px]:mr-[0.8rem]' />
                        <p>Dashboard</p>
                    </div>
                    <div onClick={(e) => handleNavigation('Property')} className={activeroute === 'Property' ? sideBarStyle2 : sideBarStyle1}>
                        <MapsHomeWorkOutlinedIcon className='mr-[1.2rem] max-[950px]:mr-[0.8rem]' />
                        <p className=''>Properties</p>
                    </div>
                    <div onClick={(e) => handleNavigation('Tenants')} className={activeroute === 'Tenants' ? sideBarStyle2 : sideBarStyle1}>
                        {/* <div onClick={(e) => setmobile(false)} className={activeroute === 'Tenants' ? sideBarStyle2 : sideBarStyle1}> */}
                        <GroupsOutlinedIcon className='mr-[1.2rem] max-[950px]:mr-[0.8rem]' />
                        <p className=''>Tenants</p>
                    </div>
                    <div onClick={(e) => handleNavigation('Analytics')} className={activeroute === 'Analytics' ? sideBarStyle2 : sideBarStyle1}>
                        <CreditCardOutlinedIcon className='mr-[1.2rem] max-[950px]:mr-[0.8rem]' />
                        <p className=''>Analytics</p>
                    </div>
                    <div onClick={(e) => handleNavigation('Message')} className={activeroute === 'm' ? sideBarStyle2 : sideBarStyle1}>
                        <ChatOutlinedIcon className='mr-[1.2rem] max-[950px]:mr-[0.8rem]' />
                        <p className=''>Message</p>
                        <div className='p-[0rem] w-[1.4rem] h-[1.4rem] text-center ml-[3rem] rounded-full bg-[red] text-[0.9rem] text-white max-[1538px]:ml-[1.4rem] max-[1036px]:ml-[0.77rem] max-[1036px]:h-[1.3rem] max-[1036px]:w-[1.3rem]  max-[980px]:h-[1.178rem] max-[980px]:w-[1.178rem] max-[922px]:ml-[0.4rem] max-[883px]:ml-[1.1rem]'>2</div>
                    </div>
                    <div onClick={(e) => handleNavigation('Logout')} className={activeroute === 'm' ? sideBarStyle2 : sideBarStyle1}>
                        <LogoutOutlinedIcon className='mr-[1.2rem] max-[950px]:mr-[0.8rem]' />
                        <p className=''>Logout</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar