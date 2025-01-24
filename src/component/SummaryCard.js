import React from 'react'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const SummaryCard = ({ img }) => {
    const summaryData = [
        {
            img: MapsHomeWorkIcon,
            id: 1,
            number: 35,
            rating: '3.5%',
            text: 'Apartments for Rent'
        },
        {
            img: AutoFixHighIcon,
            id: 2,
            number: 12,
            rating: '2.5%',
            text: 'Rented Apartments'
        },
        {
            img: PeopleAltIcon,
            id: 3,
            number: 12,
            rating: '1.5%',
            text: 'Total Tenant'
        },
        {
            img: PeopleAltIcon,
            id: 4,
            number: 15,
            rating: '0.5%',
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
                                    <div className='bg-[grey] rounded-full'><item.img className='m-[0.9rem] text-white max-[600px]:m-[0.75rem]' /></div>
                                    <p className='text-green-600'>{item.rating}</p>
                                </div>
                                <h2 className='text-[1.9rem] font-bold'>{item.number}</h2>
                                <p className='text-[#534f4f] mt-[-0.2rem] text-[1.2rem] max-[1124px]:text-[1.05rem] max-[600px]:mt-[-0.6rem] max-[400px]:text-[1rem]'>{item.text}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SummaryCard