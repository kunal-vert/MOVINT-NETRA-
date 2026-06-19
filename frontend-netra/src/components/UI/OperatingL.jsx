import React from 'react'
import { Link } from 'react-router-dom'





const roleLink1 =
    'text-[20px]  bg-gray-600 font-[font2] text-sm border-white border-2 text-center px-2 py-1.5 rounded-full transform-gpu transition-all duration-300 ease-out hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)] hover:-translate-y-2 hover:translate-x-2 hover:rotate-6 hover:scale-105'



const roleLink2 =
    ' text-[20px] bg-gray-600 font-[font2] text-sm border-white border-2 text-center px-2 py-1.5 rounded-full transform-gpu transition-all duration-300 ease-out hover:text-cyan-300 hover:border-cyan-300 hover:-translate-y-2 hover:-translate-x-2 hover:-rotate-6 hover:scale-105'




const OperatingL = () => {
    return (
        <div className="flex flex-col items-start gap-2 p-3 shrink-0 ">

            <Link
                to='/deployment/immigration'
                className='text-xl px-2 py-1.5 font-[font1] text-center text-blue-400 bg-gray-500 rounded-full hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>
                Operating As:
            </Link>
  

            <div className="flex flex-wrap gap-4  ">
                <Link to='/deployment/immigration' className={roleLink1}>Airport Immigration</Link>
                <Link to='/deployment/checkpost' className={roleLink2}>Checkpost Officer</Link>
                <Link to='/deployment/hotel' className={roleLink1}>Hotel Desk</Link>
                <Link to='/deployment/toll' className={roleLink2}>Toll Operator</Link>
                <Link to='/deployment/borderguard' className={roleLink1}>Border Guard</Link>
            </div>

        </div>
    )
}

export default OperatingL