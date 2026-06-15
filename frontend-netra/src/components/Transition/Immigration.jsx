import React from 'react'

const Immigration = () => {
  return (
    <div>
             <div className='flex h-[75%] '>
        <div className='w-1/2 h-full border-r-2  bg-green-500'>

          <p className="text-xl">PASSPORT CHECK & RETURNING VISITOR DETECTION</p>
          <div className="passport-row">
            <input
              type="text"
              name="passportNumber"
              placeholder="Enter passport number (e.g. E12345678)"

            />
            <p className="card-title">VISITOR DETAILS</p>


          </div>
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="As on passport"

            />
          </div>
          <div className="field">
            <label>Nationality</label>
            <input
              type="text"
              name="fullName"
              placeholder="As on passport"

            />
          </div>
          <div className="field">
            <label>Gender</label>
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
           
        
                <div className="submit flex items-center w-[90%]  m-1.5 p-2 bg-black rounded-[10px] ">
                    <h1>Deploy as: DGCA officer</h1>
                    <button className="icon-submit" >
                       <img className='w-[20%] object-cover' src="/Image/fighter-plane.png" alt="fighter plane" />
                    </button>
                </div>
            </div>
        
        
        <div>main2</div>
      </div>
    </div>
  )
}

export default Immigration