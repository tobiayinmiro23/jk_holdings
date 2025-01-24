import React from 'react'

const Select = ({ name }) => {
    return (
        <div className='border-[1px] border-[#eae9e9] h-[fit-content] bg-[white] rounded-md pb-[0.7rem] '>
            <p className='ml-[0.7rem] mt-[-0.87rem] mb-[-0.15rem] bg-[white] w-[fit-content] px-[0.4rem] '>{name}</p>
            <select className='outline-none px-[1rem] py-[0.09rem] w-[97%]'>
                <option className=' sel px-[1rem] ' value="">--select option--</option>
                <option className='px-[1rem]  ]' value="">--select option--</option>
            </select>
        </div>
    )
}

export default Select