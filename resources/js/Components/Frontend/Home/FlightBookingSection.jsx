import React, { useState } from 'react'
import { FaPlaneDeparture, FaHotel, FaUser } from 'react-icons/fa'
import { MdMedicalServices } from 'react-icons/md'
import { IoSwapHorizontal } from 'react-icons/io5'
import FlightSearch from './FlightSearch'
import TravelerDropdown from './TravelerDropdown'

const FlightBookingSection = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [showDropdownForTo, setShowDropdownForTo] = useState(false)
    const [showDropdownForTravel, setShowDropdownForTravel] = useState(false)
    const [search, setSearch] = useState('')
    const [from, setFrom] = useState('Dhaka')
    const [to, setTo] = useState("Cox's Bazar")
    const [departureDate, setDepartureDate] = useState('30 Mar 25')
    const [returnDate, setReturnDate] = useState('30 April 25')
    const [travelers, setTravelers] = useState('1 Traveler')
    const [classType, setClassType] = useState('Economy')

    return (
        <div className="bg-blue-100 py-10 md:min-h-screen flex items-center justify-center bg-[url(/assets/images/ocean.jpg)] bg-no-repeat w-full bg-cover bg-center">
            <div className={`max-w-[95%] lg:max-w-[90%] w-full`}>
            <div className="mb-4">
                <h2 className={`text-[30px] font-semibold text-gray-700`}>Welcome to Snap Treker!</h2>
                <h4 className={`text-[15px] font-semibold text-gray-700`}>Find Tickets, Hotels, Visa & Tour Package</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <div className="flex flex-wrap gap-y-2 space-x-6 pb-3">
                    <button className="text-blue-700 font-semibold border-b-2 border-yellow-400 flex items-center gap-2">
                        <FaPlaneDeparture /> Flight
                    </button>
                    <button className="text-gray-500 flex items-center gap-2">
                        <FaHotel /> Hotel
                    </button>
                    <button className="text-gray-500 flex items-center gap-2">
                        <FaUser /> Tour
                    </button>
                    <button className="text-gray-500 flex items-center gap-2">
                        <MdMedicalServices /> Visa
                    </button>
                </div>
                <div className="flex flex-wrap gap-3 mt-5">
                    {['Economy', 'Premium Economy', 'Business'].map((classType) => (
                        <label
                            key={classType}
                            className="flex items-center gap-2 cursor-pointer font-semibold text-[16px]"
                        >
                            <input
                                type="radio"
                                name="bookingClass"
                                className="form-radio text-red-600"
                            />
                            {classType}
                        </label>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row w-full gap-2 mt-4">
                    <div className="flex flex-col lg:flex-row items-center space-x-0 w-full lg:w-[45%]">
                        <div
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="p-5 relative border rounded-lg w-full"
                        >
                            <h3 className="text-gray-500 text-sm">FROM</h3>
                            <div className="w-full text-lg font-semibold focus:outline-none">
                                {from ? from : 'Select destination'}
                            </div>
                            {showDropdown && (
                                <FlightSearch
                                    showDropdown={showDropdown}
                                    setShowDropdown={setShowDropdown}
                                    destination={from}
                                    setDestination={setFrom}
                                />
                            )}
                        </div>

                        <button className="p-2 border rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                            <IoSwapHorizontal size={24} />
                        </button>
                        <div
                            onClick={() => setShowDropdownForTo(!showDropdownForTo)}
                            className="relative p-5 border rounded-lg w-full"
                        >
                            <h3 className="text-gray-500 text-sm">TO</h3>
                            <div className="w-full text-lg font-semibold focus:outline-none">
                                {to ? to : 'Select destination'}
                            </div>
                            {showDropdownForTo && (
                                <FlightSearch
                                    showDropdown={showDropdownForTo}
                                    setShowDropdown={setShowDropdownForTo}
                                    destination={to}
                                    setDestination={setTo}
                                />
                            )}
                        </div>
                    </div>
                    {/* Date Pickers Section */}
                    <div className="flex flex-col lg:flex-row space-x-2 w-full lg:w-[35%] p-3 border rounded-lg">
                        <div className="w-full">
                            <label className="text-sm">Departure</label>
                            <input
                                type="date"
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                                className="w-full text-lg font-semibold focus:outline-none border-0 pl-0"
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-sm">Return</label>
                            <input
                                type="date"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                className="w-full text-lg font-semibold focus:outline-none border-0 pl-0"
                            />
                        </div>
                    </div>
                    {/* Travelers & Booking Class Section */}
                    <div
                        onClick={() => setShowDropdownForTravel(!showDropdownForTravel)}
                        className="relative p-3 border rounded-lg w-full lg:w-[20%]"
                    >
                        <h3 className="text-sm">Travelers & Booking Class</h3>
                        <div className="w-full text-lg font-semibold focus:outline-none">
                            1 Traveler
                        </div>
                        <p className="text-[10px]">Economy</p>
                        <TravelerDropdown
                            showDropdown={showDropdownForTravel}
                            setShowDropdown={setShowDropdownForTravel}
                        />
                    </div>
                </div>

                {/* <div className="grid grid-cols-4 gap-4 mt-4">
          <div>
            <label className="text-gray-500 text-sm">JOURNEY DATE</label>
            <input
              type="date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg font-semibold"
            />
          </div>
          <div>
            <label className="text-gray-500 text-sm">RETURN DATE</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg font-semibold"
            />
          </div>
          <div>
            <label className="text-gray-500 text-sm">TRAVELERS</label>
            <input
              type="text"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg font-semibold"
            />
          </div>
          <div>
            <label className="text-gray-500 text-sm">CLASS</label>
            <input
              type="text"
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg font-semibold"
            />
          </div>
        </div> */}

                <div className="mt-6 flex justify-center">
                    <button className="bg-yellow-500 w-full lg:w-1/6 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-yellow-600">
                        Search
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FlightBookingSection
