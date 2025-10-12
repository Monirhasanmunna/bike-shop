
import {Link, usePage} from "@inertiajs/react";
import {FaGear} from "react-icons/fa6";
import {BsInfoSquare} from "react-icons/bs";
import {RiPagesLine} from "react-icons/ri";
import {AiOutlineProduct} from "react-icons/ai";
import {FaRegNewspaper} from "react-icons/fa";
import {LiaUsersSolid} from "react-icons/lia";
import {LuGalleryVertical} from "react-icons/lu";

export default function Sidebar() {
    const { url: currentUrl } = usePage()
    return (
        <div id="hs-pro-sidebar" className="hs-overlay [--body-scroll:true] [--overlay-backdrop:false] [--is-layout-affect:true] [--opened:lg] [--auto-close:lg]
    hs-overlay-open:translate-x-0 lg:hs-overlay-layout-open:translate-x-0
    -translate-x-full transition-all duration-300 transform
    w-60
    hidden
    fixed inset-y-0 z-5 start-0
    bg-zinc-100
    lg:block lg:-translate-x-full lg:end-auto lg:bottom-0
    dark:bg-neutral-900" role="dialog" tabIndex="-1" aria-label="Sidebar">
        <div className="lg:pt-13 relative flex flex-col h-full max-h-full">
                <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open="true">
                    <ul className="flex flex-col space-y-1">
                        <li>
                            <Link href={route('dashboard')} className={`flex items-center ${route().current('dashboard') ? 'bg-gray-200' : ''} gap-x-3.5 py-2 px-2.5 bg-gray-100 text-[15px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white`}>
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.hero_section.page')} className={`${route().current('admin.hero_section.page') ? 'bg-gray-200' : ''} flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-[15px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white`}>
                                <LuGalleryVertical className={`size-4.5`} />
                                Hero Section
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.about_section.page')} className={`${route().current('admin.about_section.page') ? 'bg-gray-200' : ''} flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-[15px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white`}>
                                <BsInfoSquare className={`size-4.5`} />
                                About Section
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.page.list')} className={`${route().current('admin.page.list') ? 'bg-gray-200' : ''} flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-[15px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white`}>
                                <RiPagesLine  className={`size-4.5`} />
                                Page
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.product.list')} className={`${route().current('admin.product.list') ? 'bg-gray-200' : ''} flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-[15px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white`}>
                                <AiOutlineProduct  className={`size-4.5`} />
                                Product
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.qrcode_generate.page')} className={`${route().current('admin.qrcode_generate.page') ? 'bg-gray-200' : ''} flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-[15px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white`}>
                                <AiOutlineProduct  className={`size-4.5`} />
                                Qrcode generate
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.warranty.list')} className={`${route().current('admin.warranty.list') ? 'bg-gray-200' : ''} flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-[15px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white`}>
                                <FaRegNewspaper  className={`size-4.5`} />
                                Warranty
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.distributor.list')} className={`${route().current('admin.distributor.list') ? 'bg-gray-200' : ''} flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-[15px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white`}>
                                <LiaUsersSolid  className={`size-4.5`} />
                                Distributor
                            </Link>
                        </li>
                    </ul>
                </nav>

                <footer className="mt-auto p-3 flex flex-col">
                    <ul className="flex flex-col gap-y-1">
                        <li>
                            <Link href={route('admin.app-setting.page')} className={`w-full flex items-center gap-x-2 py-2 px-2.5 text-[15px] text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:text-neutral-200`}>
                                <FaGear className={`size-4`} />
                                App Setting
                            </Link>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}
