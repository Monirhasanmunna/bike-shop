<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\Contact\ContactStoreRequest;
use App\Http\Services\Frontend\ContactService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function __construct( private readonly ContactService $service){}


    /**
     * @param ContactStoreRequest $request
     * @return RedirectResponse|Response
     */
    public function storeData(ContactStoreRequest $request): Response|RedirectResponse
    {
        $response = $this->handleSession( $this->service->storeData( $request->all()));

        return $response['success'] ?
            back()->with($response) :
            back()->withErrors($response['message']);
    }
}
