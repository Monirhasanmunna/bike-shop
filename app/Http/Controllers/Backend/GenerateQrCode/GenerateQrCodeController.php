<?php

namespace App\Http\Controllers\Backend\GenerateQrCode;

use App\Http\Controllers\Controller;
use App\Http\Services\Backend\GenerateQrCodeService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GenerateQrCodeController extends Controller
{

    public function __construct( private readonly GenerateQrCodeService $service){}

    /**
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function generateCode(Request $request): Response|RedirectResponse
    {
        $response = $this->handleSession( $this->service->generateCode());

        return $response['success'] ?
            Inertia::render('Backend/QrCodeGenerate/Page', $response)
            : back()->withErrors($response['message']);
    }
}
