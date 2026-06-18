import React from 'react'

const ImmigrationRight = () => {
    return (
        <div className='h-full bg-sky-950 w-2/3 flex flex-col '>
            <div className="flex flex-col gap-2 m-8  ">
                <div className="flex items-center gap-4">
                    <h1 className=" text-2xl bg-gray-700 font-[font1] text-gray-500 rounded-[3px]">UK</h1>
                    <h1 className="text-2xl font-bold">Shreya Alison</h1>
                </div>

                <div className="flex items-center gap-4 text-gray-500 text-2xl font-[font2]">
                    <span>UK11223344</span>
                    <span>United Kingdom</span>
                </div>
            </div>

            <div className='w-[90%] h-[30%] mx-auto  relative  bg-red-800 border-[3px] border-red-950            rounded-[7px] p-3 ' >

                <h1 className=' text-2xl text-gray-400 font-[font2]'>Risk Assessment</h1>
                <div className='flex items-center gap-x-2.5'>
                    <span className='text-5xl text-orange-500 font-bold'>
                        78

                    </span>
                    <span className='mx-2 text-3xl text-orange-500 font-bold'>
                        HIGH</span>
                </div>

                <div className='my-7 border-2 text-gray-300 border-black w-fit px-1.5 bg-gray-700  rounded-full'>
                    <h1>Unregistered journalism in sensitive zone</h1>
                </div>
            </div>

        </div>
    )
}

export default ImmigrationRight