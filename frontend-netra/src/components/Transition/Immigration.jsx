import React from 'react'
import Bagpack from '../../assets/Bagpack.svg'
import ImmigrationRight from './ImmigrationRight'

const inputClass = "w-full p-3 border border-gray-700 rounded-lg bg-slate-800 text-white outline-none focus:border-violet-500 transition-colors"
const selectClass = "w-full p-3 border border-gray-700 rounded-lg bg-slate-800 text-white outline-none focus:border-violet-500 transition-colors"

const Immigration = () => {
    return (
        <div className='flex flex-col lg:flex-row bg-black min-h-screen'>

            <div className='w-full lg:w-1/3 lg:h-screen border-b-2 lg:border-b-0 lg:border-r-2 border-gray-900 overflow-y-auto bg-slate-900'>

                <div className='flex gap-2 items-center bg-violet-400 rounded-full border-b-2 border-black mx-auto w-fit px-4 py-2 my-1.5'>
                    <div className='text-center text-xl font-[font1] my-2.5 border-violet-950 rounded-2xl py-1 border-b-2'>
                        Visitor Details
                    </div>
                    <img src={Bagpack} className='w-10 h-10 invert-25' alt="Backpack" />
                </div>

                <div className='px-3 pb-6'>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Passport ID</h3>
                        <input
                            type="text"
                            name="passportNumber"
                            placeholder="Enter passport number"
                            className={inputClass}
                        />
                    </div>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Full Name</h3>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter full name as on passport"
                            className={inputClass}
                        />
                    </div>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Nationality</h3>
                        <input
                            type="text"
                            name="nationality"
                            placeholder="Enter your nationality"
                            className={inputClass}
                        />
                    </div>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Occupation</h3>
                        <input
                            type="text"
                            name="occupation"
                            placeholder="Enter your occupation"
                            className={inputClass}
                        />
                    </div>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Reason to Visit</h3>
                        <input
                            type="text"
                            name="reasonToVisit"
                            placeholder="Purpose of visit (tourism, work, etc.)"
                            className={inputClass}
                        />
                    </div>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Prior NE Visits</h3>
                        <input
                            type="text"
                            name="priorVisits"
                            placeholder="Enter number of previous visits"
                            className={inputClass}
                        />
                    </div>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Passport Expiry</h3>
                        <input
                            type="date"
                            name="passportExpiry"
                            className={inputClass}
                        />
                    </div>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Gender</h3>
                        <select name="gender" className={selectClass}>
                            <option>Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>DOB</h3>
                        <input
                            type="date"
                            name="dob"
                            className={inputClass}
                        />
                    </div>

                    <div className='my-3'>
                        <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Visa Type</h3>
                        <select name="visaType" className={selectClass}>
                            <option>Select visa type</option>
                            <option>Tourist</option>
                            <option>Business</option>
                            <option>Student</option>
                            <option>Research</option>
                            <option>Diplomatic</option>
                            <option>Transit</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-between w-full p-3 bg-gray-900 rounded-xl mt-4">
                        <h1 className='text-white text-sm'>Deploy as: DGCA Officer</h1>
                        <button className="p-2">
                            <img
                                className='w-8 h-8 object-cover'
                                src="/Image/fighter-plane.png"
                                alt="fighter plane"
                            />
                        </button>
                    </div>

                </div>
            </div>

            <ImmigrationRight />
            

            <ImmigrationRight />
            
        </div>
    )
}

export default Immigration