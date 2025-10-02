import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState, useRef, useEffect } from "react";

const TourDetailsAccordion = ({ title, content, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full border-b border-gray-300 py-5 px-2 space-y-6 overflow-hidden transition-all duration-300 ease-in-out  ${isOpen ? 'max-h-[800px]' : 'max-h-[70px]'}`}
        >
            <button type="button" className="w-full flex justify-between items-center">
                <div className="left-side flex gap-x-5 items-center">
                    {icon}
                    <h4 className="text-lg font-semibold text-[#00026E]">{title}</h4>
                </div>
                <div className="right-side flex items-center">
                    <IoIosArrowDown
                        className={`size-4 text-gray-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </div>
            </button>
            <div className="w-full px-10 text-[#00026E] overflow-y-auto text-[14px]">
                <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        </div>
    );
};

export default TourDetailsAccordion;
