import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, PopUpMessageWithAutoCancel } from '../AllFiles'
import BgImg from '../assets/alexey-aladashvili-IMnQjDu1e5I-unsplash.jpg'
import { displayPopUpMessage, cancelPopUP } from '../helperFunction/popUp';


const SignUp = () => {
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('error')

    const handleButton = () => {
        displayPopUpMessage('success', setpopUpMsg, setpopUpType, setdisplayPopUp, true)
        cancelPopUP(setdisplayPopUp, 500)
    }
    return (
        <div className='flex items-center justify-center '>
            <div className="bg-img w-[30vw] h-[100vh] max-[973px]:hidden"><img src={BgImg} alt="background img" /></div>
            <div className='w-[70vw] h-[100vh] max-[973px]:w-[100vw]'>
                <div className='border-[1px] border-[lightgray] w-[30rem] m-[auto] mt-[6rem] py-[1.65rem] px-[2.1rem] pb-[2rem] rounded-2xl max-[493px]:w-[90%] max-[405px]:px-[1.3rem] max-[385px]:pt-[1.05rem]'>
                    <h1 className='text-[darkblue] font-semibold text-[2rem] mb-[0.3rem]  max-[385px]:mb-[0.1rem] max-[385px]:text-[1.82rem]'>Create an Account</h1>
                    <p className='text-[grey] mb-[2.2rem]'>Take charge of your properties</p>
                    <Input name='Full name' mb='1.5rem' type='text' />
                    <Input name='User name' mb='1.5rem' type='text' />
                    <Input name='Email' mb='1.5rem' type='email' />
                    <Input name='Password' mb='1.5rem' type='password' />
                    <Link to='/Dashboard'><div className='w-[100%] m-[auto]' ><Button name='Sign up' /></div></Link>
                </div>
                <p className='loginTxt text-center mt-[0.6rem]'>Already have an account? <b className='text-[orange] cursor-pointer '><Link to={'/Login'}>Login</Link></b></p>
            </div>
            <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />

        </div>
    )
}

export default SignUp