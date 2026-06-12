import React from 'react'
import icon from '../../assets/icon.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between bg-red-600 py-20'>
            <div className='flex items-center gap-4 '>
                <img src={icon} alt="MOVINT icon" className='w-11 h-10 bg-black' />
                <h2 className='text-white font-semibold text-2xl font-serif '>MOVINT</h2>
            </div>
            <div className='text-white font-medium text-[20px] flex items-center gap-3.5'>
                <h3>Nationals</h3>
                <h3>Deployment</h3>
                <h3>Geo Tracker</h3>
                <h3>Alerts</h3>
                <h3>Liaison</h3>
            </div>

        </div>
    )
}

export default Navbar