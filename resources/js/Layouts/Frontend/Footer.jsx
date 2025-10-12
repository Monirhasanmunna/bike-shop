import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
    FaPinterestP,
} from 'react-icons/fa6'
import {FiMail, FiPhone} from "react-icons/fi";
import {FaSkype} from "react-icons/fa";
import {Link} from "@inertiajs/react";

const Footer = ({contact_info = null, social_links = null, copyright = null, pages}) => {
    return (
        <footer className="bg-red-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand / Logo */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Zelto Global</h2>
                    <p className="text-sm text-red-100 leading-relaxed">
                        Premium tyre sealants, oils & car care products trusted worldwide.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href={route('product.list')}
                                className="flex items-center gap-2 hover:text-gray-900 transition"
                            >
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                                Product
                            </Link>
                        </li>
                        {
                            pages.map((page) => (
                                <li key={page.id}>
                                    <Link
                                        href={route('page', {slug: page.slug})}
                                        className="flex items-center gap-2 hover:text-gray-900 transition"
                                    >
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        {page.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Contact / Social */}
                <div>
                    <h3 className="font-semibold mb-4">Get in Touch</h3>
                    <p className="text-sm text-red-100 mb-4">
                        Have questions or want to partner with us?
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-900 transition">🌐</a>
                        <a href="#" className="hover:text-gray-900 transition">📧</a>
                        <a href="#" className="hover:text-gray-900 transition">📞</a>
                    </div>
                </div>
            </div>

            {/* Divider & Copyright */}
            <div className="border-t border-red-500 text-center py-4 text-sm text-red-100">
                {copyright?.content}
            </div>
        </footer>
    )
}

export default Footer
