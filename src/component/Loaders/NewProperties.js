import React, { useState } from 'react'
import Card2 from './Card2'
const NewProperties = () => {
    const [selected, setselected] = useState('Popular')
    const selectedStyle = 'mr-[0.5rem] cursor-pointer py-[0.43rem] px-[0.9rem] border-[1px] rounded-md border-[lightgray] font-semibold bg-[white] max-[1279px]:px-[0.4rem] max-[1279px]:mr-[0.8rem]  max-[1000px]:mr-[0.7rem] max-[1000px]:px-[0.27rem] max-[1000px]:text-[0.9rem] max-[650px]:py-[0.23rem] max-[650px]:px-[0.19rem] max-[587px]:mx-[0.8rem] max-[587px]:px-[0.35rem] max-[587px]:py-[0.32rem] max-[415px]:mx-[0.4rem] max-[395px]:mx-[0rem] max-[387px]:px-[0.18rem] max-[387px]:py-[0.18rem] max-[341px]:text-[0.8rem]'
    const options = [
        {
            id: 1,
            text: 'Popular'
        },
        {
            id: 2,
            text: 'Recomended'
        },
        {
            id: 3,
            text: 'Newest'
        },
        {
            id: 4,
            text: 'Newest'
        },
    ]
    return (
        <div>
            <div className='w-[100%] py-[2rem] px-[1.3rem]  bg-[white] border-[#eae9e9] border-[1px] rounded-lg max-[1000px]:px-[0.3rem] max-[467px]:px-[0.3rem]'>
                <div className='flex items-center justify-between mb-[2rem] max-[587px]:block'>
                    <h3 className='loader w-[fit-content] px-[0.1rem] rounded-sm text-transparent text-[1.43rem] max-[1000px]:ml-[1.3rem] max-[650px]:text-[1.23rem] max-[587px]:mb-[1rem] max-[587px]:text-[1.39rem] max-[587px]:ml-[1rem] max-[315px]:h-[2.2rem]'>New Properties added</h3>
                    <div className='flex items-center max-[587px]:justify-center max-[395px]:justify-evenly'>
                        {
                            options.map(items => {
                                return <p key={items.id} className='loader w-[fit-content] text-transparent cursor-pointer py-[0.43rem] px-[0.9rem] border-[1px] rounded-md border-[#ebe8e8] mr-[0.5rem] max-[1279px]:px-[0.4rem] max-[1279px]:mr-[0.8rem] max-[1000px]:mr-[0.7rem] max-[1000px]:px-[0.27rem] max-[1000px]:text-[0.9rem] max-[650px]:py-[0.23rem] max-[650px]:px-[0.19rem] max-[587px]:mx-[0.8rem] max-[587px]:px-[0.35rem] max-[587px]:py-[0.32rem] max-[415px]:mx-[0.4rem] max-[395px]:mx-[0rem] max-[387px]:px-[0.18rem] max-[387px]:py-[0.18rem] max-[341px]:text-[0.8rem]'>{items.text}</p>
                            })
                        }
                    </div>
                </div>
                <Card2 />
            </div>
        </div>
    )
}

export default NewProperties