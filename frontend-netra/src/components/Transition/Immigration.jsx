import React from 'react'
import Bagpack from '../../assets/Bagpack.svg'


const Immigration = () => {
    return (
        <div className='flex  bg-black h-screen  '>
            <div className='w-1/3 h-full  border-r-2 border-b-2 border-gray-900  overflow-y-scroll bg-slate-900  '>
                <div className='flex gap-0  items-center bg-violet-400 rounded-full   border-b-2 border-black mx-auto w-fit py-2 my-1.5  '>

                    <div className=' text-center  text-3xl font-[font1] my-2.5   rounded-2xl py-1 mx-10 border-b-2 gap-0 '>Visitor Details
                    </div>
                    <img src={Bagpack} className='w-16 h-16 mx-auto mb-2 invert-25 ' alt="Backpack invert " />

                </div>

                <div className="passport-row ">
                    <p className="text-[20px] font-[font2] ">PASSPORT ID</p>
                    <input
                        className=' '
                        type="text"
                        name="passportNumber"
                        placeholder="Enter passport number (e.g. E12345678)"

                    />



                </div>
                <div className="field my-3.5">
                    <h3>Full Name</h3>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="As on passport"

                    />
                </div>
                <div className="field  my-3.5 ">
                    <h3 className=''>Nationality</h3>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="As on passport"

                    />
                </div>
                <div className="field my-3.5">
                    <h3>Gender</h3>
                    <select name="gender" >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="field">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"

                    />
                </div>
                <div className="field">
                    <label>Visa Type</label>
                    <select name="visaType" >
                        <option>Tourist</option>
                        <option>Business</option>
                        <option>Student</option>
                        <option>Research</option>
                        <option>Diplomatic</option>
                        <option>Transit</option>
                    </select>
                </div>
                <div className="field">
                    <label>Gender</label>
                    <select name="gender" >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>


                <div className="submit flex items-center w-[90%]  m-1.5 p-2 bg-gray-900 rounded-[10px] ">
                    <h1>Deploy as: DGCA officer</h1>
                    <button className="icon-submit" >
                        <img className='w-[20%] object-cover' src="/Image/fighter-plane.png" alt="fighter plane" />
                    </button>
                </div>
            </div>
            <div className='h-full bg-red-500 w-2/3'> </div>

        </div>
    )
}

export default Immigration