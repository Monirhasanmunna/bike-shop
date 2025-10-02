import {EffectCoverflow, Navigation, Thumbs} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/thumbs';

export default function TourDetailsSlider({images, fileBase}){
    return (
        <>
            <Swiper
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                slidesPerView={1}
                loop={true}
                modules={[Navigation, EffectCoverflow, Thumbs]}
                className="mySwiper h-full"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="w-full h-full overflow-hidden">
                            <img
                                src={fileBase + '/' + image.path}
                                alt={image.path}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* ⬅️ Prev Button */}
            <div className="custom-swiper-button-prev absolute top-1/2 left-3 -translate-y-1/2 z-20">
                <button className="w-8 h-8 flex items-center justify-center bg-gray-100 shadow rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* ➡️ Next Button */}
            <div className="custom-swiper-button-next absolute top-1/2 right-3 -translate-y-1/2 z-20">
                <button className="w-8 h-8 flex items-center justify-center bg-gray-100 shadow rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </>
    )
}
