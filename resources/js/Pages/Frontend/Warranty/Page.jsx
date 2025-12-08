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
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100 p-6">
            <Notifier />

            <div className="w-full max-w-lg bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100 p-8 md:p-10">
                <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
                    🛠️ Warranty Registration
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 transition"
                            placeholder="Enter your full name"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            pattern="[0-9]{11}"
                            value={data.mobile}
                            onChange={(e) => setData("mobile_number", e.target.value)}
                            className="w-full rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 transition"
                            placeholder="Ex: 017XXXXXXXX"
                            required
                        />
                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                            type="text"
                            value={data.country}
                            onChange={(e) => setData("country", e.target.value)}
                            className="w-full rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 transition"
                            placeholder="Enter your country"
                            required
                        />
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                    </div>

                    {/* District */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                        <input
                            type="text"
                            value={data.district}
                            onChange={(e) => setData("district", e.target.value)}
                            className="w-full rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 transition"
                            placeholder="Enter your district"
                            required
                        />
                        {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district}</p>}
                    </div>

                    {/* Bike Model */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bike Model</label>
                        <input
                            type="text"
                            value={data.bike_model}
                            onChange={(e) => setData("bike_model", e.target.value)}
                            className="w-full rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 transition"
                            placeholder="Ex: Yamaha R15 V4"
                            required
                        />
                        {errors.bike_model && <p className="text-red-500 text-sm mt-1">{errors.bike_model}</p>}
                    </div>

                    {/* Sealant Used For */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sealant Used For</label>
                        <select
                            value={data.sealant}
                            onChange={(e) => setData("sealant_use_for", e.target.value)}
                            className="w-full rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 transition bg-white"
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0 file:font-semibold
                        file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition"
                        />
                        {preview && (
                            <img
                                src={preview}
                                alt="Preview"
                                className="mt-3 h-32 w-32 object-cover rounded-lg border shadow-sm"
                            />
                        )}
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className={`w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-transform duration-300
                        ${processing ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] hover:shadow-lg"}`}
                        >
                            {processing ? "Submitting..." : "Submit Warranty"}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
