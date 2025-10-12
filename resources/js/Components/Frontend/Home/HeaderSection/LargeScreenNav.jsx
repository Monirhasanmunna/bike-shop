import {Link, usePage} from "@inertiajs/react";

export default function LargeScreenNav({pages}) {
    const {fileBase, logo} = usePage().props
    return (
        <div className={`w-full hidden lg:block border-b border-gray-200 bg-gray-50 shadow z-999`}>
            <div className="container flex items-center justify-between h-[80px]">
                <div className={`flex gap-x-10 items-center py-3`}>
                    <ul className={`flex items-center gap-x-10 `}>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${route().current('home') ? 'active' : ''}`}><Link href={route('home')}>Home</Link></li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${route().current('product.list') ? 'active' : ''}`}><Link href={route('product.list')}>Product</Link></li>
                        {
                            pages.map((page) => (
                                <li key={page?.id} className={`text-gray-700 font-semibold cursor-pointer uppercase nav_link ${route().current('page', { slug: page.slug }) ? 'active' : ''}`}><Link href={route('page', {slug: page.slug})} >{page?.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className={`p-5`}>
                    <img src={`${fileBase}/${logo?.path}`} alt="logo" className="h-13" />
                </div>
            </div>
        </div>
    )
}
