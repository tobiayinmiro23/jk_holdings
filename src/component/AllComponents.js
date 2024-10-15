import React from 'react'
import SummaryCard from './Loaders/SummaryCard'
import RentDue from './Loaders/RentDue'
import Card from './Loaders/Card'
import NewProperties from './Loaders/NewProperties'
import TenantsSummary from './Loaders/TenantsSummary'
import PropertiesForRent from './Loaders/PropertiesForRent'
import OverviewAnalytics from './Loaders/OverviewAnalytics'
import RevenueAnalytics from './Loaders/RevenueAnalytics'
import RevenueAnalytics2 from './Loaders/RevenueAnalytics2'
import AllTenants from './Loaders/AllTenants'
import Loader from './Loaders/Loader'
import Guage from './Guage'

const AllComponent = () => {
    return (
        <div className=''>
            <Card />
            <Loader />
            <AllTenants />
            <RevenueAnalytics2 />
            <RevenueAnalytics />
            <OverviewAnalytics />
            <PropertiesForRent />
            <TenantsSummary />
            <NewProperties />
            <RentDue />
            <SummaryCard />
            {/* <Guage /> */}
        </div>
    )
}

export default AllComponent