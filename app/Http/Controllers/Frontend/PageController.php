<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Services\Frontend\PageService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function __construct( private readonly PageService $service){}


    /**
     * @param Request $request
     * @param string $slug
     * @return Response
     */
    public function getData(Request $request, string $slug): Response
    {
        $response = $this->service->getData($request->query(), $slug);

        return Inertia::render('Frontend/DynamicPage/Page', $response);
    }
}
