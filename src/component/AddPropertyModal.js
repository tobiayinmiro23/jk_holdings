// import React from 'react'
import { Button as BBtn, Input, Select, PopUpMessageWithAutoCancel } from '../AllFiles'
import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import addImg from '../assets/add (1).png'
import { displayPopUpMessage, cancelPopUP } from '../helperFunction/popUp';


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

    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('')

    const handleButton = () => {
        displayPopUpMessage('tenant successfully added', setpopUpMsg, setpopUpType, setdisplayPopUp, true)
        cancelPopUP(setdisplayPopUp, 500)
    }
    return (
        <div className=''>

            <React.Fragment >
                <div onClick={handleClickOpen} className='bg-[blue] w-[fit-content] cursor-pointer m-[auto] mt-[1rem] text-white px-[2.6rem] py-[0.67rem] rounded-md max-[1200px]:px-[0.3em] max-[1200px]:w-[90%] max-[883px]:mt-[2rem] max-[817px]:mt-[1.58rem] max-[770px]:mt-[1rem]'>
                    <div className='flex items-center justify-center'>
                        <div className='w-[1.3rem] h-[1.3rem] mr-[0.2rem]'><img src={addImg} alt="" /></div>
                        <p className=''>{name}</p>
                    </div>
                </div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <div className='w-[30rem] m-[auto] py-[1.65rem] px-[2.1rem] pb-[2rem] max-[547px]:w-[28rem] max-[513px]:w-[25rem] max-[465px]:w-[22rem] max-[465px]:px-[1.3rem] max-[416px]:w-[19rem] max-[385px]:pt-[1.05rem] max-[369px]:w-[16rem] max-[323px]:w-[15rem] max-[303px]:w-[14rem]'>
                        <div className='flex items-center justify-between mb-[1.86rem]'>
                            <h1 className=' font-semibold text-[2rem] max-[447px]:text-[1.7rem] max-[370px]:text-[1.52rem]'>{name}</h1>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={(theme) => ({
                                    color: 'black'
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
                        <div className='w-[8.3rem] ml-[auto] max-[370px]:w-[100%]' onClick={handleButton}><BBtn name={name} /></div>
                    </div>

                </BootstrapDialog>
            </React.Fragment>
            <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={1100} />

        </div>

    )
}

export default AddPropertyModal
