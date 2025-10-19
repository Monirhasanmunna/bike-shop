import { Link, usePage } from "@inertiajs/react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function MobileScreenNav({ pages, categories }) {
    const [open, setOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);
    const { fileBase, logo } = usePage().props;

    return (
        <div className="w-full px-5 border-b border-gray-200 fixed left-0 right-0 top-0 bg-gray-50 shadow z-[999]">
            {/* Top Nav */}
            <div className="flex lg:hidden items-center justify-between px-3 py-3">
                <div className="flex items-center gap-x-3">
                    <img src={`${fileBase}/${logo?.path}`} alt="logo" className="h-10" />
                </div>
                <button type="button" onClick={() => setOpen(!open)}>
                    <FaBars className="size-6 text-gray-600" />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div
                    className={`absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transform transition-all duration-300 origin-top
                    ${open ? "opacity-100 translate-y-0 max-h-[600px]" : "opacity-0 -translate-y-3 max-h-0"}`}
                >
                    <ul className="flex flex-col p-4 space-y-2">
                        {/* Home */}
                        <li
                            className={`text-gray-700 font-semibold cursor-pointer uppercase ${
                                route().current("home") ? "!text-[#F90101]" : ""
                            }`}
                        >
                            <Link href={route("home")}>Home</Link>
                        </li>

                        {/* Product Dropdown */}
                        <li>
                            <button
                                onClick={() => setProductOpen(!productOpen)}
                                className={`flex justify-between items-center w-full text-gray-700 font-semibold uppercase cursor-pointer ${
                                    route().current("product.list") ? "!text-[#F90101]" : ""
                                }`}
                            >
                                Product
                                <FaChevronDown
                                    className={`transition-transform duration-200 ${
                                        productOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {/* Dropdown Items */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    productOpen ? "max-h-40 mt-2" : "max-h-0"
                                }`}
                            >
                                <ul className="pl-4 border-l border-gray-200 space-y-2">
                                    {
                                        categories.map((category) => (
                                            <li key={category.id}>
                                                <Link
                                                    href={route('product.list', {slug: category.slug})}
                                                    className="block text-sm text-gray-600 hover:text-[#F90101]"
                                                >
                                                    {category.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>

                        {/* Other Pages */}
                        {pages.map((page) => (
                            <li
                                key={page.id}
                                className={`text-gray-700 font-semibold cursor-pointer uppercase ${
                                    route().current("page", { slug: page.slug })
                                        ? "!text-[#F90101]"
                                        : ""
                                }`}
                            >
                                <Link href={route("page", { slug: page.slug })}>
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
