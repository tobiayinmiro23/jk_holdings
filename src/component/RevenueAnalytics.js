import React, { useState } from 'react'
import InfoRounded from '@mui/icons-material/InfoRounded'
import ArrowUpwardOutlined from '@mui/icons-material/ArrowUpwardOutlined';
import BarChart from './Charts/BarChart'

const RevenueAnalytics = () => {
    const [selected, setselected] = useState('Yearly')

    const selectedStyle = 'mr-[2.5rem] cursor-pointer pb-[0.3rem] font-semibold text-[#5b5bf4]  border-b-[3px] border-b-[#5b5bf4]'
    return (
        <div className='mb-[2rem]'>
            <div className='w-[100%] p-[2rem] py-[0.9rem] bg-[white] border-[#eae9e9] border-[1px] rounded-lg max-[817px]:p-[0.66rem]  max-[770px]:pb-[0rem] max-[770px]:pl-[1rem]'>
                <div className='flex items-center justify-between mb-[0.8rem] max-[770px]:mb-[0.2rem] max-[770px]:pr-[0.37rem]'>
                    <h3 className='font-semibold text-[1.3rem] '>Revenue</h3>
                    <div className='flex items-center max-[770px]:justify-between'>
                        <div className='flex items-center ml-[auto] mr-[3rem] max-[770px]:mr-[0rem] max-[770px]:hidden'>
                            <p onClick={() => setselected('Daily')} className={selected === 'Daily' ? selectedStyle : 'mr-[2.5rem] cursor-pointer pb-[0.3rem]'}>Daily</p>
                            <p onClick={() => setselected('Monthly')} className={selected === 'Monthly' ? selectedStyle : 'mr-[2.5rem] cursor-pointer pb-[0.3rem]'}>Monthly</p>
                            <p onClick={() => setselected('Yearly')} className={selected === 'Yearly' ? selectedStyle : 'mr-[2.5rem] cursor-pointer pb-[0.3rem]'}>Yearly</p>
                        </div>
                        <div className='ml-[auto]'><InfoRounded className='text-[#8d8686]' /></div>
                    </div>
                </div>
                <div className='hidden max-[770px]:block max-[770px]:mb-[0.2rem]'>
                    <div className='flex items-center '>
                        <p onClick={() => setselected('Daily')} className={selected === 'Daily' ? selectedStyle : 'mr-[2.5rem] cursor-pointer pb-[0.3rem]'}>Daily</p>
                        <p onClick={() => setselected('Monthly')} className={selected === 'Monthly' ? selectedStyle : 'mr-[2.5rem] cursor-pointer pb-[0.3rem]'}>Monthly</p>
                        <p onClick={() => setselected('Yearly')} className={selected === 'Yearly' ? selectedStyle : 'mr-[2.5rem] cursor-pointer pb-[0.3rem]'}>Yearly</p>
                    </div>
                </div>
                <h2 className='text-[1.35rem] mb-[0.6rem] max-[770px]:mb-[0.3rem]'>NGN2,842,050</h2>
                <div className='flex items-center font-semibold text-[1.55rem] mb-[1rem] max-[770px]:mb-[0.7rem]'>
                    <ArrowUpwardOutlined className='text-[green] text-[0.7rem]' />
                    <p className='text-[#534f4fe3] text-[0.94rem]'><b className='text-[green] font-semibold text-[1.1rem]'>2.1%</b> from last month</p>
                </div>
                <p className='text-[#534f4fe3] text-[0.94rem]'>Rent from 1-22 may 2024</p>
                <div className='mt-[-0.9rem] max-[770px]:mt-[-1.8rem]'>
                    <BarChart />
                </div>
                <div className=' flex items-center mt-[-1.8rem] ml-[2.6rem] max-[770px]:mt-[-1.8rem]'>
                    <div className='flex items-center flex-wrap mb-[0.4rem] mr-[0.8rem]'>
                        <div className='w-[0.36rem] h-[0.36rem] bg-[lightblue] mr-[0.23rem] rounded-full'></div>
                        <p>Duplex</p>
                    </div>
                    <div className='flex items-center flex-wrap mb-[0.4rem] mr-[0.8rem]'>
                        <div className='w-[0.36rem] h-[0.36rem] bg-[aqua] mr-[0.23rem] rounded-full'></div>
                        <p>2 bedroom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueAnalytics