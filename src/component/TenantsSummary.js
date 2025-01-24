import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddPropertyModal from './AddPropertyModal';

const Tenants = () => {
    const summaryData = [
        {
            img: '/image/7.jpeg',
            name: 'Chioma isiah lorem bbbb',
            id: 1,
            text: 'Tenant'
        },
        {
            img: '/image/7.jpeg',
            name: 'Chioma isiah lorem bbbb',
            id: 2,
            text: 'Tenant'
        },
        {
            img: '/image/7.jpeg',
            name: 'Chioma isiah lorem bbbb',
            id: 3,
            text: 'Tenant'
        },
        {
            img: '/image/7.jpeg',
            name: 'Chioma isiah lorem bbbb',
            id: 4,
            text: 'Tenant'
        },
    ]
    return (
        <div className='w-[100%] pt-[1.14rem] pb-[2.14rem] bg-[white] border-[#eae9e9] border-[1px] rounded-lg max-[883px]:pb-[1.35rem]'>
            <div className='flex items-center px-[1.5rem] justify-between mb-[1.4rem] max-[1462px]:px-[0.5rem]'>
                <h1 className='text-[1.45rem] font-semibold max-[1462px]:text-[1.28rem]'>New Tenants</h1>
                <MoreVertIcon />
            </div>
            <div>
                {
                    summaryData.map(items => {
                        return <div key={items.id} className='flex items-center px-[1.5rem] py-[0.8rem] hover:bg-slate-100 max-[1462px]:px-[0.5rem]'>
                            <div className='rounded-full w-[2.56rem] h-[2.56rem] mr-[0.1rem]'><img className='rounded-full' src={items.img} alt="" /></div>
                            <div className='ml-[0.4rem] cursor-pointer w-[90%]'>
                                <h3 className='text-[1.15rem] mb-[-0.3rem] w-[100%] h-[1.8rem] overflow-hidden'>{items.name}</h3>
                                <p className='text-[grey]'>{items.text}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <AddPropertyModal name='Add Tenant' />
        </div>
    )
}

export default Tenants