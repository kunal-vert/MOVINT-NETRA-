import React from 'react'
import { Link } from 'react-router-dom'


const linkClass2 =
    'relative transition-all duration-400 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:text-cyan-300 hover:-translate-y-1 hover:-translate-x-1 hover:scale-125 hover:font-semibold hover:tracking-wide hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]'

const linkClass1 =
    'text-xl relative transition-all duration-400 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:text-lime-300 hover:-translate-y-1 hover:translate-x-1 hover:scale-125 hover:font-semibold hover:tracking-wide hover:drop-shadow-[0_0_10px_rgba(190,242,100,0.9)] '

const Navbar = () => {
    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-blue-500 p-3 gap-2'>

            <Link className="
    text-4xl font-black font-serif tracking-widest text-cyan-300 transition-[transform,letter-spacing,color,filter] duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]  hover:text-violet-300 hover:-translate-y-2 hover:scale-105 hover:tracking-[0.30em]
    hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]
  " to='/'>
                MOVINT
            </Link>

            <div className='font-medium text-[20px] flex flex-wrap items-center gap-8 text-gray-800'>
                <Link className={linkClass1} to='/nationals'>Nationals</Link>
                <Link className={linkClass2} to='/geo-tracker'>Geo Tracker</Link>
                <Link className={linkClass1} to='/alerts'>Alerts</Link>
                <Link className={linkClass2} to='/deployment'>Deployment +</Link>
            </div>

        </div>
    )
}

export default Navbar