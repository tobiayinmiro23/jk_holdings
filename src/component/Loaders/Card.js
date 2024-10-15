import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';


const Card = () => {
    const cardData = [
        {
            id: 1,
            img: '/image/5172658.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.',
            type: '5 Flats',
            price: 350000,
            location: 'Maiduguri',
            time: '2h ago Lorem ipsum dolor sit',
            time: '12/22/2024'
        },
        {
            id: 2,
            img: '/image/5172658.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.',
            type: '5 Flats',
            price: 350000,
            location: 'Port hart court',
            time: '2h ago Lorem ipsum dolor sit'
        },
        {
            id: 3,
            img: '/image/5172658.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.',
            type: '5 Flats',
            price: 350000,
            location: 'Port hart court',
            time: '2h ago Lorem ipsum dolor sit'
        },
        {
            id: 4,
            img: '/image/5172658.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.',
            type: '5 Flats',
            price: 350000,
            location: 'Port hart court',
            time: '2h ago Lorem ipsum dolor sit'
        },
    ]

    return (
        <div className='w-[100%] flex items-start justify-evenly flex-wrap p-[0.8rem] max-[1019px]:px-[0rem] max-[731px]:block' >
            {
                cardData.map(item => {

                    return <div key={item.id} className='w-[fit-content] flex items-start mt-[1.5rem] p-[0.8rem] border-[1px] border-[#eae9e9] bg-white rounded-lg max-[1409px]:w-[48.5%] max-[731px]:w-[80%] max-[731px]:m-[auto] max-[731px]:mt-[2rem] max-[617px]:w-[90%] max-[539px]:w-[96%] max-[371px]:w-[98%] max-[371px]:p-[0.47rem]'>
                        <div className='max-[1409px]:w-[45%] max-[1270px]:w-[50%] max-[860px]:w-[53%] '>
                            <div className='w-[15rem] loader h-[12rem] max-[1409px]:w-[100%] max-[1182px]:h-[13rem] max-[731px]:h-[13.5rem] max-[409px]:h-[13rem] max-[371px]:h-[12rem]'></div>
                        </div>
                        <div className='w-[17rem] ml-[0.9rem] max-[1409px]:w-[55%] max-[1279px]:ml-[0.3rem] max-[1270px]:w-[50%] max-[860px]:w-[47%]'>
                            <div className='flex items-center justify-between mb-[1.4rem]'>
                                <h1 className='loader text-transparent rounded-sm text-[1.3rem] font-semibold w-[14rem] h-[1.68rem] overflow-hidden max-[1243px]:text-[1.18rem] max-[1130px]:w-[87%]'>{item.title}</h1>
                                <div className='loader w-[1rem] h-[1.8rem]'></div>
                            </div>
                            <div className='flex items-center justify-between mb-[1.6rem] mt-[1.9rem] max-[1182px]:mb-[1.2rem] max-[1182px]:mt-[1.2rem] max-[371px]:mb-[0.8rem]'>
                                <div className='loader w-[4rem] h-[1.3rem]'></div>
                                <div className='loader w-[4rem] h-[1.3rem]'></div>
                            </div>
                            <div className='flex items-start justify-between mb-[0.7rem] max-[1182px]:block '>
                                <div className='loader w-[6.4rem] h-[1.3rem] mb-[0.7rem]'></div>
                                <div className='loader w-[5.2rem] h-[1.08rem]'></div>
                            </div>
                            <div className='border-[1px] border-[lightgray] mb-[1.4rem] mt-[1.2rem] '></div>
                            <div className='flex items-start justify-between mb-[0rem]'>
                                <div className='loader w-[5.2rem] h-[1.3rem] max-[904px]:w-[4.5rem] max-[841px]:w-[3.3rem]'></div>
                                <div className='loader w-[6.4rem] h-[1.3rem] max-[904px]:w-[5rem] max-[841px]:w-[4.1rem]'></div>
                            </div>
                        </div>
                    </div>

                })
            }
        </div >
    )
}

export default Card