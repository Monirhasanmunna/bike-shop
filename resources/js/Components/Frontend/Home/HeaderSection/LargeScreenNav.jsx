import {Link, usePage} from "@inertiajs/react";

export default function LargeScreenNav() {
    const {fileBase, logo} = usePage().props
    return (
        <div className={`w-full hidden lg:block border-b border-gray-200 bg-gray-50 shadow z-999`}>
            <div className="container flex items-center justify-between h-[80px]">
                <div className={`flex gap-x-10 items-center py-3`}>
                    <ul className={`flex items-center gap-x-10 `}>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${route().current('home') ? 'active' : ''}`}><Link href={route('home')}>Home</Link></li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${route().current('about_company') ? 'active' : ''}`}><Link href={route('about_company')}>About My Company</Link></li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${route().current('about_me') ? 'active' : ''}`}><Link href={route('about_me')}>About Me</Link></li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${route().current('sample-script') ? 'active' : ''}`}><Link href={route('sample-script')}>Sample Scripts</Link></li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${route().current('contact_details') ? 'active' : ''}`}><Link href={route('contact_details')}>Contact Details</Link></li>
                    </ul>
                </div>
                <div className={`p-5`}>
                    <img src={`${fileBase}/${logo?.path}`} alt="logo" className="h-13" />
                </div>
            </div>
        </div>
    )
}
