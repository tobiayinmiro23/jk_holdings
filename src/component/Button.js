import React from 'react'

const Button = ({ name }) => {
    return (
        <button className='w-[100%] bg-[darkblue] text-white rounded-md py-[0.6rem] text-[1.2rem]'>{name}</button>
    )
}

export default Button