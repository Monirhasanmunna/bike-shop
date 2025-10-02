import React, { useState, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const TravelerDropdown = ({ showDropdown, setShowDropdown }) => {
    const [travelers, setTravelers] = useState({
        adults: 1,
        children: 0,
        kids: 0,
        infants: 0,
    })
    const [bookingClass, setBookingClass] = useState('Economy')

    return (
        <>
            {showDropdown && (
                <div className="fixed inset-0 bg-black opacity-10 z-40"></div>
            )}

            {showDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-5 w-80 z-50 dropdown-container">
                    <h3 className="font-semibold mb-2">Travelers</h3>

                    {/* Traveler Selection */}
                    {[
                        { label: 'Adults', age: '12 years and above', type: 'adults' },
                        {
                            label: 'Children',
                            age: '5 years - under 12 years',
                            type: 'children',
                        },
                        { label: 'Kids', age: '2 years - under 5 years', type: 'kids' },
                        { label: 'Infant', age: 'below 2 years (on lap)', type: 'infants' },
                    ].map((item) => (
                        <div
                            key={item.type}
                            className="flex justify-between items-center mb-3"
                        >
                            <div>
                                <p className="text-gray-700 font-semibold">{item.label}</p>
                                <p className="text-gray-500 text-sm">{item.age}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                                    <FaMinus size={12} />
                                </button>
                                <span className="text-lg font-semibold">
                  {travelers[item.type]}
                </span>
                                <button className="p-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                                    <FaPlus size={12} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Booking Class Selection */}
                    <h3 className=" font-semibold mt-4 mb-2">Booking Class</h3>
                    <div className="flex flex-wrap gap-3">
                        {['Economy', 'Premium Economy', 'Business', 'First Class'].map(
                            (classType) => (
                                <label
                                    key={classType}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        name="bookingClass"
                                        value={classType}
                                        checked={bookingClass === classType}
                                        onChange={() => setBookingClass(classType)}
                                        className="form-radio text-red-600"
                                    />
                                    {classType}
                                </label>
                            )
                        )}
                    </div>

                    {/* Done Button */}
                    <div className="flex justify-end mt-4">
                        <button
                            className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                            onClick={() => setShowDropdown(false)}
                        >
                            DONE
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default TravelerDropdown
