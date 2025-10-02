import React from 'react'

const stats = [
    { icon: '\u2708\ufe0f', value: '1,55,386', label: 'Flight Booking' },
    { icon: '\ud83d\udc64', value: '200K', label: 'Total Users' },
    { icon: '\ud83c\udfe8', value: '355K', label: 'Hotel Booking' },
    { icon: '\ud83d\udca9', value: '1,500', label: 'Amazing Tour' },
]

const StatsSection = () => {
    return (
        <div className="py-[40px]">
            <div className="relative w-full h-full py-10 md:py-10 md:h-[300px] bg-[url(/assets/images/ocean2.jpg)] bg-cover bg-center flex items-center justify-center">
                {/* Black overlay with reduced opacity */}
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative flex flex-col gap-y-4 md:flex-row justify-around w-full max-w-5xl text-white text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-full text-3xl">
                                {stat.icon}
                            </div>
                            <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
                            <p className="text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StatsSection
