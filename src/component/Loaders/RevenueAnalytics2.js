import React, { useState } from 'react'

const RevenueAnalytics = () => {
    const revenueData = [
        {
            id: 1,
            text: 'Daily'
        },
        {
            id: 1,
            text: 'Daily'
        },
        {
            id: 2,
            text: 'Monthly'
        },
        {
            id: 3,
            text: 'Yearly'
        },
    ]

    const selectedStyle = 'mr-[2.5rem] cursor-pointer pb-[0.3rem] font-semibold text-[#5b5bf4]  border-b-[3px] border-b-[#5b5bf4]'
    return (
        <div className=''>
            <div className='w-[100%] px-[2rem] py-[1.1rem] bg-[white] border-[#eae9e9] border-[1px] rounded-lg max-[770px]:pl-[1rem]'>
                <div className='flex items-center justify-between mb-[0.8rem] max-[770px]:mb-[0.2rem] max-[770px]:pr-[0.37rem]'>
                    <h3 className='text-[1.3rem] mb-[0.7rem] loader w-[fit-content] rounded-sm text-transparent h-[1.5rem]'>Revenue</h3>
                    <div className='loader w-[7.2rem] h-[2.7rem] rounded-lg max-[633px]:w-[5.8rem] max-[633px]:h-[2.2rem] max-[350px]:w-[5.1rem] max-[359px]:h-[2rem]'></div>
                </div>
                <h2 className='loader w-[fit-content] rounded-sm text-transparent h-[1.5rem] text-[1.35rem] mb-[1.5rem] max-[770px]:mb-[0.3rem]'>NGN2,842,050</h2>
                <div className=' mb-[1.4rem] max-[770px]:mb-[0.7rem]'>
                    <p className='loader w-[fit-content] rounded-sm text-transparent h-[1rem] text-[0.94rem]'> from last month</p>
                </div>
                <p className='loader w-[fit-content] rounded-sm text-transparent h-[1rem] text-[0.94rem] mb-[1.3rem]'>Rent from 1-22 may 2024</p>
                <div className='loader  w-[93%] rounded-md h-[14.5rem]'>
                </div>
                <div className=' flex items-center mt-[1.8rem] ml-[0.3rem] '>
                    <p className='loader w-[fit-content] rounded-sm text-transparent h-[1rem] mr-[1.2rem]'>bed rooms</p>
                    <p className='loader w-[fit-content] rounded-sm text-transparent h-[1rem] '>bed rooms</p>
                </div>
            </div>
        </div>
    )
}

export default RevenueAnalytics