import Main from "@/Layouts/Backend/Main.jsx";
import {RxUpload} from "react-icons/rx";
import Button from "@/Components/Utils/Button/Button.jsx";
import {useForm, usePage} from "@inertiajs/react";
import React, {useEffect, useRef, useState} from "react";
import TextEditor from "@/Components/Utils/TextEditor/TextEditor.jsx";
import QRCode from "react-qr-code";

export default function Page({data:productData}){
    console.log(productData)
    const {products} = productData

    const [isSubmit, setIsSubmit] = useState(false)
    const [data, setData] = useState({
        product_slug: '',
        total: '',
        size: '80'
    })

    useEffect(() => {
        setIsSubmit(false)
    }, [data]);

   const handleSubmitQuery = () => {
       setIsSubmit(true)
   }

    const handlePrint = () => {
        window.print();
    };

    return (
        <Main>
            <div className="w-full p-4 rounded bg-gray-100 shadow">
                <ol className="flex items-center whitespace-nowrap">
                    <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                        Dashboard
                        <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </li>
                    <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
                        Product Qr Code
                    </li>
                </ol>
            </div>
            <div className="w-full border-b border-gray-300 p-5 border rounded mt-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="form-control">
                        <label htmlFor="product" className={`label`}>Product <span className={`text-xs text-red-500`}>*</span></label>
                        <select id="product_slug" className={`input`} required={true} value={data.product_slug} onChange={(e)=> setData(prev=>({...prev, product_slug:e.target.value}))}>
                            <option hidden={true} disabled={true} value=''>Select once...</option>
                            {
                                products.map((product) => (
                                    <option key={product.slug} value={product.slug}>{product.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="w-full flex gap-6 items-center">
                        <div className="form-control ">
                            <label htmlFor="total" className={`label`}>Total <span className={`text-xs text-red-500`}>*</span></label>
                            <input type="number" id={`total`} required={true} value={data.total} className={`input`} placeholder={`Enter total`} onChange={(e)=> setData(prev=>({...prev, total:e.target.value}))}/>
                        </div>
                    </div>

                    <div className="w-full flex gap-6 items-center">
                        <div className="form-control ">
                            <label htmlFor="size" className={`label`}>Size <span className={`text-xs text-red-500`}>*</span></label>
                            <input type="number" id={`size`} required={true} className={`input`} value={data.size} placeholder={`Enter size`} onChange={(e)=> setData(prev=>({...prev, size:e.target.value}))}/>
                        </div>
                        <Button buttonText={'Submit'} type={`button`} className={`mt-7`} callback={() => handleSubmitQuery()} />
                    </div>
                </div>
            </div>

            {
                isSubmit && (
                    <div className="w-full border-b border-gray-300 p-5 border rounded mt-5" id={`qr-code-list`}>
                        <div className="w-full text-center mb-5">
                            <h1 className={`text-[22px]`}>{products.find((product) => product.slug === data.product_slug)?.name}</h1>
                        </div>
                        <div className="w-full flex flex-wrap items-center gap-3">
                            {
                                Array.from({length: data.total}, (_,i) => (
                                        <span key={i} className="qr-code-item">
                                            <QRCode
                                                value={route('warranty', data.product_slug)}
                                                size={data.size}
                                            />
                                        </span>
                                    ))
                                }
                        </div>

                        <Button buttonText={'Print'} type={`button`} className={`mt-7`} callback={() => handlePrint()}/>
                    </div>
                )
            }
        </Main>
    )
}
