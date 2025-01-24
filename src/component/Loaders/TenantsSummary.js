import React from 'react'

const Tenants = () => {
    const tenantData = [
        {
            name: 'Chioma isiah lorem bbbb',
            id: 1,
            text: 'Tenant'
        },
        {
            name: 'Chioma isiah lorem bbbb',
            id: 2,
            text: 'Tenant'
        },
        {
            name: 'Chioma isiah lorem bbbb',
            id: 3,
            text: 'Tenant'
        },
        {
            name: 'Chioma isiah lorem bbbb',
            id: 4,
            text: 'Tenant'
        },
    ]
    return (
        <div className='w-[100%] pt-[1.14rem] pb-[2.14rem] bg-[white] border-[#eae9e9] border-[1px] rounded-lg max-[883px]:pb-[1.35rem]'>
            <div className='flex items-center px-[1.5rem] justify-between mb-[1.4rem] max-[1462px]:px-[0.5rem]'>
                <h1 className='loader w-[fit-content] mb-[0.5rem] rounded-sm text-transparent text-[1.45rem] max-[1462px]:text-[1.28rem]'>New Tenants</h1>
                <div className='loader h-[1.7rem] w-[0.8rem]'></div>
            </div>
            <div>
                {
                    tenantData.map(items => {
                        return <div key={items.id} className='flex items-center px-[1.5rem] py-[0.8rem] max-[1462px]:px-[0.5rem]'>
                            <div className='rounded-full loader w-[2.8rem] h-[2.8rem] mr-[0.1rem]'></div>
                            <div className='ml-[0.4rem] cursor-pointer w-[80%]'>
                                <h3 className='loader w-[fit-content] mb-[0.5rem] rounded-sm text-transparent text-[1.15rem] h-[1.4rem] overflow-hidden'>{items.name}</h3>
                                <p className='loader w-[fit-content] h-[1.1rem] rounded-sm text-transparent'>{items.text}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='loader w-[90%] h-[3.4rem] m-[auto] rounded-lg mt-[1rem]'></div>
        </div>
    )
}

export default Tenants