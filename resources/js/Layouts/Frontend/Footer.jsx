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

const Footer = ({contact_info = null, social_links = null, copyright = null}) => {
    return (
        <footer
            id="contact"
            className="py-16 bg-red-600 text-white text-center px-4"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Looking for reliable automotive products?
            </h2>
            <p className="mb-6 text-sm md:text-base">
                Partner with Zelto Global today!
            </p>
            <a
                href="#"
                className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 inline-block"
            >
                Contact Us
            </a>
        </footer>
    )
}

export default Footer
