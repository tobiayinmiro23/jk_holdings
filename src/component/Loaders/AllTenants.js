import React from 'react'

const AllTenants = () => {

    const tenantHeading = [
        {
            id: 1,
            text: 'Tenant Name'
        },
        {
            id: 2,
            text: 'Type of Apartment '
        },
        {
            id: 3,
            text: 'Location'
        },
        {
            id: 4,
            text: 'Status'
        },
        {
            id: 5,
            text: 'Phone Number'
        },
        {
            id: 6,
            text: ''
        },
    ]

    const tenantBody = [
        {
            id: 1,
            status: 'due',
            name: 'Akim Kazeem',
            img: '/image/7.jpeg',
            type: '2 bedroom flat Lorem ipsum dolor sit amet consectetur.',
            location: 'GRA, Port Hartcourt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, consequatur fugiat',
            number: '+23430120947 Lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            status: 'due',
            name: 'Akim Kazeem',
            img: '/image/7.jpeg',
            type: '2 bedroom flat Lorem ipsum dolor sit amet consectetur.',
            location: 'GRA, Port Hartcourt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, consequatur fugiat',
            number: '+23430120947 Lorem ipsum dolor sit amet'
        },

    ]
    return (
        <div className=' px-[1.3rem]  m-[auto]  max-[883px]:px-[0.6rem] max-[849px]:px-0 max-[651px]:overflow-scroll max-[651px]:px-[0rem] max-[651px]:w-[100%]'>
            <table className='bg-[white] max-[651px]:w-[50rem]'>
                <thead className=' '>
                    <tr className='text-start border-[1px] border-[lightgray]'>
                        {tenantHeading.map(item => {
                            return <th key={item.id} className=' py-[0.75rem] pl-[0.75rem]'>
                                <p className='loader w-[fit-content] h-[2rem] rounded-sm text-transparent '>{item.text}</p>
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        tenantBody.map(item => {
                            return <tr key={item.id} className='border-[1px] border-[lightgray]'>
                                <td className='flex items-center px-[0.5rem] py-[0.75rem]'>
                                    <div className='loader rounded-full w-[2.3rem] ml-[0.32rem] h-[2.3rem]'></div>
                                    <p className='loader w-[60%] rounded-sm text-transparent h-[1rem] ml-[0.32rem]'>{item.name}</p>
                                </td>
                                <td className=' px-[0.5rem] py-[0.75rem]'>
                                    <p className='loader w-[fit-content] h-[2rem] rounded-sm text-transparent '>{item.type}</p>
                                </td>
                                <td className=' px-[0.5rem] py-[0.75rem]'>
                                    <p className='loader w-[fit-content] h-[2rem] rounded-sm text-transparent '>{item.type}</p>
                                </td>
                                <td className=' px-[0.5rem] py-[0.75rem]'>
                                    <div className='loader w-[fit-content] m-[auto] text-transparent h-[1.8rem] py-[0.15rem] px-[0.7rem] rounded-md'>
                                        <p>{item.status}</p>
                                    </div>
                                </td>
                                <td className=' px-[0.5rem] py-[0.75rem]'>
                                    <p className='loader w-[fit-content] h-[2rem] rounded-sm text-transparent '>{item.type}</p>
                                </td>
                                <td className='px-[0.7rem]'>
                                    <p className='loader w-[1rem] h-[2rem] rounded-sm '></p>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllTenants