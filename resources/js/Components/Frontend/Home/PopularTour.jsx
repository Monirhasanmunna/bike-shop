import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { Navigation, EffectCoverflow, Thumbs } from 'swiper/modules'
import {Link} from "@inertiajs/react";

const PopularTour = ({tours}) => {

    const getImages = (images, key = 0) => {
        let image = null;
        if(images.length) {
            const parse = JSON.parse(images)
            image = parse[key]
        }
        return image;
    }

    return (
        <div className="py-8">
            <div className="container mx-auto">
                <div className="header text-center md:w-[40%] mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Most Popular Tour</h2>
                    <h5 className="text-sm mb-6 text-gray-500">Plan your dream gateway and choose from uncountable tour packages at SnapTreker. Book our holiday packages for the best deals on any international trip.</h5>
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    modules={[Navigation, EffectCoverflow, Thumbs]}
                    navigation={true}
                    className="mySwiper"
                    breakpoints={{
                        0: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                >
                    {tours.map((tour) => (
                        <SwiperSlide key={tour.id}>
                            <Link href={route('tour.get_details', {slug: tour.slug})} className="relative overflow-hidden rounded-lg">
                                <img
                                    src={getImages(tour.images)?.path}
                                    alt={tour.title}
                                    className="w-full h-[120px] md:h-[200px] object-cover rounded-lg transition-transform duration-300 ease-in-out"
                                />
                                <h2 className={`text-gray-100 text-[20px] font-semibold absolute left-[10px] bottom-[10px]`}>{tour.title}</h2>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PopularTour
