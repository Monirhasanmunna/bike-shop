import React from 'react'
import { FaLocationDot, FaRegCreditCard } from 'react-icons/fa6'
import { MdOutlineHotel } from 'react-icons/md'
import { LuCar } from 'react-icons/lu'
import { MdOutlineDinnerDining } from 'react-icons/md'
import { PiAirplaneTakeoffLight } from 'react-icons/pi'

const packageData = [
    {
        id: 1,
        title: 'Sheraton Fullmoon Resort Tour Package - 03 Days 02 Nights',
        destination: 'Maldives',
        price: 44499,
        bestDeal: 'Best Deal for Maldives!',
        imageUrl: '/assets/images/package1.webp',
    },
    {
        id: 2,
        title: 'Promotional Nepal Group Tour - 04 Days 03 Nights',
        destination: 'Nepal',
        price: 44499,
        bestDeal: 'Best Deal for Nepal!',
        imageUrl: '/assets/images/package2.webp',
    },
    {
        id: 3,
        title: 'Exclusive Maafushi Island, Hulhumale & Colombo Group Tour',
        destination: 'Maldives',
        price: 44499,
        bestDeal: 'Best Deal for Nepal!',
        imageUrl: '/assets/images/package3.webp',
    },
]

const HolidayPackages = () => {
    return (
        <div className="py-[40px] container">
            <div className="text-center mt-12">
                <p className="text-blue-600">Choose your Holiday</p>
                <h2 className="text-3xl font-bold">Most Popular Holiday Packages</h2>
            </div>

            {/* Tabs */}
            <div className="mt-16 flex flex-wrap gap-y-2 space-x-6">
                <button className="border-b-2 border-transparent hover:border-blue-500 pb-2">
                    Special Deals
                </button>
                <button className="border-b-2 border-blue-500 pb-2 font-semibold">
                    Popular
                </button>
                <button className="border-b-2 border-transparent hover:border-blue-500 pb-2">
                    Recommendation
                </button>
                <button className="border-b-2 border-transparent hover:border-blue-500 pb-2">
                    Best Price
                </button>
            </div>

            {/* Package Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-3">
                {packageData.map((pkg) => (
                    <div
                        key={pkg.id}
                        className="bg-white rounded shadow-sm p-4 group cursor-pointer"
                    >
                        <div className="relative w-full h-[150px] md:h-[200px] flex justify-center items-center bg-gray-100 group overflow-hidden">
                            <img
                                src={pkg.imageUrl}
                                width={300}
                                height={200}
                                alt={pkg.title}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex flex-wrap gap-y-2 items-center space-x-2 text-xs text-gray-600">
                                <div className="px-2 py-1 border rounded-full flex items-center gap-1">
                                    <div>
                                        <MdOutlineHotel className="w-3.5 h-3.5 text-blue-900" />
                                    </div>
                                    <p className=" font-semibold">Hotel</p>
                                </div>
                                <div className="px-2 py-1 border rounded-full flex items-center gap-1">
                                    <div>
                                        <LuCar className="w-3.5 h-3.5 text-blue-900" />
                                    </div>
                                    <p className=" font-semibold">Transfer</p>
                                </div>
                                <div className="px-2 py-1 border rounded-full flex items-center gap-1">
                                    <div>
                                        <MdOutlineDinnerDining className="w-3.5 h-3.5 text-blue-900" />
                                    </div>
                                    <p className=" font-semibold">Meals</p>
                                </div>
                                <div className="px-2 py-1 border rounded-full flex items-center gap-1">
                                    <div>
                                        <FaRegCreditCard className="w-3.5 h-3.5 text-blue-900" />
                                    </div>
                                    <p className=" font-semibold">Visa</p>
                                </div>
                                <div className="px-2 py-1 border rounded-full flex items-center gap-1">
                                    <div>
                                        <PiAirplaneTakeoffLight className="w-3.5 h-3.5 text-blue-900" />
                                    </div>
                                    <p className=" font-semibold">Flight</p>
                                </div>
                            </div>

                            <h3 className="mt-4 text-lg font-bold">{pkg.title}</h3>

                            <p className="text-sm text-gray-500 mt-2">{pkg.bestDeal}</p>

                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <FaLocationDot className="w-4 h-4 text-blue-900" />
                                </div>
                                <p className=" font-semibold">2N {pkg.destination}</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-gray-700 text-lg mt-2">
                                    BDT {pkg.price}{' '}
                                    <span className="text-sm text-gray-500">Per Person</span>
                                </p>

                                <div className="mt-4 text-center">
                                    <button className="bg-blue-900 text-white py-2 px-6 capitalize rounded-lg hover:bg-blue-800">
                                        book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HolidayPackages
