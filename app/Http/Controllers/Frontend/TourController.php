<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Services\Frontend\Tour\TourService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TourController extends Controller
{
    public function __construct(
        private readonly TourService $service,
    ){}


    /**
     * @param Request $request
     * @param string $slug
     * @return Response
     */
    public function getDetails(Request $request, string $slug): Response
    {
        $response = $this->service->getDetailsData($slug, $request->query());

        return Inertia::render('Client/Tour/Details/Page', $response);
    }
}
