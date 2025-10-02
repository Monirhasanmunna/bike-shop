import React from "react";

export default function ProductDetails({ product }) {
    return (
        <div className="bg-gray-50 min-h-screen px-4 py-12">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                {/* Product Header with Image */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-8">
                    <div className="md:w-1/3 flex justify-center">
                        <img
                            src={product?.image} // dynamic image URL
                            alt={product?.title}
                            className="w-full h-auto rounded-xl shadow object-cover"
                        />
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            {product?.title}
                        </h1>
                        {/* Quill Editor Content */}
                        <div
                            className="prose max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{ __html: product?.content }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
