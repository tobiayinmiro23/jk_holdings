import React from 'react'
import { Button, Input } from '../AllFiles'
import { Link } from 'react-router-dom'
import BgImg from '../assets/alexey-aladashvili-IMnQjDu1e5I-unsplash.webp'
const Login = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className="bg-img w-[30vw] h-[100vh] max-[973px]:hidden"><img src={BgImg} alt="background img" /></div>
            <div className='w-[70vw] h-[100vh] max-[973px]:w-[100vw]'>
                <div className='border-[1px] border-[lightgray] w-[30rem] m-[auto] mt-[9rem] py-[1.65rem] px-[2.1rem] pb-[2rem] rounded-2xl max-[493px]:w-[90%] max-[405px]:px-[1.3rem] max-[385px]:pt-[1.05rem] '>
                    <h1 className='text-[darkblue] font-semibold text-[2rem] mb-[0.3rem]  max-[385px]:mb-[0.1rem] max-[438px]:text-[1.82rem] max-[376px]:text-[1.65rem] max-[346px]:text-[1.45rem] '>Login to your Account</h1>
                    <p className='text-[grey] mb-[2.2rem]'>Take charge of your properties</p>
                    <Input name='Email' mb='1.5rem' type='email' />
                    <Input name='Password' mb='1.1rem' type='password' />
                    <p className='loginxt text-center mb-[0.8rem]'>Forgot password ? <span className='text-[orange] cursor-pointer '><Link to={'/ForgotPassword'}>reset password</Link></span></p>
                    <Link to='/DashBoard'><div className='w-[100%] m-[auto]'><Button name='Login' /></div></Link>

                </div>
                <p className='loginTxt text-center mt-[0.6rem]'>Dont have an account? <b className='text-[orange] cursor-pointer '><Link to={'/'}>Sign Up</Link></b></p>
            </div>
        </div>
    )
}


export default Login
