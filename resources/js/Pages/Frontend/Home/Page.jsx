import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import {Link, usePage} from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import QRCode from "react-qr-code";

const Page = ({ data }) => {
    const {fileBase} = usePage().props
    const {hero_section, about_section, distributors, products} = data;

    return (
        <Main>
            {/* Hero Section */}
            <section
                className="relative h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${hero_section?.image})`,
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center text-white max-w-3xl px-4">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4" dangerouslySetInnerHTML={{__html: hero_section?.title}}>

                    </h1>
                    <p className="text-base md:text-2xl mb-6" dangerouslySetInnerHTML={{__html: hero_section?.subtitle}}>

                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold text-center"
                        >
                            Explore Products
                        </Link>
                        <Link
                            className="px-6 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-semibold text-center"
                        >
                            Become a Distributor
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-16 bg-gray-50 px-4">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
                    {/* Optional image or illustration */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={`${fileBase}/${about_section?.image}`}
                            alt="About Zelto Global"
                            className="w-full max-w-sm h-auto rounded-xl object-cover"
                        />
                    </div>

                    {/* Text content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold" dangerouslySetInnerHTML={{__html: about_section?.title}}></h2>
                        <p className="text-gray-700 mb-6 text-base md:text-lg" dangerouslySetInnerHTML={{__html: about_section?.description}}></p>
                        <Link
                            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
                        >
                            Learn More → About Us
                        </Link>
                    </div>
                </div>
            </section>


            {/* Featured Products */}
            <section id="products" className="py-16 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    Featured Products
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {
                        products.map((product) => (
                            <Link href={route('product_details', {slug:product.slug})}
                                key={product.id}
                                className="bg-white shadow-lg hover:shadow-2xl transition rounded-xl overflow-hidden flex flex-col border border-gray-100"
                            >
                                <div className="w-full flex justify-center bg-gray-50">
                                    <img
                                        src={`${fileBase}/${product?.image}`}
                                        alt={product}
                                        className="w-full h-68 object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col items-center text-center flex-1">
                                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                    <div className="mt-3">
                                        <QRCode
                                            value={route('warranty', product.slug)}
                                            size={80}
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>

            {/* Global Reach */}
            <section className="py-12 text-center w-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Global Reach</h2>
                <p className="mb-6 text-sm md:text-base">
                    Serving customers across Asia, Europe & beyond.
                </p>
                <div className="w-full h-56 md:h-72">
                    <iframe
                        title="Zelto Global Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531563!3d-37.81627997975162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1c5e1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1696225234567!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        className="border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>



            {/* Why Choose Zelto */}
            <section className="py-16 max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    Why Choose Zelto?
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        "Innovation & Research",
                        "International Standards",
                        "Eco-Friendly Formulations",
                        "Strong Distribution Network",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg hover:shadow-2xl transition rounded-xl p-6 flex flex-col items-center text-center border border-gray-100"
                        >
                            <span className="text-red-600 text-4xl mb-4">✔</span>
                            <h3 className="font-semibold text-lg">{item}</h3>
                        </div>
                    ))}
                </div>
            </section>


            {/* Testimonials / Partners */}
            <section className="py-16 max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl text-center font-bold mb-8">
                    Trusted by Workshops & Distributors
                </h2>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 },
                    }}
                    className="flex items-center"
                >
                    {distributors.map((distributor) => (
                        <SwiperSlide key={distributor.id} className="flex justify-center">
                            <img
                                src={`${fileBase}/${distributor?.image}`}
                                alt={distributor?.title}
                                className="h-[150px] w-full rounded object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </Main>
    );
};

export default Page;
