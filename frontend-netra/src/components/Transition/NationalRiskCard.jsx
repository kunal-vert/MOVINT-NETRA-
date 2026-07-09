import React from 'react'



const riskColors = {
    HIGH: {
        bg: 'bg-red-800 border-red-950', text: 'text-orange-500'
    },
    MEDIUM: {
        bg: 'bg-yellow-800 border-yellow-950', text: 'text-yellow-400'
    },
    LOW: {
        bg: 'bg-green-900 border-green-950', text: 'text-green-400'
    },
}


const getDaysLeft = (expiryDateStr) => {
    if (!expireyDateStr) return null
    const expirey = new Date(expireyDateStr)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const diff = (expirey - today)
    const val = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return val
}



const NationalRiskCard = ({ data }) => {

    // here we could've added the condition statement but we already have the compute value on backend so we aint need condition! bruhh :)

    const ThreatLevel = getRiskLevel(score)
    const risk = riskColors[ThreatLevel] || { bg: 'bg-gray-800 border-gray-700', text: 'text-gray-400' }


    const daysLeft = getDaysLeft(data.visa_expirey)


    return (
        <div className='bg-gray-900 rounded-xl p-6 flex flex-col gap-8'>

            {/* Header */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl bg-gray-700 font-[font1] text-gray-500 rounded-[3px] px-2">
                        {data.countryCode}
                    </h1>

                    <h1 className="text-2xl font-bold text-white">
                        {data.fullName}
                    </h1>
                </div>

                <div className="flex items-center gap-4 text-gray-500 text-2xl font-[font2]">
                    <span>{data.passportNumber}</span>
                    <span>{data.nationality}</span>
                </div>
            </div>

            {/* Risk Box */}
            <div className={`${risk.bg} border-[3px] rounded-[7px] p-5`}>
                <h1 className='text-2xl text-gray-400 font-[font2]'>
                    Risk Assessment
                </h1>

                <div className='flex items-center gap-x-2.5'>
                    <span className={`text-5xl font-bold ${risk.text}`}>
                        {score}
                    </span>

                    <span className={`mx-2 text-3xl font-bold ${risk.text}`}>
                        {data.riskLevel}
                    </span>
                </div>

                <div className='my-7 border-2 text-gray-300 border-black w-fit px-1.5 bg-gray-700 rounded-full text-center'>
                    <h1>{data.riskReason}</h1>
                </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 text-white">

                <div>
                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Occupation</h2>
                    <p className="font-semibold text-lg">{data.occupation}</p>
                </div>

                <div>
                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Nationality</h2>
                    <p className="font-semibold text-lg">{data.nationality}</p>
                </div>
                <div>

                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Gender</h2>
                    <p className="font-semibold text-lg">{data.gender}</p>

                </div>

                <div>
                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Date of Birth</h2>
                    <p className="font-semibold text-lg">{data.dob}</p>
                </div>

                <div>
                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Visa Type</h2>
                    <p className="font-semibold text-lg">{data.visaType}</p>
                </div>

                <div>
                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Permit Days</h2>
                    <p className="font-semibold text-lg">{data.visa_permit_days} days</p>
                </div>

                <div>
                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Reason to Visit</h2>
                    <p className="font-semibold text-lg">{data.reason_to_visit || "N/A"}</p>
                </div>

                 <div>
                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Visa Expiry</h2>
                    <p className="font-semibold text-lg text-yellow-400">
                        {data.visa_expiry || "N/A"}
                        {daysLeft !== null && (
                            daysLeft < 0
                                ? <span className="text-red-500 font-bold"> — EXPIRED {Math.abs(daysLeft)}d ago</span>
                                : <span> ({daysLeft}d left)</span>
                        )}
                    </p>
                </div>

                

                <div>
                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Overstay Flag</h2>
                    <p className={`font-semibold text-lg mx-6 ${data.overstayFlag ? 'text-red-400' : 'text-green-400'}`}>
                        {data.overstayFlag ? 'Yes' : 'No'}
                    </p>
                </div>

                <div>
                    <h2 className="text-gray-500 uppercase tracking-wider text-sm">Prior Visits</h2>
                    <p className="font-semibold text-lg text-orange-400">
                        {data.priorVisits || "0"}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ImmigrationRight