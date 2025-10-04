<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Services\Frontend\WarrantyService;
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
}
