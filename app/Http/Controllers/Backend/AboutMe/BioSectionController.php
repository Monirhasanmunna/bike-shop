<?php

namespace App\Http\Controllers\Backend\AboutMe;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\BioSection\BioSectionUpdateRequest;
use App\Http\Services\Backend\BioSectionService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BioSectionController extends Controller
{

    public function __construct( private readonly BioSectionService $service){}

    /**
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function getData(Request $request): Response|RedirectResponse
    {
        $response = $this->handleSession( $this->service->getData( ['page_name' => 'about-me-bio']));

        return $response['success'] ?
            Inertia::render('Backend/AboutMe/Bio/Page', $response)
            : back()->withErrors($response['message']);
    }


    /**
     * @param BioSectionUpdateRequest $request
     * @return RedirectResponse
     */
    public function update(BioSectionUpdateRequest $request): RedirectResponse
    {
        $response = $this->handleSession( $this->service->updateData( $request->all()));

        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }
}
