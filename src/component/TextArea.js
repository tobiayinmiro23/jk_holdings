import React from 'react'

const TextArea = ({ name }) => {
    return (
        <div>
            <div className='border-[1px]  border-[#eae9e9] bg-[white] w-[100%] m-[auto] h-[fit-content] rounded-md pb-[0.7rem] '>
                <p className='ml-[0.7rem] mt-[-0.87rem] mb-[-0.15rem] bg-[white] w-[fit-content] px-[0.4rem] '>{name}</p>
                <textarea className='bg-[none] outline-none px-[1rem] resize-none w-[97%] h-[15rem]' ></textarea>
            </div>
        </div>
    )
}

export default TextArea