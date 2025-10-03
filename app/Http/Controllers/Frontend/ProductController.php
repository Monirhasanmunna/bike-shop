<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Services\Frontend\ProductService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function __construct( private readonly ProductService $service){}


    /**
     * @param Request $request
     * @param string $slug
     * @return Response
     */
    public function getList(Request $request, string $slug): Response
    {
        $response = $this->service->getData($request->query(), $slug);

        return Inertia::render('Frontend/ProductDetails/Page', $response);
    }
}
