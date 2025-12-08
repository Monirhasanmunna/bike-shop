import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
    FaPinterestP,
} from 'react-icons/fa6'
import { FiMail, FiPhone } from "react-icons/fi"
import { FaSkype } from "react-icons/fa"
import { Link } from "@inertiajs/react"

const Footer = ({ contact_info = null, social_links = null, copyright = null, app_description = null, pages }) => {
    return (
        <footer className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 text-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Brand / Logo */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-indigo-800">Zelto Global</h2>
                    <div className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{__html: app_description?.content}}>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4 text-indigo-800">Quick Links</h3>
                    <ul className="space-y-2">
                        {pages.map((page) => (
                            <li key={page.id}>
                                <Link
                                    href={route('page', { slug: page.slug })}
                                    className="flex items-center gap-2 hover:text-indigo-600 transition"
                                >
                                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact / Social */}
                <div>
                    <h3 className="font-semibold mb-4 text-indigo-800">Get in Touch</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Have questions or want to partner with us?
                    </p>
                    <div className="flex space-x-4">
                        <a href={contact_info.skype} className="hover:text-gray-900 transition">🌐</a>
                        <a href={contact_info.email} className="hover:text-gray-900 transition">📧</a>
                        <a href={contact_info.phone} className="hover:text-gray-900 transition">📞</a>
                    </div>
                </div>
            </div>

            {/* Divider & Copyright */}
            <div className="border-t border-indigo-200 text-center py-4 text-sm text-gray-800">
                {copyright?.content}
            </div>
        </footer>
    )
}

export default Footer
