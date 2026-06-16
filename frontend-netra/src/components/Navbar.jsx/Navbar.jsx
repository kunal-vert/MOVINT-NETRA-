import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='flex items-center justify-between bg-blue-500 p-3.5 '>
            <div className='flex items-center '>


                <Link className='font-semibold text-3xl font-serif text-white  ' to='/'>MOVINT
                
                </Link>
            </div>
            <div className='font-medium text-[19px] flex items-center gap-3.5 text-gray-800 '>
                <Link className=' hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]' to='/nationals'>Nationals</Link>
                <Link className=' hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]' to='/geo-tracker'>Geo Tracker</Link>
                <Link className=' hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]' to='/alerts'>Alerts</Link>
                <Link className=' hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]' to='/deployment'>Deployment +</Link>

            </div>
        </div>
    )
}

export default Navbar