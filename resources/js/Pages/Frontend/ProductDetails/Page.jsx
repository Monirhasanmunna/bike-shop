import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import fileUpload from "preline/src/plugins/file-upload/index.js";
import { usePage } from "@inertiajs/react";

export default function ProductDetails({ data: productData }) {
    const { fileBase } = usePage().props;
    const { product } = productData;

    return (
        <Main>
            <div className="min-h-screen px-4 py-12">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">

                    <h1 className="text-4xl font-extrabold mb-8 text-center md:text-left">
                        Product Details
                    </h1>

                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-8">
                        <div className="md:w-1/3 flex justify-center">
                            <img
                                src={`${fileBase}/${product?.image}`}
                                alt={product?.name}
                                className="w-full h-auto rounded-xl shadow object-cover"
                            />
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                {product?.name}
                            </h2>
                        </div>
                    </div>

                    <div
                        className="prose max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: product?.description }}
                    />
                </div>
            </div>
        </Main>
    );
}
