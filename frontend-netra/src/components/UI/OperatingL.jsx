import React from 'react'

const OperatingL = () => {
    return (
        <div className="flex items-center justify-content gap-2.5 p-7">
            <h1 className='text-3xl px-2 py-2 font-[font1] text-center text-blue-400 bg-gray-500 rounded-full  hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]  '>Operating As:</h1>
            <div className="flex items-center gap-2  border-white  ">
                <span className=' bg-gray-600 font-[font2] text-xl border-white border-2 text-center px-2 py-1.5   rounded-full  hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]' >Airport Immigration</span>
                <span className='  bg-gray-600 font-[font2] text-xl border-2 text-center px-2 py-1.5 border-white  rounded-full  hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>Checkpost Officer</span>
                <span className=' border-2 text-center  bg-gray-600 font-[font2] text-xl px-2 py-1.5 border-white  rounded-full  hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]'>Hotel Desk</span>
                <span className=' border-2 text-center px-2 py-1.5  bg-gray-600 font-[font2] text-xl border-white  rounded-full  hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]' >Toll Operator</span>
                <span className=' border-2 text-center px-2 py-1.5  bg-gray-600 font-[font2] text-xl border-white  rounded-full  hover:text-[rgb(211,253,80)] hover:border-[rgb(211,253,80)]' >Border Guard</span>
            </div>
        </div>
    )
}

export default OperatingL