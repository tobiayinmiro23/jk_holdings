import React, { useContext, useState, useEffect } from 'react'
import { TenantsSummary, AllTenants, TenantsSummaryLoader, AllTenantsLoader } from '../AllFiles'
import { UsersContext } from '../context/UserContext'

const Tenants = () => {
    let userData = useContext(UsersContext)
    const [, , , , , , , , mobile,] = userData
    const [tenantsSummaryLoader, settenantsSummaryLoader] = useState(true)
    const [allTenantsLoader, setallTenantsLoader] = useState(true)

    const loaderTimer = (setloading, time) => {
        setTimeout(() => {
            setloading(false)
        }, time);
    }
    useEffect(() => {
        loaderTimer(settenantsSummaryLoader, 300)
        loaderTimer(setallTenantsLoader, 500)

    }, [])

    return (
        <div className='px-[0rem] py-[2rem] bg-[#f7f7f9]'>
            <div className='flex items-start justify-start w-[100%] max-[1006px]:block max-[883px]:flex max-[883px]:items-start max-[883px]:justify-start max-[883px]:w-[100%]  max-[849px]:block '>
                <div className='w-[76.5%] mr-[0%] max-[1006px]:w-[100%] max-[1006px]:m-[auto] max-[1006px]:mb-[2rem] max-[883px]:w-[76.5%] max-[883px]:mr-[0%] max-[883px]:ml-[0%] max-[883px]:mt-[0rem] max-[849px]:mb-[2rem] max-[849px]:w-[95.5%] max-[849px]:m-[auto]'>
                    {allTenantsLoader ? <AllTenantsLoader /> : <AllTenants />}
                </div>
                <div className='w-[22%] max-[1006px]:w-[94%] max-[1006px]:m-[auto]  max-[883px]:my-0 max-[883px]:ml-[0%] max-[883px]:w-[22%] max-[849px]:w-[95.5%] max-[849px]:m-[auto]'>
                    {tenantsSummaryLoader ? <TenantsSummaryLoader /> : <TenantsSummary />}

                </div>
            </div>
        </div>
    )
}

export default Tenants