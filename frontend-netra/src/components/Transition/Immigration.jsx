import React from 'react'
import Bagpack from '../../assets/Bagpack.svg'
import ImmigrationRight from './ImmigrationRight'


const Immigration = () => {
    return (
        <div className='flex  bg-black h-screen  '>
            <div className='w-1/3 h-full  border-r-2 border-b-2 border-gray-900  overflow-y-scroll bg-slate-900  '>
                <div className='flex gap-0  items-center bg-violet-400 rounded-full   border-b-2 border-black mx-auto w-fit py-2 my-1.5   '>

                    <div className=' text-center  text-xl font-[font1] my-2.5 border-violet-950   rounded-2xl py-1 mx-10 border-b-2 gap-0 relative '>Visitor Details
                    </div>
                    <img src={Bagpack} className='w-10 h-10 mx-auto mb-2 invert-25   ' alt="Backpack invert  " />

                </div>

                <div>
                    <div className=''>
                        <h3 className='mx-1.5'>PASSPORT ID</h3>
                    <input
                        type="text"
                        name="passportNumber"
                        placeholder="Enter passport number"
                        className="w-full p-3 border border-gray-700 rounded-lg bg-slate-800 text-white outline-none"
                    />
                    </div>

                    <div className="field my-3.5">
                        <h3 className='mx-1.5'>Full Name</h3>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter full name as on passport"
                        />
                    </div>

                    <div className="field my-3.5">
                        <h3 className='mx-1.5'>Nationality</h3>
                        <input
                            type="text"
                            name="nationality"
                            placeholder="Enter your nationality"
                        />
                    </div>

                    <div className="field my-3.5">
                        <h3 className='mx-1.5'>Occupation</h3>
                        <input
                            type="text"
                            name="occupation"
                            placeholder="Enter your occupation"
                        />
                    </div>

                    <div className="field my-3.5">
                        <h3 className='mx-1.5'>Reason to Visit</h3>
                        <input
                            type="text"
                            name="reasonToVisit"
                            placeholder="Purpose of visit (tourism, work, etc.)"
                        />
                    </div>

                    <div className="field my-3.5">
                        <h3 className='mx-1.5'>Prior NE Visits</h3>
                        <input
                            type="text"
                            name="priorVisits"
                            placeholder="Enter number of previous visits"
                        />
                    </div>

                    <div className="field my-3.5">
                        <h3 className='mx-1.5'>Passport Expiry</h3>
                        <input
                            type="date"
                            name="passportExpiry"
                            placeholder="Select passport expiry date"
                        />
                    </div>

                    <div className="field my-3.5">
                        <h3 className='mx-1.5'>Gender</h3>
                        <select name="gender">
                            <option>Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="field my-3.5">
                        <h3 className='mx-1.5'>DOB</h3>
                        <input
                            type="date"
                            name="dob"
                        />
                    </div>

                    <div className="field my-3.5">
                        <h3 className='mx-1.5'>Visa Type</h3>
                        <select name="visaType">
                            <option>Select visa type</option>
                            <option>Tourist</option>
                            <option>Business</option>
                            <option>Student</option>
                            <option>Research</option>
                            <option>Diplomatic</option>
                            <option>Transit</option>
                        </select>
                    </div>

                    <div className="submit flex items-center w-[90%] m-1.5 p-2 bg-gray-900 rounded-[10px]">
                        <h1>Deploy as: DGCA Officer</h1>
                        <button className="icon-submit">
                            <img
                                className='w-[20%] object-cover'
                                src="/Image/fighter-plane.png"
                                alt="fighter plane"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <ImmigrationRight />

        </div>
    )
}

export default Immigration