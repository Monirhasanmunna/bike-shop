import React from 'react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const Banner = () => {
    return (
        <div className="pt-[60px]">
            <div className="container">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    pagination={{ clickable: true }}
                    className="rounded"
                >
                    <SwiperSlide>
                        <img
                            src="/assets/images/flightBanner.png"
                            alt="Turkey Airlines Banner 1"
                            className="w-full h-48 md:h-64 rounded object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/images/flightBanner.png"
                            alt="Turkey Airlines Banner 2"
                            className="w-full h-48 md:h-64 rounded object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/images/flightBanner.png"
                            alt="Turkey Airlines Banner 3"
                            className="w-full h-48 md:h-64 rounded object-cover"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Banner
