import React from 'react'
import PieChart from './Charts/PieChart'
import InfoRounded from '@mui/icons-material/InfoRounded'

const RentDue_Analytics = () => {

    return (
        <div>
            <div className='py-[1.8rem] bg-[#f4f1f1] w-[17rem] rounded-lg'>
                <div className='px-[1.2rem] border-b-[1px] border-b-[lightgray]'>
                    <div className='flex items-center justify-between mb-[0.15rem]'>
                        <h1 className='text-[1.45rem] font-semibold '>Rents Due</h1>
                        <InfoRounded className='text-[#8d8686]' />
                    </div>
                    <p className='text-[#534f4fe3] text-[0.94rem] mb-[0.9rem]'>Secondary</p>

                </div>
                <div className='px-[1.2rem]'>
                    <PieChart />
                </div>
                <div className=' px-[1.2rem] flex items-center  flex-wrap mb-[0.8rem]'>
                    <div className='flex items-center flex-wrap mb-[0.4rem] mr-[0.8rem]'>
                        <div className='w-[0.36rem] h-[0.36rem] bg-[red] mr-[0.23rem] rounded-full'></div>
                        <p>Duplex</p>
                    </div>
                    <div className='flex items-center flex-wrap mb-[0.4rem] mr-[0.8rem]'>
                        <div className='w-[0.36rem] h-[0.36rem] bg-[#0088FE] mr-[0.23rem] rounded-full'></div>
                        <p>2 bedroom</p>
                    </div>
                    <div className='flex items-center flex-wrap mb-[0.4rem] mr-[0.8rem]'>
                        <div className='w-[0.36rem] h-[0.36rem] bg-[#FFBB28] mr-[0.23rem] rounded-full'></div>
                        <p>Shop</p>
                    </div>
                    <div className='flex items-center flex-wrap mb-[0.4rem] mr-[0.8rem]'>
                        <div className='w-[0.36rem] h-[0.36rem] bg-[#00C49F] mr-[0.23rem] rounded-full'></div>
                        <p>Self Contained</p>
                    </div>

                    <div className='flex items-center flex-wrap mb-[0.4rem] mr-[0.8rem]'>
                        <div className='w-[0.36rem] h-[0.36rem] bg-[#FF8042] mr-[0.23rem] rounded-full'></div>
                        <p>2 bedroom</p>
                    </div>
                    <div className='flex items-center flex-wrap mb-[0.4rem] mr-[0.8rem]'>
                        <div className='w-[0.36rem] h-[0.36rem] bg-[#358935] mr-[0.23rem] rounded-full'></div>
                        <p>3 bedroom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentDue_Analytics