import React from 'react'
import { Link } from 'react-router-dom'

const linkClass =
    'relative transition-all duration-300 ease-out hover:text-[rgb(211,253,80)] hover:-translate-y-1 hover:tracking-wider hover:drop-shadow-[0_0_8px_rgb(211,253,80)]'

const Navbar = () => {
    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-blue-500 p-3 gap-2'>

            <Link    className="
    text-4xl font-black font-serif tracking-widest text-cyan-300
    transition-[transform,letter-spacing,color,filter]
    duration-500
    ease-[cubic-bezier(0.215,0.61,0.355,1)]
    hover:text-violet-300
    hover:-translate-y-2
    hover:scale-105
    hover:tracking-[0.30em]
    hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]
  " to='/'>
                MOVINT
            </Link>

            <div className='font-medium text-[20px] flex flex-wrap items-center gap-5 text-gray-800'>
                <Link className={linkClass} to='/nationals'>Nationals</Link>
                <Link className={linkClass} to='/geo-tracker'>Geo Tracker</Link>
                <Link className={linkClass} to='/alerts'>Alerts</Link>
                <Link className={linkClass} to='/deployment'>Deployment +</Link>
            </div>

        </div>
    )
}

export default Navbar