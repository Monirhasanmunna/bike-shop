import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Notifier from "@/Components/Utils/Notification/Notifier.jsx";

export default function Page({data: warrantyData}) {
    const {product} = warrantyData
    const { data, setData, post, processing, errors, reset } = useForm({
        product_slug: product.slug,
        name: "",
        district: "",
        country: "",
        bike_model: "",
        mobile_number: "",
        sealant_use_for: "",
        image: null,
    });

    const [preview, setPreview] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("warranty.store"), {
            onSuccess: () => {
                reset();
                setPreview(null);
            },
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Notifier/>
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Warranty Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2.5"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* District */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">District</label>
                        <input
                            type="text"
                            value={data.district}
                            onChange={(e) => setData("district", e.target.value)}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2.5"
                            required
                        />
                        {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district}</p>}
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Country</label>
                        <input
                            type="text"
                            value={data.country}
                            onChange={(e) => setData("country", e.target.value)}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2.5"
                            required
                        />
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                    </div>

                    {/* Bike Model */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bike Model</label>
                        <input
                            type="text"
                            value={data.bike_model}
                            onChange={(e) => setData("bike_model", e.target.value)}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2.5"
                            required
                        />
                        {errors.bike_model && <p className="text-red-500 text-sm mt-1">{errors.bike_model}</p>}
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="tel"
                            pattern="[0-9]{11}"
                            value={data.mobile}
                            onChange={(e) => setData("mobile_number", e.target.value)}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2.5"
                            required
                        />
                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                    </div>

                    {/* Sealant Used For */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sealant Used For</label>
                        <select
                            value={data.sealant}
                            onChange={(e) => setData("sealant_use_for", e.target.value)}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-2.5"
                            required
                        >
                            <option value="">Select...</option>
                            <option value="front">Front Wheel</option>
                            <option value="rear">Rear Wheel</option>
                            <option value="both">Both</option>
                        </select>
                        {errors.sealant_use_for && <p className="text-red-500 text-sm mt-1">{errors.sealant_use_for}</p>}
                    </div>

                    {/* Photo Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="mt-1 w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0 file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {preview && (
                            <img
                                src={preview}
                                alt="Preview"
                                className="mt-3 h-32 w-32 object-cover rounded-lg border"
                            />
                        )}
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className={`w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg shadow transition
                            ${processing ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"}`}
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
