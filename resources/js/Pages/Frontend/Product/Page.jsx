import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import {Link, usePage} from "@inertiajs/react";
import QRCode from "react-qr-code";

export default function Page({ data }) {
    const {fileBase} = usePage().props
    const {products, category} = data
    return (
        <Main>
            <div className="min-h-screen px-4 py-12 bg-gray-50">
                <div className="container mx-auto min-h-screen bg-white rounded-2xl shadow p-6 md:p-10">

                    {/* Title */}
                    <div className="flex justify-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 text-center inline-flex border-b pb-2">
                            {category.name} Product
                        </h1>
                    </div>

                    {/* Content */}
                    {
                        products.length > 0 ? (
                            <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                                {
                                    products.map((product) => (
                                        <Link href={route('product_details', {slug:product.slug})}
                                              key={product.id}
                                              className="bg-white shadow-lg hover:shadow-2xl transition rounded-xl overflow-hidden flex flex-col border border-gray-100"
                                        >
                                            <div className="w-full flex justify-center bg-gray-50">
                                                <img
                                                    src={`${fileBase}/${product?.image}`}
                                                    alt={product}
                                                    className="w-full h-68 object-cover"
                                                />
                                            </div>
                                            <div className="p-6 flex flex-col items-center text-center flex-1">
                                                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                                {/*<div className="mt-3">*/}
                                                {/*    <QRCode*/}
                                                {/*        value={route('warranty', product.slug)}*/}
                                                {/*        size={80}*/}
                                                {/*    />*/}
                                                {/*</div>*/}
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className={`w-full flex justify-center items-center`}>
                                <h2 className={`text-[22px] font-semibold`}>No Product Found</h2>
                            </div>
                        )
                    }
                </div>
            </div>
        </Main>
    );
}
