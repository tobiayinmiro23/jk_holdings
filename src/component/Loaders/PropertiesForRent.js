import React from 'react'

const PropertiesForRent = () => {
    const tenantData = [
        {
            name: 'Properties for rent',
            id: 1,
            number: 35
        },
        {
            name: 'Properties for rent',
            id: 2,
            number: 35
        },
        {
            name: 'Properties for rent',
            id: 3,
            number: 35
        },
        {
            name: 'Properties for rent',
            id: 4,
            number: 35
        },
    ]

    return (
        <div className='flex items-center justify-center flex-wrap w-[100%] max-[397px]:block'>
            {
                tenantData.map(items => {
                    return <div key={items.id} className='bg-white border-[1px] mb-[1.5rem] px-[1.5rem] m-[auto] w-[47%] py-[1rem] rounded-md border-[#eae9e9]max-[1437px]:px-[0.5rem]  max-[397px]:w-[100%] max-[397px]:mb-[2rem]'>
                        <div className='flex items-end justify-center mb-[1rem] max-[397px]:justify-between'>
                            <div className='mr-[0.5rem]  max-[1289px]:w-[60%]'>
                                <p className='loader w-[fit-content] rounded-sm overflow-hidden text-transparent mb-[1.2rem] text-[1.2rem]'>{items.name}</p>
                                <h2 className='loader w-[fit-content] h-[2.2rem] rounded-sm text-transparent text-[1.9rem] font-bold'>{items.number}</h2>
                            </div>
                            <div className='rounded-full loader w-[3.9rem] h-[3.9rem] max-[1289px]:w-[3.4rem] max-[1289px]:h-[3.4rem]'></div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default PropertiesForRent