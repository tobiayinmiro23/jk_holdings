import React from 'react'
import { Button, Input, Select, TextArea } from '../AllFiles'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const AddProperty = () => {
    return (
        <div className=' w-[100%] bg-[#f7f7f9] py-[1.65rem] '>
            <div className=' w-[97%] bg-[white] m-[auto] mt-[2rem] py-[1.65rem] px-[2.1rem] pb-[2rem] rounded-md max-[490px]:px-[1.3rem] max-[340px]:px-[0.7rem]'>
                <h1 className=' font-semibold text-[2rem] mb-[0.3rem]  '>Add Property</h1>
                <div className='mb-[2.2rem]'><Input mb='0rem' name='Title' type='text' /></div>
                <div className='flex items-center justify-between mb-[2.2rem]'>
                    <div className='w-[48%]'><Select name='Type of House' /></div>
                    <div className='w-[48%]'><Select name='Category' /></div>
                </div>
                <div className='flex items-center justify-between mb-[2.2rem]'>
                    <div className='w-[30%]'><Input mb='0rem' name='Bedrooms' type='text' /></div>
                    <div className='w-[30%]'><Input mb='0rem' name='Bathrooms' type='text' /></div>
                    <div className='w-[30%]'><Input mb='0rem' name='Toilet' type='text' /></div>
                </div>
                <div className='mb-[2.2rem]'><Input mb='0rem' name='Location' type='text' /></div>
                <div className='flex items-center justify-between mb-[2.2rem]'>
                    <div className='w-[30%]'><Select name='Price' /></div>
                    <div className='w-[30%]'><Input mb='0rem' name='Amount' type='text' /></div>
                    <div className='w-[30%]'><Select name='Troiler' /></div>
                </div>
                <div className='mb-[2.2rem]'><TextArea name='description' /></div>
                <div className='mb-[2.2rem]'>
                    <p>Upload Picture</p>
                    <div className='w-[100%] bg-[#f7f7f9] py-[3.4rem] rounded-md'>
                        <div className='border-[3px] w-[50%] cursor-pointer m-[auto] rounded-lg border-dashed border-[#a3a1a1]'>
                            <div className='flex items-center justify-center py-[0.5rem]' >
                                <CloudUploadOutlinedIcon />
                                <p className='ml-[0.2rem]'>Choose Files</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <button className='bg-[darkblue] text-white rounded-md py-[0.6rem] px-[1.2rem] text-[1rem]'>Cancel</button>
                    <button className='bg-[white] border-[darkblue] ml-[1.2rem] border-[1px] rounded-md py-[0.6rem] px-[1.2rem] text-[1rem] text-[darkblue]'>Add Property</button>

                </div>
                {/* <div className='w-[100%] m-[auto]'><Button name='Login' /></div> */}
            </div>
        </div>
    )
}

export default AddProperty