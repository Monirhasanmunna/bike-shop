import { useState } from 'react'
import { IoSwapHorizontal } from 'react-icons/io5'
import { FaPlaneDeparture } from 'react-icons/fa'

const airports = [
    {
        city: 'Dhaka',
        country: 'Bangladesh',
        airport: 'Hazrat Shahjalal International Airport',
        code: 'DAC',
    },
    {
        city: 'Chittagong',
        country: 'Bangladesh',
        airport: 'Shah Amanat International',
        code: 'CGP',
    },
    {
        city: "Cox's Bazar",
        country: 'Bangladesh',
        airport: "Cox's Bazar",
        code: 'CXB',
    },
    {
        city: 'Sylhet',
        country: 'Bangladesh',
        airport: 'Sylhet Civil',
        code: 'ZYL',
    },
    { city: 'Saidpur', country: 'Bangladesh', airport: 'Saidpur', code: 'SPD' },
    { city: 'Rajshahi', country: 'Bangladesh', airport: 'Rajshahi', code: 'RJH' },
    {
        city: 'Barisal',
        country: 'Bangladesh',
        airport: 'Barisal Airport',
        code: 'BZL',
    },
]

const FlightSearch = ({
                          showDropdown,
                          setShowDropdown,
                          destination,
                          setDestination,
                      }) => {
    const [search, setSearch] = useState('')

    const filteredAirports = airports.filter(
        (airport) =>
            airport.city.toLowerCase().includes(search.toLowerCase()) ||
            airport.code.toLowerCase().includes(search.toLowerCase())
    )

    const handleCloseDropDown = () => {
        setDestination('')
        setShowDropdown(false)
    }

    return (
        <>
            {/* Search Dropdown */}
            {showDropdown && (
                <>
                    <div
                        onClick={handleCloseDropDown}
                        className="fixed inset-0 bg-black opacity-10 z-40"
                    ></div>
                    <div className="absolute top-24 left-0 w-[100%] lg:w-[130%] bg-white shadow-xl rounded-lg z-50">
                        <div className="p-2 border-b flex items-center">
                            <input
                                type="text"
                                placeholder="Type for the airport name or airport code"
                                className="w-full p-2 text-sm focus:outline-none"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="max-h-64 overflow-y-auto">
                            {filteredAirports.map((airport, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center p-3 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setDestination(`${airport.city}, ${airport.country}`)
                                        setShowDropdown(false)
                                        setSearch('')
                                    }}
                                >
                                    <div className="flex items-start">
                                        <FaPlaneDeparture className="text-red-500 mt-1" />
                                        <div className="ml-3">
                                            <div className="font-semibold">
                                                {airport.city}, {airport.country}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {airport.airport}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-bold text-gray-700">{airport.code}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default FlightSearch
