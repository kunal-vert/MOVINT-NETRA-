import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between bg-blue-500 px-3.5 py-6 '>
            <div className='flex items-center gap-4'>
                {/* <img src={icon} alt="MOVINT icon" className='w-15 h-14 ' /> */}
                <h2 className='font-semibold text-2xl font-serif text-white '>MOVINT</h2>
            </div>
            <div className='font-medium text-[19px] flex items-center gap-3.5 text-gray-800'>
                <Link to='/nationals'><h3>Nationals</h3></Link>
                <Link to='/deployment'><h3>Deployment</h3></Link>
                <Link to='/geo-tracker'><h3>Geo Tracker</h3></Link>
                <Link to='/alerts'><h3>Alerts</h3></Link>

            </div>
        </div>
    )
}

export default Navbar