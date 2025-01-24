import React from 'react'

import Loader from './Loaders/Loader'
import PieChart from './Charts/PieChart'
import Guage from './Guage'

const AllComponent = () => {
    return (
        <div className=''>
            <Loader />
            <PieChart />
            <Guage />
        </div>
    )
}

export default AllComponent