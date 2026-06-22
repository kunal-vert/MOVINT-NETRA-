import React, { useState } from 'react'
import Bagpack from '../../assets/Bagpack.svg'
import ImmigrationRight from './ImmigrationRight'
import visitors from '../Data/visitors'

const inputClass = "w-full p-3 border border-gray-700 rounded-lg bg-slate-800 text-white outline-none focus:border-violet-500 transition-colors"
const selectClass = "w-full p-3 border border-gray-700 rounded-lg bg-slate-800 text-white outline-none focus:border-violet-500 transition-colors"

const Immigration = () => {

const SubmitDeploy = () =>{

}



    return (
        <div className='flex flex-col lg:flex-row bg-black h-full min-h-0'>

            <div className='w-[50%] shrink-0 lg:w-1/3 h-full min-h-0 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-900 overflow-y-auto scrollbar-hide bg-slate-900'>
                {/* <div
  className="absolute inset-0 opacity-10 bg-no-repeat bg-top bg-contain pointer-events-none"
  style={{
    backgroundImage: "url('https://images-platform.99static.com//Y4V9vP3dM4rGxM4w6kQ8fXxW1n8=/0x0:1000x1000/fit-in/500x500/projects-files/123/12345/1234567/logo.png')"
  }}
></div> */}

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

                    <div className="flex items-center justify-between w-full p-4 bg-sky-900 rounded-xl mt-4">

                        <h1 onClick={SubmitDeploy} className="text-white text-base font-semibold tracking-wide">
                            Deploy as: DGCA Officer
                        </h1>

                        <button className="p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-sky-700 hover:scale-110 active:scale-95">
                            <img
                                className="w-9 h-9 object-cover transition-transform duration-300 hover:-translate-y-1 hover:rotate-6"
                                src="/Image/fighter-plane.png"
                                alt="fighter plane"
                            />
                        </button>

                    </div>

                </div>
            </div>
            <div className='flex-1 min-h-0 grid gap-4 p-4 content-start overflow-y-auto'
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))' }}>
                {visitors.map((VisitorsData) => (
                    <ImmigrationRight key={VisitorsData.id} data={VisitorsData} />
                ))}
            </div>
        </div>
    )
}

export default Immigration