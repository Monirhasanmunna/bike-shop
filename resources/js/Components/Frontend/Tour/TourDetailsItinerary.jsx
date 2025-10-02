import {SlLocationPin} from "react-icons/sl";
import {convertTo12Hour} from "@/helpers/helper.js";
import {usePage} from "@inertiajs/react";

export default function TourDetailsItinerary({item}){
    const {fileBase} = usePage().props

    return (
        <div className="flex flex-col md:flex-row md:items-start">
            <div className="absolute left-[-7px] -ml-3 w-[40px] h-[40px] bg-blue-800 rounded-full flex items-center justify-center text-white">
                <SlLocationPin className={`size-5`} />
            </div>
            <div className="w-full px-8">
                <p className="text-sm text-gray-500">{convertTo12Hour(item.scheduled_time)} · {item.location}</p>
                <h3 className="text-lg font-semibold text-[#00026E]">{item.title}</h3>
                <div className={`w-full flex flex-col md:flex-row gap-6 mt-2`}>
                    {
                        item.image && (
                            <div className="w-full md:w-[40%] shrink-0">
                                <img className={`w-full h-[200px] object-cover`} src={fileBase + '/' + item.image} alt="image"/>
                            </div>
                        )
                    }
                    <div className={`w-full ${item.image && 'md:w-[60%]'}`}>
                        <div className="text-[#00026E] text-[14px]" dangerouslySetInnerHTML={{__html: item.description}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
