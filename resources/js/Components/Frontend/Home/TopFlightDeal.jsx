import React from 'react';

const deals = [
    {
        img: "/assets/images/image1.png",
        alt: "Special Student Fare",
    },
    {
        img: "/assets/images/image2.png",
        alt: "Explore Asia",
    },
    {
        img: "/assets/images/image3.png",
        alt: "Save on International Flights",
    },
];

const TopFlightDeals = () => {
    return (
        <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                Top Flight Deals
            </h2>
            <div className="overflow-x-auto">
                <div className="flex space-x-4 sm:justify-center sm:space-x-6 min-w-full">
                    {deals.map((deal, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-80 sm:w-96 rounded-xl overflow-hidden shadow-md bg-white"
                        >
                            <img
                                src={deal.img}
                                alt={deal.alt}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopFlightDeals;
