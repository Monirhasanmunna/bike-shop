<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Services\Frontend\WarrantyService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WarrantyController extends Controller
{
    public function __construct( private readonly WarrantyService $service){}


    /**
     * @param Request $request
     * @param string $slug
     * @return Response
     */
    public function getData(Request $request, string $slug): Response
    {
        $response = $this->service->getData($request->query(), $slug);

        return Inertia::render('Frontend/Warranty/Page', $response);
    }


    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function storeData(Request $request): RedirectResponse
    {
        $request->validate([
            'product_slug' => 'required',
            'name' => 'required',
            'district' => 'required',
            'bike_model' => 'required',
            'mobile_number' => 'required|min: 11|max: 11',
            'sealant_use_for' => 'required',
            'image' => 'required|mimes:jpeg,png,jpg,gif,svg,webp|max:5112',
        ]);

        $response = $this->service->storeData($request->all());

        return $response['success']
            ? to_route('home')
            : back()->withErrors($response['errors']);
    }
}
