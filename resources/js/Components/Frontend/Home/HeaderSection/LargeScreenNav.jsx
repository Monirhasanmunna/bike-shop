import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function LargeScreenNav({ pages, categories }) {
    const { fileBase, logo } = usePage().props;
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className="w-full hidden lg:block border-b border-gray-200 bg-gray-50 shadow relative z-[999]">
            <div className="container flex items-center justify-between h-[80px] relative">
                {/* Logo */}
                <Link href={route('home')} className="p-1">
                    <img src={`${fileBase}/${logo?.path}`} alt="logo" className="h-25" />
                </Link>

                {/* Left Nav Links */}
                <div className="flex gap-x-10 items-center py-3">
                    <ul className="flex items-center gap-x-10">
                        {/* Home */}
                        <li
                            className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${
                                route().current('home') ? 'active' : ''
                            }`}
                        >
                            <Link href={route('home')}>Home</Link>
                        </li>

                        {/* Product Dropdown */}
                        <li
                            className={`relative text-gray-700 font-semibold cursor-pointer uppercase nav_link select-none ${
                                route().current('product.list') ? 'active' : ''
                            }`}
                            onClick={() => setOpenDropdown(!openDropdown)}
                        >
                            Product

                            {/* Dropdown Menu */}
                            {openDropdown && (
                                <ul
                                    className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeIn"
                                    onMouseLeave={() => setOpenDropdown(false)}
                                >
                                    {
                                        categories.map((category) => (
                                            <li key={category.id}>
                                                <Link
                                                    href={route('product.list', {slug: category.slug})}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {category.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}
                        </li>

                        {/* Dynamic Pages */}
                        {pages.map((page) => (
                            <li
                                key={page?.id}
                                className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${
                                    route().current('page', { slug: page.slug }) ? 'active' : ''
                                }`}
                            >
                                <Link href={route('page', { slug: page.slug })}>{page?.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
