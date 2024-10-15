import React from 'react'
const RentDue = () => {
  const summaryData = [
    {
      id: 1,
      number: 35,
      text: 'Apartments for Rent'
    },
    {
      id: 2,
      number: 35,
      text: 'Apartments for Rent'
    },
    {
      id: 3,
      number: 35,
      text: 'Apartments for Rent'
    },
    {
      id: 4,
      number: 35,
      text: 'Apartments for Rent'

    }]
  return (
    <div>
      <div className=' px-[0.8rem] py-[1.8rem] bg-[white] border-[#eae9e9] border-[1px] w-[100%] rounded-lg max-[770px]:py-[1.3rem] max-[640px]:px-[1.2rem]'>
        <h1 className='text-[1.45rem] loader w-[fit-content]  h-[2.3rem] rounded-sm text-transparent mb-[1.8rem]'>Rents Due</h1>
        <div>
          {
            summaryData.map(item => {
              return <div key={item.id} className='mb-[1.4rem] max-[770px]:mb-[1rem]'>
                <div className='flex items-center justify-between mb-[0.8rem]'>
                  <p className='loader w-[fit-content]  rounded-sm text-transparent max-[883px]:w-[85%] max-[883px]:h-[1.2rem] max-[770px]:w-[fit-content]'>{item.text}</p>
                  <p className='text-[#252525] text-[0.9rem] loader w-[fit-content]  rounded-sm text-transparent'>{item.number}</p>
                </div>
                <div className='loader w-[100%] h-[1.2rem] mb-[2.26rem] rounded-lg max-[883px]:mb-[2.4rem] max-[770px]:mb-[2rem]'></div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default RentDue