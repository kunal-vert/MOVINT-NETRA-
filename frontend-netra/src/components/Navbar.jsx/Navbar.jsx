import React from 'react'
import { Link } from 'react-router-dom'

const linkClass = 'hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'

const Navbar = () => {
    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-blue-500 p-3 gap-2'>

            <Link className='font-semibold text-2xl font-serif text-white' to='/'>
                MOVINT
            </Link>

            <div className='font-medium text-sm flex flex-wrap items-center gap-5 text-gray-800'>
                <Link className={linkClass} to='/nationals'>Nationals</Link>
                <Link className={linkClass} to='/geo-tracker'>Geo Tracker</Link>
                <Link className={linkClass} to='/alerts'>Alerts</Link>
                <Link className={linkClass} to='/deployment'>Deployment +</Link>
            </div>

        </div>
    )
}

export default Navbar