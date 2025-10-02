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
        imageUrl: '/assets/images/package4.webp',
    },
    {
        id: 2,
        title: 'Promotional Nepal Group Tour - 04 Days 03 Nights',
        destination: 'Nepal',
        price: 44499,
        bestDeal: 'Best Deal for Nepal!',
        imageUrl: '/assets/images/package5.webp',
    },
    {
        id: 3,
        title: 'Exclusive Maafushi Island, Hulhumale & Colombo Group Tour',
        destination: 'Maldives',
        price: 44499,
        bestDeal: 'Best Deal for Nepal!',
        imageUrl: '/assets/images/package6.webp',
    },
]

const PopularHotelPackage = () => {
    return (
        <div className="py-[40px] container">
            <div className="text-center mt-12">
                <p className="text-blue-600">Choose your Hotel</p>
                <h2 className="text-3xl font-bold">Most Popular Hotel Packages</h2>
            </div>

            {/* Package Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-10">
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

export default PopularHotelPackage
