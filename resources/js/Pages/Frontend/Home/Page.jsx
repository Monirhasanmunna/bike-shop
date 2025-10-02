import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import {Link, usePage} from "@inertiajs/react";

const Page = ({ data }) => {
    const {fileBase} = usePage().props
    const {hero_section} = data;
    return (
        <Main>
            {/* Hero Section */}
            <section
                className="relative h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=1600&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center text-white max-w-3xl px-4">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4">
                        Global Standard in Car Care Solutions
                    </h1>
                    <p className="text-base md:text-2xl mb-6">
                        Premium Tyre Sealants, Oils & Car Care Products trusted worldwide.
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
                            src="/assets/images/about-illustration.png"
                            alt="About Zelto Global"
                            className="w-full max-w-sm h-auto rounded-xl object-cover"
                        />
                    </div>

                    {/* Text content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Zelto Global</h2>
                        <p className="text-gray-700 mb-6 text-base md:text-lg">
                            Zelto Global is an international producer & distributor of high-quality
                            automotive care products, trusted in multiple countries. We focus on innovation,
                            eco-friendly solutions, and a strong global distribution network.
                        </p>
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
                    {["Tyre Sealant", "Car Polish", "Brake Oil", "Fork Oil"].map(
                        (product, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg hover:shadow-2xl transition rounded-xl overflow-hidden flex flex-col border border-gray-100"
                            >
                                <div className="w-full flex justify-center bg-gray-50">
                                    <img
                                        src="/assets/images/product.jpg"
                                        alt={product}
                                        className="w-full h-auto max-h-68 object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col items-center text-center flex-1">
                                    <h3 className="font-semibold text-lg mb-2">{product}</h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        High-quality {product.toLowerCase()} trusted worldwide.
                                    </p>
                                    {/* QR Code Placeholder */}
                                    <div className="w-full h-20 mt-auto">
                                        <img
                                            src="/assets/images/barcode.jpg"
                                            alt="QR Code"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    )}
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
            <section className="py-16 bg-gray-50 text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    Trusted by Workshops & Distributors
                </h2>
                <div className="flex justify-center gap-8 flex-wrap">
                    {[1, 2, 3].map((logo) => (
                        <img
                            key={logo}
                            src="https://via.placeholder.com/120x60"
                            alt="Partner Logo"
                            className="grayscale max-w-full h-auto"
                        />
                    ))}
                </div>
            </section>
        </Main>
    );
};

export default Page;
