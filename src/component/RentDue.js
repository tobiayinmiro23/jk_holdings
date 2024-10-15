import React from 'react'
import Progress from './Progress'
const RentDue = () => {
  return (
    <div>
      <div className='px-[0.8rem] py-[1.8rem] bg-[white] border-[#eae9e9] border-[1px] rounded-lg w-[100%]  max-[770px]:py-[1.3rem] max-[640px]:px-[1.2rem]'>
        <h1 className='text-[1.45rem] font-semibold mb-[1.8rem]'>Rents Due</h1>
        <div>
          <div className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
            <div className='flex items-center justify-between mb-[0.8rem]'>
              <p>Self Contained</p>
              <p className='text-[#252525] text-[0.9rem] '>45%</p>
            </div>
            <Progress color='blue' bg='lightblue' />
          </div>
          <div className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
            <div className='flex items-center justify-between mb-[0.8rem]'>
              <p>Self Contained</p>
              <p className='text-[#252525] text-[0.9rem] '>45%</p>
            </div>
            <Progress color='blue' bg='lightblue' />
          </div>
          <div className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
            <div className='flex items-center justify-between mb-[0.8rem]'>
              <p>Self Contained</p>
              <p className='text-[#252525] text-[0.9rem] '>45%</p>
            </div>
            <Progress color='blue' bg='lightblue' />
          </div>
          <div className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
            <div className='flex items-center justify-between mb-[0.8rem]'>
              <p>Self Contained</p>
              <p className='text-[#252525] text-[0.9rem] '>45%</p>
            </div>
            <Progress color='blue' bg='lightblue' />
          </div>
          <div className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
            <div className='flex items-center justify-between mb-[0.8rem]'>
              <p>Self Contained</p>
              <p className='text-[#252525] text-[0.9rem] '>45%</p>
            </div>
            <Progress color='blue' bg='lightblue' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentDue