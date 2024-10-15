import React from 'react'

const SummaryCard = () => {
    const summaryData = [
        {
            id: 1,
            number: 35,
            rating: '3.5%',
            text: 'Apartments for Rent'
        },
        {
            id: 2,
            number: 35,
            rating: '3.5%',
            text: 'Rented Apartments'
        },
        {
            id: 3,
            number: 35,
            rating: '3.5%',
            text: 'Total Tenant'
        },
        {
            id: 4,
            number: 35,
            rating: '3.5%',
            text: 'Rents'
        },
    ]
    return (
        <div>
            <div className='flex items-center justify-start mb-[2rem] flex-wrap '>
                {
                    summaryData.map(item => {
                        return <div key={item.id} className='w-[23%] mr-[2%] max-[1004px]:w-[47%] max-[1004px]:m-[auto] max-[354px]:w-[100%]'>
                            <div className='bg-white border-[1px] px-[0.7rem] py-[0.6rem] rounded-md border-[lightgray] w-[100%] max-[1004px]:mb-[1.3rem] max-[400px]:px-[0.3rem] max-[354px]:px-[0.6rem]'>
                                <div className='flex items-center justify-between mb-[1.65rem] max-[600px]:mb-[0.8rem]'>
                                    <div className='loader w-[3.4rem] h-[3.4rem]  rounded-full'></div>
                                    <p className='loader w-[fit-content] px-[0.1rem] h-[1.4rem] rounded-sm text-transparent text-green-600'>{item.rating}</p>
                                </div>
                                <h2 className='loader w-[fit-content] px-[0.4rem] text-[1.9rem] h-[2.3rem] rounded-sm mb-[1rem] text-transparent font-bold'>{item.number}</h2>
                                <p className='loader w-[fit-content] px-[0.4rem] h-[1.4rem] rounded-sm text-transparent mt-[-0.2rem] text-[1.2rem] max-[1124px]:text-[1.05rem] max-[600px]:mt-[-0.6rem] max-[400px]:text-[1rem]'>{item.text}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SummaryCard