import React from 'react'

const ImmigrationRight = () => {
    return (
        <div className='min-h-screen bg-black w-full lg:w-2/3 flex flex-col overflow-y-auto pb-10 flex-wrap'>

            <div className='m-6 bg-gray-900 rounded-xl p-6 flex flex-col gap-8 overflow-y-auto'>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl bg-gray-700 font-[font1] text-gray-500 rounded-[3px] px-2">UK</h1>
                        <h1 className="text-2xl font-bold text-white">Shreya Alison</h1>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500 text-2xl font-[font2]">
                        <span>UK11223344</span>
                        <span>United Kingdom</span>
                    </div>
                </div>

                <div className='bg-red-800 border-[3px] border-red-950 rounded-[7px] p-5'>
                    <h1 className='text-2xl text-gray-400 font-[font2]'>Risk Assessment</h1>
                    <div className='flex items-center gap-x-2.5'>
                        <span className='text-5xl text-orange-500 font-bold'>78</span>
                        <span className='mx-2 text-3xl text-orange-500 font-bold'>HIGH</span>
                    </div>
                    <div className='my-7 border-2 text-gray-300 border-black w-fit px-1.5 bg-gray-700 rounded-full text-center'>
                        <h1>Unregistered journalism in sensitive zone</h1>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 text-white">

                    <div>
                        <h2 className="text-gray-500 uppercase tracking-wider text-sm">Occupation</h2>
                        <p className="font-semibold text-lg">Freelance Journalist</p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 uppercase tracking-wider text-sm">Nationality</h2>
                        <p className="font-semibold text-lg">United Kingdom</p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 uppercase tracking-wider text-sm">Date of Birth</h2>
                        <p className="font-semibold text-lg">1988-02-15</p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 uppercase tracking-wider text-sm">Visa Method</h2>
                        <p className="font-semibold text-lg">e-Visa</p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 uppercase tracking-wider text-sm">Permit Days</h2>
                        <p className="font-semibold text-lg">30 days</p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 uppercase tracking-wider text-sm">Reason to Visit</h2>
                        <p className="font-semibold text-lg">Documentary Filmmaking</p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 uppercase tracking-wider text-sm">Passport Expiry</h2>
                        <p className="font-semibold text-lg text-yellow-400">2029-05-12 (1060d left)</p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 uppercase tracking-wider text-sm">Overstay Flag</h2>
                        <p className="font-semibold text-lg text-green-400 mx-6">No</p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 uppercase tracking-wider text-sm">Prior Visits</h2>
                        <p className="font-semibold text-lg text-orange-400">2</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ImmigrationRight