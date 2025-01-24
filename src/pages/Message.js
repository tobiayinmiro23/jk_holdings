import React from 'react'
import Img from '../assets/undraw_under-construction_c2y1.png'

const Message = () => {
    return (
        <div className='w-[70%] m-[auto] mt-[5rem] max-[870px]:w-[90%] max-[400px]:w-[100%]'>
            <div className='w-[60%] m-[auto] max-[700px]:w-[80%] max-[500px]:w-[98%]'><img src={Img} alt="" /></div>
            <h1 style={{ fontFamily: "monospace" }} className='text-[1.8rem] text-center max-[870px]:text-[1.6rem] max-[400px]:text-[1.35rem]'>This page is currently under maintenance</h1>
        </div>
    )
}

export default Message