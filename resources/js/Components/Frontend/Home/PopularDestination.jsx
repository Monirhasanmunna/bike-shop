import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { Navigation, EffectCoverflow } from 'swiper/modules'

const PopularDestination = ({destinations}) => {
    return (
        <div className="py-8">
            <div className="container mx-auto">
                <div className="header text-center md:w-[40%] mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Most Popular Destinations</h2>
                    <h5 className="text-sm mb-6 text-gray-500">Expand your travel horizons with new facets! Explore the world by choosing your ideal travel destinations in Asia, Europe, America, Australia and more with SnapTreker.</h5>
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        0: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                >
                    {destinations.map((destination) => (
                        <SwiperSlide key={destination.id}>
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-[120px] md:h-[200px] object-cover rounded-lg transition-transform duration-300 ease-in-out"
                                />

                                <h2 className={`text-gray-100 text-[20px] font-semibold absolute left-[10px] bottom-[10px]`}>{destination.name}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PopularDestination
