import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between bg-blue-500  py-6 '>
            <div className='flex items-center gap-4'>
                {/* <img src={icon} alt="MOVINT icon" className='w-15 h-14 ' /> */}
                <Link to='/'><h2 className='font-semibold text-2xl font-serif text-white '>MOVINT</h2>
                </Link>
            </div>
            <div className='font-medium text-[19px] flex items-center gap-3.5 text-gray-800'>
                <Link to='/nationals'>Nationals</Link>
                <Link to='/deployment'>Deployment</Link>
                <Link to='/geo-tracker'>Geo Tracker</Link>
                <Link to='/alerts'>Alerts</Link>

            </div>
        </div>
    )
}

export default Navbar