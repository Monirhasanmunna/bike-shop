import {FaMinus, FaPlus} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";

export default function SelectTourForm(){
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`w-full h-auto relative cursor-pointer`}>
            <div onClick={() => setIsShowDropdown(!isShowDropdown)} className="w-full p-3 border border-gray-200 rounded shadow-md shadow-gray-100">
                <h6 className={`text-[13px] text-gray-600`}>Traveler's</h6>
            </div>

            <div ref={dropdownRef} className={`${!isShowDropdown && 'hidden'} absolute bottom-[-115px] w-full border border-gray-200 bg-white rounded shadow`}>
                <div className="w-full">
                    <div className="w-full flex justify-between items-center border-b border-gray-200 p-3">
                        <h4 className={`text-[17px] text-[#00026E]`}>Adult</h4>
                        <div className="w-[100px] flex items-center justify-end gap-x-3">
                            <button type={`button`} className={`w-[20px] h-[20px] rounded-full bg-red-500 flex items-center justify-center p-1.5 text-white cursor-pointer`}><FaMinus className={`size-6`} /></button>
                            <span className={`text-[18px] font-semibold`}>1</span>
                            <button type={`button`} className={`w-[20px] h-[20px] rounded-full bg-blue-500 flex items-center justify-center p-1.5 text-white cursor-pointer`}><FaPlus className={`size-6`} /></button>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center border-b border-gray-200 p-3">
                        <h4 className={`text-[17px] text-[#00026E]`}>Adult</h4>
                        <div className="w-[100px] flex items-center justify-end gap-x-3">
                            <button type={`button`} className={`w-[20px] h-[20px] rounded-full bg-red-500 flex items-center justify-center p-1.5 text-white cursor-pointer`}><FaMinus className={`size-6`} /></button>
                            <span className={`text-[18px] font-semibold`}>1</span>
                            <button type={`button`} className={`w-[20px] h-[20px] rounded-full bg-blue-500 flex items-center justify-center p-1.5 text-white cursor-pointer`}><FaPlus className={`size-6`} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
