import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { Navigation, EffectCoverflow } from 'swiper/modules'

const faqs = [
    {
        question: "Q. What is SnapTreker Flight?",
        answer: "SnapTreker is the #1 Travel agency in Bangladesh. It provides all travel solutions, including flight booking, accommodations, holiday packages, and visa processing. SnapTreker Flight is your one-stop destination to get an air ticket at the best price possible from all available airlines and a firm refund policy.",
    },
    {
        question: "Q.  Why do you book the flight by SnapTreker?",
        answer: "SnapTreker’s Flight gives you the best deal on flights by searching all available airlines based on your preferred route. Thus, you don’t have to go through multiple airlines’ websites to know the price of your flight. Through SnapTreker’s Flight, you will have a worry-free travel experience at your fingertips.",
    },
    {
        question: "Q.  How does SnapTreker find low flight prices?",
        answer: "SnapTreker has partnered with top airlines worldwide to provide you with the best possible price for your desired flight. When you search for a flight, our system goes through all available airlines’ portals and provides you with the best price available based on your desired route.",
    },
    {
        question: "Q.  How do I find the best flight deals on SnapTreker?",
        answer: "To find the best flight deals on SnapTreker, you need to enter where you’re flying from and where you’re flying to your desired travel date, and how many people will be taking the flight. Based on your information, SnapTreker will provide you with various available flight options, and you can choose the one that suits your needs.",
    },{
        question: "Q.  What details do you need to book a flight on SnapTreker?",
        answer: "To book a flight on SnapTreker, you will need to have a registered account with us. You will need to enter your name, nationality, mobile number, date of birth, postcode, and email address for domestic flights. For international flights, you will need to enter your name, nationality, mobile number, date of birth, postcode, email address, passport details, and visa copy (if applicable).",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-8">
            <div className="container mx-auto">
                <div className="header text-center md:w-[40%] mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                    <h5 className="text-sm mb-6 text-gray-500">Find quick answers to common queries. Simplify your travel planning with our concise and informative FAQ section.</h5>
                </div>
                <div className="w-full space-y-2 border border-gray-300 rounded-md md:w-[70%] mx-auto overflow-hidden">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className={`${index === 0 ? '' : 'border-t'} border-gray-300 py-2 transition-all duration-300 px-4`}>
                                <button onClick={() => toggleFAQ(index)} className="w-full text-left flex justify-between items-center py-2">
                                    <span className="text-[17px] font-semibold text-gray-800">{faq.question}</span>
                                    <span className={`text-2xl ${isOpen ? 'rotate-180' : 'rotate-90'} transform transition-transform duration-300`}>
                                      {isOpen ? "−" : "+"}
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}

export default FAQSection
