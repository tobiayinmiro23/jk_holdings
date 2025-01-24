import React, { useContext, useState, useEffect } from 'react'
import { RentDue, SummaryCard, NewProperties, RevenueAnalytics2, RentDueLoader, SummaryCardLoader, NewPropertiesLoader, RevenueAnalytics2Loader } from '../AllFiles'
import { UsersContext } from '../context/UserContext'
import { loaderTimer } from '../helperFunction/loadingTimer'

const Dashboard = () => {
    let userData = useContext(UsersContext)
    const [, , , , , , , , mobile,] = userData
    const [rentDueLoader, setRentDueLoader] = useState(true)
    const [summaryCardLoader, setSummaryCardLoader] = useState(true)
    const [newPropertiesLoader, setNewPropertiesLoader] = useState(true)
    const [revenueAnalytics2Loader, setRevenueAnalytics2Loader] = useState(true)


    useEffect(() => {
        loaderTimer(setRentDueLoader, 1000)
        loaderTimer(setSummaryCardLoader, 230)
        loaderTimer(setNewPropertiesLoader, 800)
        loaderTimer(setRevenueAnalytics2Loader, 700)
    }, [])

    return (
        // <div className={mobile && 'opacity-0'}>
        <div className='px-[2rem] bg-[#f7f7f9] max-[1226px]:px-[0.8rem]'>
            <h1 className='text-[1.9rem] font-semibold mb-[1.2rem]'>Analytics</h1>
            {summaryCardLoader ? <SummaryCardLoader /> : <SummaryCard />}
            <div className='flex items-start mb-[2rem] justify-start w-[100%] max-[1006px]:block max-[883px]:flex max-[883px]:items-start max-[883px]:justify-start max-[883px]:w-[100%]  max-[639px]:block '>
                <div className='w-[73%] mr-[2%] max-[1006px]:w-[100%] max-[1006px]:m-[auto] max-[1006px]:mb-[2rem] max-[883px]:w-[75%] max-[883px]:mr-[2%] max-[770px]:w-[65%] max-[639px]:w-[100%]'>
                    {revenueAnalytics2Loader ? <RevenueAnalytics2Loader /> : <RevenueAnalytics2 />}
                </div>
                <div className='w-[23%]  max-[1006px]:w-[100%] max-[1006px]:m-[auto] max-[1006px]:mb-[2rem] max-[883px]:m-0 max-[883px]:w-[22%] max-[770px]:w-[33%] max-[639px]:w-[100%] max-[639px]:mb-[2rem]'>
                    {rentDueLoader ? <RentDueLoader /> : <RentDue />}
                </div>
            </div>
            <div>{newPropertiesLoader ? <NewPropertiesLoader /> : <NewProperties />}</div>
        </div>
        // </div>

    )
}

export default Dashboard