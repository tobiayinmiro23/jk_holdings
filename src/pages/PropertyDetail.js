import React from 'react'
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import ElectricalServicesRoundedIcon from '@mui/icons-material/ElectricalServicesRounded';
import PowerRoundedIcon from '@mui/icons-material/PowerRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';



const ProperytDetail = () => {
    return (
        <div className='px-[2rem] bg-[#f7f7f9]  py-[1rem] max-[872px]:px-[1rem]'>
            <h1 className='text-[1.7rem] mb-[2rem] text-center'>34 Alcon road portharcourt</h1>
            <div className='w-[100%] m-[auto] rounded-md h-[30rem]'><img className='rounded-md' src="/image/5172658.jpg" alt="" /></div>
            <h2 className='text-[1.4rem] font-semibold my-[1.3rem]'>Facts about property</h2>
            <div className='flex items-center flex-wrap'>
                <div className='text-[darkblue] mr-[1.5rem] mb-[0.8rem] max-[511px]:mr-[2.5rem] max-[419px]:mr-[1.5rem] max-[385px]:mr-[1.2rem] '>
                    <div className='text-[1.2rem] font-semibold my-[0.3rem] max-[385px]:text-[1.03rem]'>Rooms (bed)</div>
                    <p className='max-[385px]:text-[0.97rem]' >2</p>
                </div>
                <div className='text-[darkblue] mr-[1.5rem] mb-[0.8rem] max-[511px]:mr-[2.5rem] max-[419px]:mr-[1.5rem] max-[385px]:mr-[1.2rem] '>
                    <div className='text-[1.2rem] font-semibold my-[0.3rem] max-[385px]:text-[1.03rem]'>Bathrooms (baths)</div>
                    <p className='max-[385px]:text-[0.97rem]' >2</p>
                </div>
                <div className='text-[darkblue] mr-[1.5rem] mb-[0.8rem] max-[511px]:mr-[2.5rem] max-[419px]:mr-[1.5rem] max-[385px]:mr-[1.2rem] '>
                    <div className='text-[1.2rem] font-semibold my-[0.3rem] max-[385px]:text-[1.03rem]'>Price Range</div>
                    <p className='max-[385px]:text-[0.97rem]' >N350k-N500k</p>
                </div>
                <div className='text-[darkblue] mr-[1.5rem] mb-[0.8rem] max-[511px]:mr-[2.5rem] max-[419px]:mr-[1.5rem] max-[385px]:mr-[1.2rem] '>
                    <div className='text-[1.2rem] font-semibold my-[0.3rem] max-[385px]:text-[1.03rem]'>Neighborhood</div>
                    <p className='max-[385px]:text-[0.97rem]' >Woji, Alcom</p>
                </div>
            </div>
            <div className='border-[1px] border-[#a6a6f9] my-[1.9rem]'></div>
            <h2 className='text-[1.4rem] font-semibold mb-[1.3rem]'>Property Description</h2>
            <p className='text-[darkblue] mb-[3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex blanditiis quasi laborum tempora debitis enim quos mollitia sunt obcaecati voluptas veritatis. Quo optio rerum repellendus totam! Deserunt, nesciunt laboriosam! Nostrum, consectetur neque delectus ullam cumque, fuga soluta est repellat sapiente dolorem a eos esse vitae tempora! Animi modi natus enim aspernatur sequi culpa dicta fuga voluptatum repellat tempore molestias ducimus quam corporis quidem ratione sunt, debitis at, sapiente earum quae suscipit? Repellat laborum aspernatur tenetur similique, ut pariatur adipisci aperiam reprehenderit, labore quisquam quae natus incidunt. Cum sit sint excepturi corrupti fugit veritatis dolor?</p>
            <div className='border-[1px] border-[#6060f8] my-[1.9rem]'></div>
            <h2 className='text-[1.4rem] font-semibold mb-[1.3rem]'>Property Features</h2>
            <div className='flex items-center flex-wrap mb-[4rem]'>
                <div className='flex items-center mr-[3.5rem] mb-[1.85rem] max-[915px]:mr-[2.5rem] max-[415px]:mr-[1.5rem]'>
                    <DirectionsCarRoundedIcon className='mr-[0.85rem] text-[darkblue] max-[415px]:mr-[0.34rem]' />
                    <p className='text-[darkblue]'>Car Park</p>
                </div>
                <div className='flex items-center mr-[3.5rem] mb-[1.85rem] max-[915px]:mr-[2.5rem] max-[415px]:mr-[1.5rem]'>
                    <ElectricalServicesRoundedIcon className='mr-[0.85rem] text-[darkblue] max-[415px]:mr-[0.34rem]' />
                    <p className='text-[darkblue]'>Furnished</p>
                </div>
                <div className='flex items-center mr-[3.5rem] mb-[1.85rem] max-[915px]:mr-[2.5rem] max-[415px]:mr-[1.5rem]'>
                    <MapRoundedIcon className='mr-[0.85rem] text-[darkblue] max-[415px]:mr-[0.34rem]' />
                    <p className='text-[darkblue]'>Accessible Road</p>
                </div>
                <div className='flex items-center mr-[3.5rem] mb-[1.85rem] max-[915px]:mr-[2.5rem] max-[415px]:mr-[1.5rem]'>
                    <GppGoodRoundedIcon className='mr-[0.85rem] text-[darkblue] max-[415px]:mr-[0.34rem]' />
                    <p className='text-[darkblue]'>24/7 Security</p>
                </div>
            </div>
            <div className='border-[1px] border-[#6060f8] my-[1.9rem]'></div>


        </div>
    )
}

export default ProperytDetail