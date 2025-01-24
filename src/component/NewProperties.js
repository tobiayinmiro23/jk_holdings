import React, { useState } from 'react'
import Card2 from './Card2'
const NewProperties = () => {
    const [selected, setselected] = useState('Popular')
    const selectedStyle = 'mr-[0.5rem] cursor-pointer bg-[#e0e0e3] border-none  py-[0.43rem] px-[0.9rem] border-[1px] rounded-md border-[lightgray] font-semibold bg-[white] max-[1279px]:px-[0.4rem] max-[1279px]:mr-[0.8rem]  max-[1000px]:mr-[0.7rem] max-[1000px]:px-[0.27rem] max-[1000px]:text-[0.9rem] max-[650px]:py-[0.23rem] max-[650px]:px-[0.19rem] max-[587px]:mx-[0.8rem] max-[587px]:px-[0.35rem] max-[587px]:py-[0.32rem] max-[415px]:mx-[0.4rem] max-[395px]:mx-[0rem] max-[387px]:px-[0.18rem] max-[387px]:py-[0.18rem] max-[341px]:text-[0.8rem]'

    return (
        <div>
            <div className='w-[100%] py-[2rem] px-[1.3rem] bg-[white] border-[#eae9e9] border-[1px] rounded-lg max-[1000px]:px-[0.3rem] max-[467px]:px-[0.3rem]'>
                <div className='flex items-center justify-between mb-[2rem] max-[587px]:block'>
                    <h3 className='font-semibold text-[1.43rem] max-[650px]:text-[1.23rem] max-[587px]:mb-[1rem] max-[587px]:text-[1.39rem] max-[587px]:ml-[1rem]'>New Properties added</h3>
                    <div className='flex items-center max-[587px]:justify-center max-[395px]:justify-evenly'>
                        <p onClick={() => setselected('Popular')} className={selected === 'Popular' ? selectedStyle : 'cursor-pointer py-[0.43rem] px-[0.9rem] border-[1px] rounded-md border-[lightgray] mr-[0.5rem] max-[1279px]:px-[0.4rem] max-[1279px]:mr-[0.8rem] max-[1000px]:mr-[0.7rem] max-[1000px]:px-[0.27rem] max-[1000px]:text-[0.9rem] max-[650px]:py-[0.23rem] max-[650px]:px-[0.19rem] max-[587px]:mx-[0.8rem] max-[587px]:px-[0.35rem] max-[587px]:py-[0.32rem] max-[415px]:mx-[0.4rem] max-[395px]:mx-[0rem] max-[387px]:px-[0.18rem] max-[387px]:py-[0.18rem] max-[341px]:text-[0.8rem]'}>Popular</p>
                        <p onClick={() => setselected('Recomended')} className={selected === 'Recomended' ? selectedStyle : 'cursor-pointer py-[0.43rem] px-[0.9rem] border-[1px] rounded-md border-[lightgray] mr-[0.5rem] max-[1279px]:px-[0.4rem] max-[1279px]:mr-[0.8rem] max-[1000px]:mr-[0.7rem] max-[1000px]:px-[0.27rem] max-[1000px]:text-[0.9rem] max-[650px]:py-[0.23rem] max-[650px]:px-[0.19rem] max-[587px]:mx-[0.8rem] max-[587px]:px-[0.35rem] max-[587px]:py-[0.32rem] max-[415px]:mx-[0.4rem] max-[395px]:mx-[0rem] max-[387px]:px-[0.18rem] max-[387px]:py-[0.18rem] max-[341px]:text-[0.8rem]'}>Recomended</p>
                        <p onClick={() => setselected('Newest')} className={selected === 'Newest' ? selectedStyle : 'cursor-pointer py-[0.43rem] px-[0.9rem] border-[1px] rounded-md border-[lightgray] mr-[0.5rem] max-[1279px]:px-[0.4rem] max-[1279px]:mr-[0.8rem] max-[1000px]:mr-[0.7rem] max-[1000px]:px-[0.27rem] max-[1000px]:text-[0.9rem] max-[650px]:py-[0.23rem] max-[650px]:px-[0.19rem] max-[587px]:mx-[0.8rem] max-[587px]:px-[0.35rem] max-[587px]:py-[0.32rem] max-[415px]:mx-[0.4rem] max-[395px]:mx-[0rem] max-[387px]:px-[0.18rem] max-[387px]:py-[0.18rem] max-[341px]:text-[0.8rem]'}>Newest</p>
                        <select onClick={() => setselected('MostRecent')} className={selected === 'MostRecent' ? selectedStyle : 'cursor-pointer py-[0.43rem] px-[0.9rem] border-[1px] rounded-md outline-none bg-transparent border-[lightgray] mr-[0.5rem] max-[1279px]:px-[0.4rem] max-[1279px]:mr-[0.8rem] max-[1000px]:mr-[0.7rem] max-[1000px]:px-[0.27rem] max-[1000px]:text-[0.9rem] max-[650px]:py-[0.23rem] max-[650px]:px-[0.19rem] max-[587px]:mx-[0.8rem] max-[587px]:px-[0.35rem] max-[587px]:py-[0.32rem] max-[415px]:mx-[0.4rem] max-[395px]:mx-[0rem] max-[387px]:px-[0.18rem] max-[387px]:py-[0.18rem] max-[341px]:text-[0.8rem] '}>
                            <option className='max-[1000px]:px-[0.27rem] max-[1000px]:text-[0.9rem]' value="">first</option>
                            <option className='max-[1000px]:px-[0.27rem] max-[1000px]:text-[0.9rem]' value="">second</option>
                        </select>
                    </div>
                </div>
                <Card2 />
            </div>
        </div>
    )
}

export default NewProperties