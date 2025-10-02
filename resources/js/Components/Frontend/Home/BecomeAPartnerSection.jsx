import React from 'react'

const BecomeAPartnerSection = () => {
    return (
        <section
            className="w-full px-6 py-13 my-8 rounded-xl text-black"
            style={{
                background: "linear-gradient(90deg, #B9D9FD 0%, #FEE1C3 100%)",
            }}
        >
            <div className="container mx-auto">
                <div className="w-full md:w-[70%] flex justify-between items-center mx-auto">
                    <div className="">
                        <h2 className="text-3xl font-bold text-gray-700 mb-2">
                            Grow Your Business with SnapTreker Shop
                        </h2>
                        <p className="text-md text-gray-700">
                            Partner with us to reach more customers, boost sales, and expand your brand effortlessly.
                        </p>
                    </div>
                    <div className="ml-6">
                        <button className="bg-[#2E68B2] text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition">
                            Become a Partner
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BecomeAPartnerSection
