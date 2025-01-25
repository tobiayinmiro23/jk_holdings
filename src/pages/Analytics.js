import React, { useContext, useState, useEffect } from 'react'
import { OverviewAnalytics, PropertiesForRent, RevenueAnalytics, TenantsSummary, OverviewAnalyticsLoader, PropertiesForRentLoader, RevenueAnalyticsLoader, TenantsSummaryLoader } from '../AllFiles'
import { loaderTimer } from '../helperFunction/loadingTimer'

import { UsersContext } from '../context/UserContext'
const Analytics = () => {
    let userData = useContext(UsersContext)
    const [, , , , , , , , mobile,] = userData
    const [overviewAnalyticsLoader, setoverviewAnalyticsLoader] = useState(true)
    const [propertiesForRentLoader, setpropertiesForRentLoader] = useState(true)
    const [revenueAnalyticsLoader, setrevenueAnalyticsLoader] = useState(true)
    const [tenantsSummaryLoader, settenantsSummaryLoader] = useState(true)

    useEffect(() => {
        loaderTimer(setoverviewAnalyticsLoader, 600)
        loaderTimer(setpropertiesForRentLoader, 400)
        loaderTimer(setrevenueAnalyticsLoader, 200)
        loaderTimer(settenantsSummaryLoader, 300)
    }, [])

    return (
        <div className={mobile && 'hidden'}>
            <div className='bg-[#f7f7f9] px-[2rem] pt-[0.6rem] max-[1226px]:px-[0.8rem]'>
                <h1 className='text-[1.9rem] font-semibold mb-[1.2rem] '>Analytics</h1>
                <div className='flex items-center mb-[2rem] max-[1006px]:block max-[883px]:flex max-[883px]:items-center max-[770px]:block'>
                    <div className='w-[50%] mr-[2%] max-[1006px]:w-[100%] max-[1006px]:m-[auto] max-[1006px]:mb-[2rem] max-[883px]:w-[50%] max-[883px]:mr-[2%] max-[883px]:mb-[0rem] max-[770px]:w-[100%] max-[770px]:m-[auto] max-[770px]:mb-[2rem]'>
                        {overviewAnalyticsLoader ? <OverviewAnalyticsLoader /> : <OverviewAnalytics />}
                    </div>
                    <div className='w-[48%] max-[1006px]:w-[100%] max-[1006px]:m-[auto] max-[883px]:w-[48%] max-[883px]:m-[auto] max-[770px]:w-[100%] max-[770px]:m-[auto] '>
                        {propertiesForRentLoader ? <PropertiesForRentLoader /> : <PropertiesForRent />}

                    </div>
                </div>
                <div className='flex items-start justify-start w-[100%] max-[1006px]:block max-[883px]:flex max-[883px]:items-start max-[883px]:justify-start max-[883px]:w-[100%]  max-[639px]:block '>
                    <div className='w-[75%] mr-[2%] max-[1226px]:w-[75%] max-[1226px]:mr-[2%] max-[1006px]:w-[100%] max-[1006px]:m-[auto] max-[1006px]:mb-[2rem] max-[883px]:w-[75%] max-[883px]:ml-[0%] max-[883px]:mr-[1.2%] max-[770px]:w-[60%] max-[639px]:w-[100%]'>
                        {revenueAnalyticsLoader ? <RevenueAnalyticsLoader /> : <RevenueAnalytics />}
                    </div>
                    <div className='w-[22%] max-[1226px]:w-[22.4%] max-[1006px]:w-[100%] max-[1006px]:m-[auto]  max-[883px]:my-0  max-[883px]:w-[22%] max-[770px]:w-[33%] max-[639px]:w-[100%]'>
                        {tenantsSummaryLoader ? <TenantsSummaryLoader /> : <TenantsSummary />}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Analytics
