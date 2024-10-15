// import React from 'react'
import { Button as BBtn, Input, Select } from '../AllFiles'
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const AddPropertyModal = ({ name }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <React.Fragment>
                <div onClick={handleClickOpen} className='bg-[blue] w-[fit-content] cursor-pointer m-[auto] mt-[1rem] text-white px-[2.6rem] py-[0.67rem] rounded-md max-[1200px]:px-[0.3em] max-[1200px]:w-[90%] max-[883px]:mt-[2rem] max-[817px]:mt-[1.58rem] max-[770px]:mt-[1rem]'>
                    <div className='flex items-center justify-center'>
                        <AddBoxOutlinedIcon className='rounded-full' />
                        <p className=''>{name}</p>
                    </div>
                </div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <div className=' w-[30rem] m-[auto] py-[1.65rem] px-[2.1rem] pb-[2rem]  max-[493px]:w-[90%] max-[405px]:px-[1.3rem] max-[385px]:pt-[1.05rem]'>
                        <div className='flex items-center justify-between mb-[1.86rem]'>
                            <h1 className=' font-semibold text-[2rem]'>{name}</h1>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={(theme) => ({
                                    color: theme.palette.grey[500],
                                })}
                            >
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <Input name='Full name' mb='1.5rem' type='text' />
                        <Input name='Email address' mb='1.5rem' type='email' />
                        <Input name='Phone number' mb='1.5rem' type='text' />
                        <div className='mb-[2rem]'><Select name='Type of House' /></div>
                        <div className='mb-[2rem]'><Select name='Status' /></div>
                        <div className='w-[8.3rem]  ml-[auto]'><BBtn name={name} /></div>
                    </div>

                </BootstrapDialog>
            </React.Fragment>
        </div>

    )
}

export default AddPropertyModal
