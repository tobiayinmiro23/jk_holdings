import React from 'react'
import { Button } from '../AllFiles'
import BgImg from '../assets/5172658.jpg'


const PasswordResetSuccessfull = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className="bg-img w-[30vw] h-[100vh] max-[973px]:hidden"><img src={BgImg} alt="background img" /></div>
            <div className='w-[70vw] h-[100vh] max-[973px]:w-[100vw]'>
                <div className='border-[1px] border-[lightgray] w-[30rem] m-[auto] mt-[9rem] py-[1.65rem] px-[2.1rem] pb-[2rem] rounded-2xl max-[493px]:w-[90%] max-[405px]:px-[1.3rem] max-[385px]:pt-[1.05rem]'>
                    <div className="congrats-img w-[8rem] h-[8rem] m-[auto]"><img src="/image/congratulations.jpeg" alt="" /></div>
                    <p className='text-[grey] mb-[2.2rem] mt-[1rem] text-center'>Your password has been reset successfully</p>
                    <div className='w-[100%] m-[auto]'><Button name='Proceed to Login' /></div>
                </div>
            </div>
        </div>
    )
}

export default PasswordResetSuccessfull
