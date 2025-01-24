import React from 'react'

const Input = ({ name, type, mb }) => {
    return (
        <div style={{ marginBottom: mb }} className='border-[1px] bg-[white] border-[#eae9e9] w-[100%] m-[auto] h-[fit-content] rounded-md pb-[0.7rem] '>
            <p className='ml-[0.45rem] mt-[-0.87rem] mb-[-0.15rem] bg-[white] w-[fit-content] px-[0.4rem]'>{name}</p>
            <input type={type} className='bg-[none] outline-none px-[1rem]  w-[97%]' />
        </div>
    )
}

export default Input