import React from 'react'
import { Link } from 'react-router-dom'
import BgImg from '../assets/5172658.jpg'

const Index = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className="bg-img w-[30vw] h-[100vh] max-[973px]:hidden"><img src={BgImg} alt="background img" /></div>
            <div className='w-[70vw] h-[100vh] max-[973px]:w-[100vw]'>
                <p className='text-end mt-[0.6rem] mr-[2rem]'>Having troubles? <b className='text-[orange] cursor-pointer '><Link to='/'>Get Help</Link></b></p>
                <div className=' w-[30rem] m-[auto] mt-[5rem] max-[493px]:w-[90%]'>
                    <div className="text-center">
                        <h1 className='text-[darkblue] font-semibold text-[2rem] mb-[0.3rem]  max-[385px]:mb-[0.1rem] max-[438px]:text-[1.82rem] max-[376px]:text-[1.65rem]  max-[325px]:text-[1.5rem]'>Welcome to JK holdings</h1>
                        <p className='text-[grey] mb-[2rem]'>Take charge of your properties</p>
                    </div>
                    <div className='border-[1px] border-[lightgray] p-[1.1rem] mb-[1rem]' >
                        <h3 className='text-[1.3rem] font-semibold'>Sign up as Tenant</h3>
                        <p className='text-[grey] mb-[0.2rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsa rem harum?</p>
                    </div>
                    <div className='border-[1px] border-[lightgray] p-[1.1rem]' >
                        <h3 className='text-[1.3rem] font-semibold'>Sign up as Landlord</h3>
                        <p className='text-[grey] mb-[0.2rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsa rem harum?</p>
                    </div>
                </div>
                <p className='loginTxt text-center mt-[1rem]'>Already have an account? <b className='text-[orange] cursor-pointer '><Link to='/Login'>Login</Link></b></p>
            </div>
        </div>
    )
}

export default Index