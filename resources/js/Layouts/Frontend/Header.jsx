import React from 'react'
import {Link, usePage} from "@inertiajs/react";
import LargeScreenNav from "@/Components/Frontend/Home/HeaderSection/LargeScreenNav.jsx";
import MobileScreenNav from "@/Components/Frontend/Home/HeaderSection/MobileScreenNav.jsx";

const Header = ({pages, categories}) => {

    return (
        <div className="w-full">
            <LargeScreenNav pages={pages} categories={categories} />
            <MobileScreenNav pages={pages} categories={categories} />
        </div>
    )
}

export default Header
