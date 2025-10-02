<?php

namespace App\Http\Controllers\Backend\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\BlogSection\BlogSectionStatusChangeRequest;
use App\Http\Requests\Backend\BlogSection\BlogSectionStoreRequest;
use App\Http\Requests\Backend\BlogSection\BlogSectionUpdateRequest;
use App\Http\Services\Backend\ProductService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{

    public function __construct( private readonly ProductService $service){}

    /**
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function getList(Request $request): Response|RedirectResponse
    {
        $response = $this->handleSession( $this->service->getListData( $request->query()));

        return $response['success'] ?
            Inertia::render('Backend/Product/Page', $response)
            : back()->withErrors($response['message']);

    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:5112',
        ]);

        $response = $this->handleSession( $this->service->storeData( $request->all()));

        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }


    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:5112',
        ]);

        $response = $this->handleSession( $this->service->updateData( $request->all()));

        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }


    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function changeStatus (Request $request): RedirectResponse
    {
        $request->validate([
            'id'     => 'required|string|exists:products,id',
            'status' => 'required|in:'.implode(',', [STATUS_ACTIVE, STATUS_INACTIVE]),
        ]);

        $response = $this->service->changeStatus( $request->all());
        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }


    /**
     * @param string $id
     * @return RedirectResponse
     */
    public function destroy (string $id): RedirectResponse
    {
        $response = $this->service->deleteData( $id);
        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }

}
