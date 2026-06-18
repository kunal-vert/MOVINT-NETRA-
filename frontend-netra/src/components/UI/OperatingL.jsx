import React from 'react'
import { Link } from 'react-router-dom'

const OperatingL = () => {
    return (
        <div className="flex items-center gap-2.5 p-7 ">

            <Link to='/deployment/immigration'
                className='text-3xl px-2 py-2 font-[font1] text-center text-blue-400 bg-gray-500 rounded-full hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>
                Operating As:
            </Link>

            <div className="flex items-center gap-2">
                <Link to='/deployment/immigration' className='bg-gray-600 font-[font2] text-xl border-white border-2 text-center px-2 py-1.5 rounded-full hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>Airport Immigration</Link>
                <Link to='/deployment/checkpost'   className='bg-gray-600 font-[font2] text-xl border-white border-2 text-center px-2 py-1.5 rounded-full hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>Checkpost Officer</Link>
                <Link to='/deployment/hotel'       className='bg-gray-600 font-[font2] text-xl border-white border-2 text-center px-2 py-1.5 rounded-full hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>Hotel Desk</Link>
                <Link to='/deployment/toll'        className='bg-gray-600 font-[font2] text-xl border-white border-2 text-center px-2 py-1.5 rounded-full hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>Toll Operator</Link>
                <Link to='/deployment/borderguard' className='bg-gray-600 font-[font2] text-xl border-white border-2 text-center px-2 py-1.5 rounded-full hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>Border Guard</Link>
            </div>

        </div>
    )
}

export default OperatingL