import React from 'react'

const OverviewAnalytics = () => {
    const OverviewData = [
        {
            heading: 'Total Unit',
            id: 1,
            text: '500 Unit'
        },
        {
            heading: 'Total Unit',
            id: 2,
            text: '500 Unit'
        },

    ]
    return (
        <div>
            <div className='w-[100%] px-[2rem] py-[1.6rem] bg-[white] max-[1265px]:px-[0.66rem]'>
                <h3 className='loader w-[fit-content] h-[1.3rem] rounded-sm text-transparent text-[1.3rem] mb-[1.1rem]'>Overview</h3>
                {/* <div className='flex items-center justify-between mb-[-1.4rem]'> */}
                <div className='flex items-center justify-between mb-[1.3rem]'>
                    {
                        OverviewData.map(item => {
                            return <div key={item.id} className='flex items-center'>
                                <div className='mr-[0.6rem] loader rounded-lg w-[3.2rem] h-[3.1rem] max-[1462px]:mr-[1rem] max-[1265px]:mr-[0.6rem] max-[402px]:w-[2.5rem] max-[402px]:h-[2.5rem] max-[402px]:mr-[0.35rem]'></div>
                                <div>
                                    <p className='loader w-[fit-content] h-[1.1rem] mb-[0.5rem] rounded-sm text-transparent max-[817px]:text-[0.87rem] max-[402px]:h-[0.8rem] max-[402px]:w-[2.2rem] max-[334px]:text-[0.8rem]'>{item.heading}</p>
                                    <h3 className='loader w-[fit-content] h-[1.1rem] rounded-sm text-transparent max-[817px]:text-[0.94rem] max-[402px]:h-[0.8rem] max-[402px]:w-[2.2rem] max-[334px]:text-[0.87rem]'>{item.text}</h3>
                                </div>
                            </div>
                        })
                    }
                    <div>
                        <h2 className='loader w-[fit-content] rounded-sm text-transparent h-[1.2rem] mb-[0.5rem]text-[1.17rem] max-[402px]:h-[0.8rem] mb-[0.5rem]'>2.1%</h2>
                        <p className='loader w-[fit-content] rounded-sm text-transparent h-[1rem] text-[0.94rem] max-[402px]:h-[0.8rem] max-[402px]:w-[2.7rem]'>Total unit</p>
                    </div>
                </div>
                <div className='loader  w-[93%] rounded-md h-[13.5rem]'></div>
            </div>
        </div>
    )
}

export default OverviewAnalytics