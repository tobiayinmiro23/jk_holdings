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
              <p className='text-[#252525] text-[0.9rem] '>37%</p>
            </div>
            <Progress progresscolor='#edf2f1' bg='#00C49F' progressValue={37} />
          </div>
          <div className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
            <div className='flex items-center justify-between mb-[0.8rem]'>
              <p>2 bedroom flat</p>
              <p className='text-[#252525] text-[0.9rem] '>45%</p>
            </div>
            <Progress progresscolor='#f7dfd4' bg='#FF8042' progressValue={45} />
          </div>
          <div className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
            <div className='flex items-center justify-between mb-[0.8rem]'>
              <p>3 bedroom flat</p>
              <p className='text-[#252525] text-[0.9rem] '>81%</p>
            </div>
            <Progress progresscolor='#d9f9d9' bg='#358935' progressValue={81} />
          </div>
          <div className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
            <div className='flex items-center justify-between mb-[0.8rem]'>
              <p>Duplex</p>
              <p className='text-[#252525] text-[0.9rem] '>60%</p>
            </div>
            <Progress progresscolor='#f8d2d2' bg='red' progressValue={60} />
          </div>
          <div className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
            <div className='flex items-center justify-between mb-[0.8rem]'>
              <p>Shops</p>
              <p className='text-[#252525] text-[0.9rem] '>27%</p>
            </div>
            <Progress progresscolor='#ffe8b5' bg='#FFBB28' progressValue={27} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentDue