import React from 'react'
import {Link, usePage} from "@inertiajs/react";
import LargeScreenNav from "@/Components/Frontend/Home/HeaderSection/LargeScreenNav.jsx";
import MobileScreenNav from "@/Components/Frontend/Home/HeaderSection/MobileScreenNav.jsx";

const Header = () => {
    const {pages} = usePage().props
    return (
        <div className="w-full">
            <LargeScreenNav pages={pages} />
            <MobileScreenNav pages={pages} />
        </div>
    )
}

export default Header
