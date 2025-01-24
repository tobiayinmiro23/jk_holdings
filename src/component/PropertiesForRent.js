import React from 'react'
import CircularProgress from './CircularProgress'

const PropertiesForRent = () => {
    const tenantData = [
        {
            name: 'Properties for rent',
            id: 1,
            number: 35,
            img: CircularProgress
        },
        {
            name: 'Properties for rent',
            id: 2,
            number: 35,
            img: CircularProgress
        },
        {
            name: 'Properties for rent',
            id: 3,
            number: 35,
            img: CircularProgress
        },
        {
            name: 'Properties for rent',
            id: 4,
            number: 35,
            img: CircularProgress
        },
    ]
    return (
        <div className='flex items-center justify-center flex-wrap w-[100%] max-[397px]:block'>
            {
                tenantData.map(item => {
                    return <div key={item.id} className='bg-white border-[1px] px-[1.5rem] mb-[1rem] m-[auto] w-[47%] py-[1rem] rounded-md border-[#eae9e9] max-[397px]:w-[100%] max-[397px]:mb-[2rem]'>
                        <div className='flex items-end justify-center mb-[1rem] max-[397px]:justify-between'>
                            <div>
                                <p className='text-[#534f4f] mb-[1.2rem] text-[1.2rem] '>{item.name}</p>
                                <h2 className='text-[1.9rem] font-bold'>{item.number}</h2>
                            </div>
                            <item.img />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default PropertiesForRent