import React from 'react';

const AppSection = () => {
    return (
        <div className="py-8">
            <div className=" py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-7xl mx-auto">
                    <div className="w-2xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Your all-in-one Travel App
                        </h1>
                        <p className="text-gray-600 text-lg mb-8">
                            Get flights, hotels, holidays and visa assistance in just a few taps. Enjoy real-time flight
                            updates, schedules, travel info, play games, win trip coins and much more.
                        </p>
                    </div>

                    <div className="flex justify-center items-center space-x-4  flex-wrap">
                        <a href="#">
                            <img
                                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/App-Store.svg"
                                alt="Download on the App Store" className="h-12"/>
                        </a>
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com"
                             alt="QR Code" className="h-20 w-20 mx-4"/>
                        <a href="#">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play" className="h-12"/>
                        </a>
                    </div>

                    {/* Container to make the single image responsive and visually appealing */}
                    <div className="flex justify-center px-4">
                        <img
                            src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/app-screen.png"
                            alt="App Screens"
                            className="w-full rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSection;
