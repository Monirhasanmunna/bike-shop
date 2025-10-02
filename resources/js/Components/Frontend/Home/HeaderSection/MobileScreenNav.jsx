import {Link, usePage} from "@inertiajs/react";
import {FaArrowLeft, FaBars} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";
import {HSOverlay} from "preline";

export default function MobileScreenNav() {
    const [open, setOpen] = useState(false);
    const {fileBase, logo} = usePage().props

    return (
        <div className={`w-full px-5 border-b border-gray-200 fixed left-0 right-0 top-0 bg-gray-50 shadow z-999`}>
            <div className="flex lg:hidden items-center justify-between px-3 py-3">
                <div className={`flex gap-x-10 items-center`}>
                    <img src={`${fileBase}/${logo?.path}`} alt="logo" className="h-13" />
                </div>
                <div>
                    <button type="button"
                            onClick={() => setOpen(!open)}>
                        <FaBars className={`size-6 text-gray-500`} />
                    </button>
                </div>
            </div>

            {/* Dropdown Menu */}
            {open && (
                <div
                    className={`absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transform transition-all duration-300 origin-top
                    ${open ? "opacity-100 translate-y-0 max-h-[500px] pointer-events-auto" : "opacity-0 -translate-y-3 max-h-0 pointer-events-none"}`}
                >
                    <ul className="flex flex-col p-4 space-y-2 text-center">
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase ${route().current('home') ? '!text-[#F90101]' : ''}`}>
                            <Link href={route('home')}>Home</Link>
                        </li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase ${route().current('about_company') ? '!text-[#F90101]' : ''}`}>
                            <Link href={route('about_company')}>About My Company</Link>
                        </li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase ${route().current('about_me') ? '!text-[#F90101]' : ''}`}>
                            <Link href={route('about_me')}>About Me</Link>
                        </li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase ${route().current('sample-script') ? '!text-[#F90101]' : ''}`}>
                            <Link href={route('sample-script')}>Sample Scripts</Link>
                        </li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase ${route().current('contact_details') ? '!text-[#F90101]' : ''}`}>
                            <Link href={route('contact_details')}>Contact Details</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
