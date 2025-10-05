<?php

namespace App\Http\Controllers\Backend\Warranty;

use App\Http\Controllers\Controller;
use App\Http\Services\Backend\WarrantyService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WarrantyController extends Controller
{

    public function __construct( private readonly WarrantyService $service){}

    /**
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function getList(Request $request): Response|RedirectResponse
    {
        $response = $this->handleSession( $this->service->getListData( $request->query()));

        return $response['success'] ?
            Inertia::render('Backend/WarrantyClaim/Page', $response)
            : back()->withErrors($response['message']);

    }


    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function changeStatus (Request $request): RedirectResponse
    {
        $request->validate([
            'id'     => 'required|string|exists:warranty_claims,id',
            'status' => 'required|in:'.implode(',', [WARRANTY_APPLIED, WARRANTY_CLAIMED, WARRANTY_CANCELLED]),
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
