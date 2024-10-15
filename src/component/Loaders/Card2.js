import React from 'react'

const Card2 = () => {
    const cardData = [
        {
            id: 1,
            img: '/image/5172658.jpg',
            heading: '3 bedroom duplex 3 bedroom duplex 3 bedroom duplex',
            info: 'Alcon woji road portharcourt',
            price: 'N600,00'
        },
        {
            id: 2,
            img: '/image/5172658.jpg',
            heading: '3 bedroom duplex',
            info: 'Alcon woji road portharcourt',
            price: 'N600,00'
        },
        {
            id: 3,
            img: '/image/5172658.jpg',
            heading: '3 bedroom duplex',
            info: 'Alcon woji road portharcourt',
            price: 'N600,00'
        },
        {
            id: 4,
            img: '/image/5172658.jpg',
            heading: '3 bedroom duplex',
            info: 'Alcon woji road portharcourt',
            price: 'N600,00'
        },
        {
            id: 5,
            img: '/image/5172658.jpg',
            heading: '3 bedroom duplex',
            info: 'Alcon woji road portharcourt',
            price: 'N600,00'
        },
        {
            id: 6,
            img: '/image/5172658.jpg',
            heading: '3 bedroom duplex',
            info: 'Alcon woji road portharcourt',
            price: 'N600,00'
        },
        {
            id: 7,
            img: '/image/5172658.jpg',
            heading: '3 bedroom duplex',
            info: 'Alcon woji road portharcourt',
            price: 'N600,00'
        },
        {
            id: 8,
            img: '/image/5172658.jpg',
            heading: '3 bedroom duplex',
            info: 'Alcon woji road portharcourt',
            price: 'N600,00'
        },
    ]
    return (
        <div className=' flex items-center justify-center flex-wrap my-[1rem]'>
            {
                cardData.map(item => {
                    return <div key={item.id} className='border-[1px] rounded-md border-[lightgray] bg-white w-[fit-content] mx-[1rem] my-[1rem] max-[1249px]:w-[30%] max-[1249px]:mx-[1%] max-[699px]:w-[45%] max-[699px]:mx-[2%] max-[495px]:w-[48%] max-[495px]:mx-[1%]'>
                        <div className='loader  w-[15rem] rounded-t-md h-[11rem] max-[1464px]:w-[18rem] max-[1306px]:w-[16rem] max-[1249px]:w-[100%] max-[1096px]:h-[9.6rem] max-[730px]:h-[8.6rem] max-[699px]:h-[11rem] max-[565px]:h-[9.5rem] max-[467px]:h-[8.3rem] max-[365px]:h-[7.3rem] max-[340px]:h-[6.6rem]'></div>
                        <div className='px-[0.4rem] pb-[1rem] pt-[0.6rem] w-[15rem] max-[1464px]:w-[18rem] max-[1306px]:w-[16rem] max-[1249px]:w-[100%] max-[378px]:pt-[0.1rem]'>
                            <h3 className='loader w-[fit-content] px-[0.4rem] rounded-sm text-transparent text-[1.3rem]  mb-[0.45rem] h-[2rem] max-[340px]:text-[1.2rem]'>{item.heading}</h3>
                            <p className='loader w-[fit-content] px-[0.4rem] rounded-sm text-transparent mb-[0.75rem] h-[1.4rem] max-[467px]:mb-[0.2rem]'>{item.info}</p>
                            <h4 className='loader w-[fit-content] px-[0.4rem] rounded-sm text-transparent  h-[1.3rem] '>{item.price}</h4>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Card2