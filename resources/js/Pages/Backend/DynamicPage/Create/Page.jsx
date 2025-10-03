import {RxCross2} from "react-icons/rx";
import {useEffect} from "react";
import {Link, useForm} from "@inertiajs/react";
import {HSOverlay} from "preline";
import Button from "@/Components/Utils/Button/Button.jsx";
import TextEditor from "@/Components/Utils/TextEditor/TextEditor.jsx";
import Main from "@/Layouts/Backend/Main.jsx";

export default function Page({data: pageData}){
    const {data, setData, post, processing, errors, reset} = useForm({
        title: '',
        content: '',
    });

    useEffect(() => {
        if(pageData?.page){
            setData({
                ...data,
                title: pageData?.page.title ?? '',
                content: pageData?.page.content ?? '',
                id: pageData?.page.id ?? ''
            })
        } else {
            setData({
                title: '',
                content: '',
            })
        }
    }, [pageData?.page])


    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(!pageData?.page){
            post(route('admin.page.store'), {
                preserveState: true,
                preserveScroll: true,
                onError: () => HSOverlay.open('#page-form'),
                onSuccess: () => {
                    HSOverlay.close('#page-form')
                    reset()
                }
            })
        }else{
            post(route('admin.page.update'), {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    reset()
                }
            })
        }
    }

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
                    <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                        Page
                        <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </li>
                    <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
                        {pageData?.page ? 'Edit' : 'Create'}
                    </li>
                </ol>
            </div>
            <div className="w-full border border-gray-300 rounded mt-5">
                <div className="flex items-center justify-between border-b border-gray-300 px-5 py-3">
                    <div className="flex items-center gap-x-6">
                        <h2 className="font-medium text-xl leading-6 text-neutral-700 dark:text-neutral-300">Page {pageData?.page ? 'Update' : 'Update'}</h2>
                    </div>
                    <Link  href={route('admin.page.list')}
                            className="py-1.5 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded bg-gray-400 text-black hover:bg-gray-500"
                            aria-haspopup="dialog" aria-expanded="false" aria-controls="page-form"
                            data-hs-overlay="#page-form">
                        Back
                    </Link>
                </div>
                <div className="p-4 overflow-y-auto">
                    <form onSubmit={handleSubmitForm}  className={`w-full space-y-2`}>
                        <div className="form-control">
                            <label htmlFor="title" className={`label`}>Name <span className={`text-xs text-red-600`}>*</span></label>
                            <input type="text" className={`input`} value={data.title} onChange={(e) => setData(prev => ({...prev, title: e.target.value}))}/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="content" className={`label`}>Content <span className={`text-xs text-red-600`}>*</span></label>
                            <TextEditor value={data.content} setValue={(value) =>setData(prev => ({...prev, content: value}))} />
                        </div>

                        <div className="form-control pt-4">
                            <div className="w-full flex gap-x-4">
                                <Button buttonText={!pageData?.page ? 'Create' : 'Update'} isLoading={processing} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Main>
    )
}
