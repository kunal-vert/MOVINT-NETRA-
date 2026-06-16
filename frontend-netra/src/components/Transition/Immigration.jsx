import React from 'react'


const Immigration = () => {
    return (
        <div className='flex  bg-black  '>
             <div className='w-1/2 h-[85%]  border-r-2 border-b-2 border-gray-900 my-3  '>

                    <p className="text-[20px] font-[font1] ">PASSPORT ID</p>
                    <div className="passport-row ">
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

            
        </div>
    )
}

export default Immigration