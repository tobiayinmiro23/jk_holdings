import React from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const AddBtn = ({ name }) => {
    return (
        <div className='bg-[blue] w-[fit-content] m-[auto] mt-[1rem] text-white px-[2.6rem] py-[0.67rem] rounded-md max-[1200px]:px-[0.3em] max-[1200px]:w-[90%] max-[883px]:mt-[2rem] max-[817px]:mt-[1.58rem] max-[770px]:mt-[1rem]'>
            <div className='flex items-center justify-center'>
                <AddBoxOutlinedIcon className='rounded-full' />
                <p className=''>{name}</p>
            </div>
        </div>
    )
}

export default AddBtn