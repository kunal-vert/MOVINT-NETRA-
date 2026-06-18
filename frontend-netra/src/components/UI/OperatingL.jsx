import React from 'react'
import { Link } from 'react-router-dom'

const roleLink = 'bg-gray-600 font-[font2] text-sm border-white border-2 text-center px-2 py-1.5 rounded-full hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'

const OperatingL = () => {
    return (
        <div className="flex flex-col items-start gap-2 p-3">

            <Link
                to='/deployment/immigration'
                className='text-xl px-2 py-1.5 font-[font1] text-center text-blue-400 bg-gray-500 rounded-full hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>
                Operating As:
            </Link>

            <div className="flex flex-wrap gap-2">
                <Link to='/deployment/immigration' className={roleLink}>Airport Immigration</Link>
                <Link to='/deployment/checkpost' className={roleLink}>Checkpost Officer</Link>
                <Link to='/deployment/hotel' className={roleLink}>Hotel Desk</Link>
                <Link to='/deployment/toll' className={roleLink}>Toll Operator</Link>
                <Link to='/deployment/borderguard' className={roleLink}>Border Guard</Link>
            </div>

        </div>
    )
}

export default OperatingL