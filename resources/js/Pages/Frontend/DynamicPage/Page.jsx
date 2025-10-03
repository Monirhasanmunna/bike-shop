import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";

export default function DynamicPage({ data: pageData }) {
    const { page } = pageData;

    return (
        <Main>
            <div className="min-h-screen px-4 py-12 bg-gray-50">
                <div className="container mx-auto bg-white rounded-2xl shadow p-6 md:p-10">

                    {/* Title */}
                    <div className="flex justify-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 text-center inline-flex border-b pb-2">
                            {page?.title}
                        </h1>
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: page?.content }}
                    />
                </div>
            </div>
        </Main>
    );
}
