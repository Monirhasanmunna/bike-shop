<?php

namespace App\Http\Controllers\Backend\Home;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\HeroSection\HeroSectionUpdateRequest;
use App\Http\Services\Backend\AboutSectionService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AboutSectionController extends Controller
{

    public function __construct( private readonly AboutSectionService $service){}

    /**
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function getData(Request $request): Response|RedirectResponse
    {
        $response = $this->handleSession( $this->service->getData($request->query()) );

        return $response['success'] ?
            Inertia::render('Backend/AboutSection/Page', $response)
            : back()->withErrors($response['message']);
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:5112',
        ]);

        $response = $this->handleSession( $this->service->updateData( $request->all()));

        return $response['success'] ?
            back()->with($response)
            : back()->withErrors($response['message']);
    }
}
