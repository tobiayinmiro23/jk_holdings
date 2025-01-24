import React, { useContext } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { UsersContext } from '../context/UserContext'
import avatar from '../assets/7.jpeg'

const Header = () => {
    let userData = useContext(UsersContext)
    const [, , , , , , , , mobile, setmobile] = userData
    return (
        <header className='flex items-center justify-between py-[1rem] px-[1.2rem] max-[398px]:px-[0.7rem] '>
            <div className='bg-[#f1efef] py-[0.34rem] px-[0.5rem]  flex items-center w-[19rem] h-[fit-content] rounded-md max-[536px]:w-[16rem] max-[472px]:w-[15rem] max-[447px]:w-[14rem] max-[425px]:w-[13rem] max-[398px]:w-[12rem] max-[343px]:w-[11.4rem] max-[324px]:w-[10.8rem]'>
                <input type='search' placeholder='Search Property Customer' className='search outline-none py-[0.3rem] w-[97%] bg-transparent ' />
                <SearchOutlinedIcon className='text-[blue] cursor-pointer' />
            </div>
            <div className='flex items-center'>
                <div className='rounded-full  w-[1.8rem]  p-[2px] bg-[#f1efef]  h-[1.9rem]'>
                    <div className='w-[0.36rem] h-[0.36rem] bg-[red] ml-[0.76rem]  rounded-full'></div>
                    <NotificationsOutlinedIcon className='mt-[-0.9rem] cursor-pointer' />
                </div>
                <div className='rounded-full w-[2.07rem] ml-[1.7rem] p-[5px] cursor-pointer bg-[#f1efef] h-[2.37rem] max-[472px]:ml-[1.4rem] max-[425px]:ml-[1.2rem] max-[398px]:w-[1.8rem] max-[398px]:h-[2.07rem] max-[398px]:p-[3px] max-[398px]:ml-[0.68rem]'><img className='rounded-full' src={avatar} alt="" /></div>
                <div className='hidden max-[883px]:block' onClick={() => setmobile(true)}>
                    <MenuOutlinedIcon className='cursor-pointer ml-[1.5rem]  max-[472px]:ml-[1.2rem] max-[425px]:ml-[1rem] max-[398px]:ml-[0.6rem]' />
                </div>
            </div>
        </header>
    )
}

export default Header