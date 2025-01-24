import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const AllTenants = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const tenantHeading = [
        {
            id: 1,
            text: 'Tenant Name'
        },
        {
            id: 2,
            text: 'Type of Apartment '
        },
        {
            id: 3,
            text: 'Location'
        },
        {
            id: 4,
            text: 'Status'
        },
        {
            id: 5,
            text: 'Phone Number'
        },
        {
            id: 6,
            text: ''
        },
    ]

    const tenantBody = [
        {
            id: 1,
            status: 'due',
            name: 'Akim Kazeem',
            img: '/image/7.jpeg',
            type: '2 bedroom flat Lorem ipsum dolor sit amet consectetur.',
            location: 'GRA, Port Hartcourt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, consequatur fugiat',
            number: '+23430120947 Lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            status: 'due',
            name: 'Akim Kazeem',
            img: '/image/7.jpeg',
            type: '2 bedroom flat Lorem ipsum dolor sit amet consectetur.',
            location: 'GRA, Port Hartcourt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, consequatur fugiat',
            number: '+23430120947 Lorem ipsum dolor sit amet'
        },

    ]
    return (
        <div className='px-[1.3rem] w-[100%] m-[auto]  max-[883px]:px-[0.6rem] max-[849px]:px-0 max-[651px]:overflow-scroll max-[651px]:px-[0rem] max-[651px]:w-[100%]'>
            <table className='max-[651px]:w-[50rem]'>
                <thead className=' bg-[darkblue] text-white'>
                    <tr className='text-start'>
                        {tenantHeading.map(item => {
                            return <th key={item.id} className='text-start py-[0.75rem] pl-[0.75rem]'>{item.text}</th>

                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        tenantBody.map(item => {
                            return <tr key={item.id} className='border-[1px] bg-[white] border-[#eae9e9]'>
                                <td className='flex items-center px-[0.5rem] py-[0.75rem]'>
                                    <div className='rounded-full w-[2.3rem] ml-[0.32rem] h-[2.3rem]'><img className='rounded-full' src={item.img} alt="" /></div>
                                    <p className='ml-[0.32rem]'>{item.name}</p>
                                </td>
                                <td className='px-[0.5rem] py-[0.75rem] text-[#534f4f]'>{item.type}</td>
                                <td className='px-[0.5rem] py-[0.75rem] text-[#534f4f]'>{item.location}</td>
                                <td className=''>
                                    <div className='bg-[blue] w-[fit-content] text-white py-[0.15rem] px-[0.7rem] rounded-md'>
                                        <p>{item.status}</p>
                                    </div>
                                </td>
                                <td className='px-[0.5rem] py-[0.75rem] text-[#534f4f]'>{item.number}</td>
                                <td className='px-[0.5rem] py-[0.75rem]'>
                                    <MoreVertIcon
                                        className=' cursor-pointer'
                                        i d="demo-positioned-button"
                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    />
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllTenants