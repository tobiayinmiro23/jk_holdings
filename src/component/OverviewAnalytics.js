import React from 'react'
import LineChart from './Charts/LineChart'
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import ArrowUpwardOutlined from '@mui/icons-material/ArrowUpwardOutlined';

const OverviewAnalytics = () => {
    return (
        <div>
            <div className='w-[100%] px-[2rem] pb-[0rem] pt-[0.6rem] bg-[white] border-[#eae9e9] border-[1px] rounded-lg max-[817px]:px-[0.66rem]'>
                <h3 className='font-semibold text-[1.3rem] mb-[0.8rem]'>Overview</h3>
                <div className='flex items-center justify-between mb-[-1.4rem]'>
                    <div className='flex items-center'>
                        <div className='mr-[0.6rem]  bg-[#fb923c] rounded-lg max-[817px]:mr-[0.3rem]'><MapsHomeWorkOutlinedIcon className='m-[0.7rem] text-white max-[397px]:m-[0.5rem] max-[344px]:m-[0.39rem] max-[329px]:m-[0.28rem] ' /></div>
                        <div>
                            <p className='text-[#534f4fe3] max-[817px]:text-[0.87rem] max-[334px]:text-[0.8rem]'>Total rent</p>
                            <h3 className='max-[817px]:text-[0.94rem] max-[817px]:font-medium max-[334px]:text-[0.87rem]'>500 Unit</h3>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='mr-[0.6rem]  bg-[darkblue] rounded-lg max-[817px]:mr-[0.3rem]'><MapsHomeWorkOutlinedIcon className='m-[0.7rem] text-white max-[397px]:m-[0.5rem] max-[344px]:m-[0.39rem] max-[329px]:m-[0.28rem]' /></div>
                        <div>
                            <p className='text-[#534f4fe3] max-[817px]:text-[0.87rem] max-[334px]:text-[0.8rem]'>Total sales</p>
                            <h3 className='max-[817px]:text-[0.94rem] max-[817px]:font-medium max-[334px]:text-[0.87rem]'>500 Unit</h3>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <h2 className='text-[green] font-semibold text-[1.17rem]'>2.1%</h2>
                            <ArrowUpwardOutlined className='text-[green] text-[0.7rem]' />
                        </div>
                        <p className='text-[#534f4fe3] text-[0.94rem]'>Total unit</p>
                    </div>
                </div>
                <LineChart />
            </div>
        </div>
    )
}

export default OverviewAnalytics