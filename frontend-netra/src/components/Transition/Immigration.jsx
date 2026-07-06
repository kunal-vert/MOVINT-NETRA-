import React, { useState } from 'react'
import Bagpack from '../../assets/Bagpack.svg'
import ImmigrationRight from './ImmigrationRight'
// import visitors from '../Data/visitors'

const inputClass = "w-full p-3 border border-gray-700 rounded-lg bg-slate-800 text-white outline-none focus:border-violet-500 transition-colors"
const selectClass = "w-full p-3 border border-gray-700 rounded-lg bg-slate-800 text-white outline-none focus:border-violet-500 transition-colors"

const ErrorInputClass = "border-red-500"
const normalInputClass = "border-gray-700"

const EmptyForm = {
    passportNumber: '',
    fullName: '',
    nationality: '',
    occupation: '',
    reasonToVisit: '',
    priorVisits: '',
    passportExpiry: '',
    gender: '',
    dob: '',
    visaType: ''
}
const Immigration = () => {


    const [Form, setForm] = useState(EmptyForm)
    const [Details, setDetails] = useState([])
    const [Error, setError] = useState('')





    const ChangeHandler = (e) => {
        const { name, value } = e.target
        setForm({ ...Form, [name]: value })
        setError('')
    }

    const SubmitDeploy = () => {
        if (
            Form.passportNumber.trim() === '' ||
            Form.fullName.trim() === '' ||
            Form.nationality.trim() === '' ||
            Form.occupation.trim() === '' ||
            Form.reasonToVisit.trim() === '' ||
            Form.priorVisits.trim() === '' ||
            Form.passportExpiry === '' ||
            Form.gender === '' ||
            Form.dob === '' ||
            Form.visaType === ''
        ) {
            setError('⚠️ All fields are required before deploying!')
            return
        }
        setDetails([...Details, { ...Form, id: Date.now() }])
        setForm(EmptyForm)
        setError('')
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

              
                    <div className='text-center text-xl font-[font1] my-2.5 border-violet-950 rounded-2xl py-1 border-b-2 '>
                        Visitor Details
                    </div>
                    
                

                <div className='px-3 pb-6'>
                    {Error && (
                        <div className='bg-red-600 text-white p-3 rounded mb-4 animate-bounce'>
                            {Error}
                        </div>
                    )}
                    <form action=""
                        onSubmit={(e) => e.preventDefault()}

                    >


                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Passport ID</h3>
                            <input
                                type="text"
                                name="passportNumber"
                                placeholder="Enter passport number"
                                className={`${inputClass} ${Error && !Form.passportNumber.trim() ? ErrorInputClass : normalInputClass}`}
                                value={Form.passportNumber}
                                onChange={ChangeHandler}
                            />
                        </div>

                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Full Name</h3>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter full name as on passport"
                                className={`${inputClass} ${Error && !Form.fullName.trim() ? ErrorInputClass : normalInputClass}`}
                                value={Form.fullName}
                                onChange={ChangeHandler}
                            />
                        </div>

                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Nationality</h3>
                            <input
                                type="text"
                                name="nationality"
                                placeholder="Enter your nationality"
                                className={`${inputClass} ${Error && !Form.nationality.trim() ? ErrorInputClass : normalInputClass}`}
                                value={Form.nationality}
                                onChange={ChangeHandler}
                            />
                        </div>

                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Occupation</h3>
                            <input
                                type="text"
                                name="occupation"
                                placeholder="Enter your occupation"
                                className={`${inputClass} ${Error && !Form.occupation.trim() ? ErrorInputClass : normalInputClass}`}
                                value={Form.occupation}
                                onChange={ChangeHandler}
                            />
                        </div>

                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Reason to Visit</h3>
                            <input
                                type="text"
                                name="reasonToVisit"
                                placeholder="Purpose of visit (tourism, work, etc.)"
                                className={`${inputClass} ${Error && !Form.reasonToVisit.trim() ? ErrorInputClass : normalInputClass}`}
                                value={Form.reasonToVisit}
                                onChange={ChangeHandler}
                            />
                        </div>

                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Prior NE Visits</h3>
                            <input
                                type="text"
                                name="priorVisits"
                                placeholder="Enter number of previous visits"
                                className={`${inputClass} ${Error && !Form.priorVisits.trim() ? ErrorInputClass : normalInputClass}`}
                                value={Form.priorVisits}
                                onChange={ChangeHandler}
                            />
                        </div>

                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Passport Expiry</h3>
                            <input
                                type="date"
                                name="passportExpiry"
                                className={`${inputClass} ${Error && !Form.passportExpiry ? ErrorInputClass : normalInputClass}`}
                                value={Form.passportExpiry}
                                onChange={ChangeHandler}
                            />
                        </div>

                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Gender</h3>
                            <select name="gender" className={`${selectClass} ${Error && !Form.gender ? ErrorInputClass : normalInputClass}`}
                                value={Form.gender}
                                onChange={ChangeHandler}>
                                <option value=''>Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>DOB</h3>
                            <input
                                type="date"
                                name="dob"
                                className={`${inputClass} ${Error && !Form.dob ? ErrorInputClass : normalInputClass}`}
                                value={Form.dob}
                                onChange={ChangeHandler}
                            />
                        </div>

                        <div className='my-3'>
                            <h3 className='mx-1.5 text-gray-300 mb-1 text-sm uppercase tracking-wide'>Visa Type</h3>
                            <select name="visaType" className={`${selectClass} ${Error && !Form.visaType ? ErrorInputClass : normalInputClass}`}
                                value={Form.visaType}
                                onChange={ChangeHandler}>
                                <option value=''>Select visa type</option>
                                <option value="Tourist">Tourist</option>
                                <option value="Business">Business</option>
                                <option value="Student">Student</option>
                                <option value="Research">Research</option>
                                <option value="Diplomatic">Diplomatic</option>
                                <option value="Transit">Transit</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between w-full p-4 bg-sky-900 rounded-xl mt-4">

                            <h1 className="text-white text-base font-semibold tracking-wide">
                                Deploy as: DGCA Officer 
                                {/* ({Details.length}) */}
                            </h1>

                            <button type="button" onClick={SubmitDeploy} className="p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-sky-700 hover:scale-110 active:scale-95">
                                <img
                                    className="w-9 h-9 object-cover transition-transform duration-300 hover:-translate-y-1 hover:rotate-6"
                                    src="/Image/fighter-plane.png"
                                    alt="fighter plane"
                                />
                            </button>

                        </div>
                    </form>

                </div>
            </div>
            <div className='flex-1 min-h-0 grid gap-4 p-4 content-start overflow-y-auto'
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))' }}>
                {Details.map((entry) => (
                    <ImmigrationRight key={entry.id} data={entry} />
                ))}

                {Details.length === 0 && (
                    <p className='text-gray-500 mt-10 col-span-full text-center'>
                        No visitors logged yet. Submit a passport to begin.
                    </p>
                )}
            </div>
        </div>
    )
}

export default Immigration