import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import clock from '../assets/clock.png'


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
                            <div className='w-[15rem] h-[12rem] max-[1409px]:w-[100%] max-[731px]:h-[13.5rem] max-[409px]:h-[13rem] max-[371px]:h-[12rem]'><img className='rounded-md' src={item.img} alt="" /></div>
                        </div>
                        <div className='w-[17rem] ml-[0.9rem] max-[1409px]:w-[55%] max-[1279px]:ml-[0.3rem] max-[1270px]:w-[50%] max-[860px]:w-[47%]'>
                            <div className='flex items-center justify-between mb-[1.4rem]'>
                                <h1 className='text-[1.3rem] font-semibold w-[14rem] h-[1.8rem] overflow-hidden max-[1243px]:text-[1.18rem]'>{item.title}</h1>
                                <MoreVertIcon className='mt-[0.3rem] max-[1243px]:mt-[0.2rem]' />
                            </div>
                            <div className='flex items-center justify-between mb-[1.6rem] mt-[1.9rem] max-[1182px]:mb-[1.2rem] max-[1182px]:mt-[1.2rem] max-[371px]:mb-[0.8rem]'>
                                <div className='flex items-center'>
                                    <BedRoundedIcon className='text-[#252525]' />
                                    <p className=''>{item.type}</p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-[0.45rem] h-[0.45rem] bg-[black] mr-[0.1rem] rounded-full'></div>
                                    <p className=''>Rent</p>
                                </div>
                            </div>
                            <div className='flex items-start justify-start mb-[0.7rem] max-[1182px]:block '>
                                <div className='flex items-end h-[1.3rem] mt-[0.3rem] overflow-hidden max-[731px]:mb-[1rem]'>
                                    <h2 className='text-[red] text-[1.01rem] font-bold max-[1279px]:text-[0.9rem]'>N{item.price}</h2>
                                    <p className='text-[red] text-[0.87rem] max-[1279px]:text-[0.83rem]'>Annual</p>
                                </div>
                                <p className='text-[#534f4f] text-[0.9rem] ml-[auto] text-end w-[48%]  max-[1182px]:w-[100%] max-[1182px]:text-start max-[1182px]:mt-[0.2rem] max-[1182px]:ml-[-0.3rem] max-[371px]:mt-[-0.5rem]'><FmdGoodOutlinedIcon className='text-[#534f4fe3] mr-[0rem] max-[1182px]:mr-[-0.2rem]' />{item.location}</p>
                            </div>
                            <div className='border-[1px] border-[lightgray] mb-[0.7rem]  max-[409px]:mb-[0.4rem]'></div>
                            <div className='flex items-start justify-between mb-[0rem]'>
                                <div className='flex items-center w-[5.7rem] max-[1190px]:w-[5rem] max-[952px]:ml-[-0.23rem] max-[775px]:w-[3.8rem] max-[731px]:w-[4.86rem] max-[731px]:ml-[0rem] max-[731px]:mt-[0.08rem]'>
                                    <div className='w-[0.9rem] h-[0.85rem] mt-[0.12rem] mx-[0.1rem] max-[952px]:mx-[0rem] max-[775px]:hidden max-[731px]:block max-[731px]:mt-[0.18rem] max-[409px]:hidden'>
                                        <img src={clock} alt="clock img" />
                                    </div>
                                    <h6 className='text-[#534f4f] w-[fit-content] h-[1.4rem] overflow-hidden text-[0.91rem] mt-[0.15rem] max-[1190px]:text-[0.77rem] max-[986px]:text-[0.67rem] max-[986px]:h-[1.1rem] max-[986px]:mt-[0.2rem] max-[883px]:text-[0.72rem] max-[775px]:ml-[0.2rem] max-[731px]:text-[0.72rem] max-[731px]:ml-[0rem] max-[371px]:ml-[-0.27rem] max-[350px]:text-[0.67rem]'>{item.time}</h6>
                                </div>
                                <div className='flex items-center max-[1107px]:mr-[-0.7rem] max-[731px]:mr-[-0.5rem] max-[409px]:mr-[-0.7rem] max-[371px]:mr-[-0.42rem]'>
                                    <p className='text-[#534f4f] text-[0.91rem] max-[1190px]:text-[0.77rem] max-[986px]:text-[0.73rem] max-[883px]:text-[0.79rem] max-[731px]:text-[0.8rem] max-[350px]:text-[0.7rem] max-[349px]:mr-[-0.079rem] max-[327px]:text-[0.63rem]'>Tenants</p>
                                    <AvatarGroup max={3}>
                                        <Avatar sx={{ width: '1.4rem', height: '1.4rem' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        <Avatar sx={{ width: '1.4rem', height: '1.4rem' }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        <Avatar sx={{ width: '1.4rem', height: '1.4rem' }} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                    </AvatarGroup>
                                </div>
                            </div>
                        </div>
                    </div>

                })
            }
        </div >
    )
}

export default Card

//   <div className='w-[fit-content] flex items-center m-[1rem] p-[0.8rem] border-[1px] border-[lightgray] bg-white rounded-lg'>
//         <div>
//             <div className='w-[15rem] h-[12rem]'><img className='rounded-md' src={item.img} alt="" /></div>
//         </div>
//         <div className='w-[17rem] ml-[0.9rem]'>
//             <div className='flex items-center justify-between mb-[1.4rem]'>
//                 <h1 className='text-[1.45rem] font-semibold w-[14rem] h-[1.8rem] overflow-hidden'>{item.title}</h1>
//                 <MoreVertIcon />
//             </div>
//             <div className='flex items-center justify-between mb-[1.6rem] mt-[1.9rem]'>
//                 <div className='flex items-center'>
//                     <BedRoundedIcon className='text-[#252525]' />
//                     <p className=''>{item.type}</p>
//                 </div>
//                 <div className='flex items-center'>
//                     <div className='w-[0.45rem] h-[0.45rem] bg-[black] mr-[0.4rem] rounded-full'></div>
//                     <p className=''>Rent</p>
//                 </div>
//             </div>
//             <div className='flex items-center justify-around mb-[0.7rem]'>
//                 <div className='flex items-end'>
//                     <h2 className='text-[red] text-[1.1rem] font-bold'>N{item.price}</h2>
//                     <p className='text-[red] text-[0.9rem]'>Annual</p>
//                 </div>
//                 <div className='flex items-center justify-end h-[1.8rem]   text-end'>
//                     <FmdGoodOutlinedIcon className='text-[#534f4fe3] mr-[0rem]' />
//                     <p className='text-[#534f4f] text-[0.95rem] h-[1.06rem] leading-[0.87rem] '>{item.location}</p>
//                 </div>
//             </div>
//             <div className='border-[1px] border-[lightgray] mb-[0.7rem]'></div>
//             <div className='flex items-center justify-between mb-[0rem]'>
//                 <h6 className='text-[#534f4f]'>{item.price}</h6>
//                 <div className='flex items-center'>
//                     <p className='text-[#534f4f] mr-[0.3rem]'>Tenants</p>
//                     <AvatarGroup max={3}>
//                         <Avatar sx={{ width: '1.6rem', height: '1.6rem' }} className='w-[1rem] text-[1rem] h-[1rem]' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                         <Avatar sx={{ width: '1.6rem', height: '1.6rem' }} className='w-[1rem] text-[1rem] h-[1rem]' alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//                         <Avatar sx={{ width: '1.6rem', height: '1.6rem' }} className='w-[1rem] text-[1rem] h-[1rem]' alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
//                     </AvatarGroup>
//                 </div>
//             </div>
//         </div>
//     </div>