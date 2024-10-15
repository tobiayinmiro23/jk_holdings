import React, { useEffect, useState, useContext } from 'react'
import { Card, CardLoader } from '../AllFiles'
import { loaderTimer } from '../helperFunction/loadingTimer'
import { UsersContext } from '../context/UserContext'


const Property = () => {
    let userData = useContext(UsersContext)
    const [, , , , , , , , mobile,] = userData
    const [cardLoader, setcardLoader] = useState(true)
    useEffect(() => {
        loaderTimer(setcardLoader, 1000)
    }, [])

    return (
        <div className={mobile && 'opacity-0'}>
            <div className='bg-[#f7f7f9] '>
                {cardLoader ? <CardLoader /> : <Card />}
            </div>
        </div>

    )
}

export default Property