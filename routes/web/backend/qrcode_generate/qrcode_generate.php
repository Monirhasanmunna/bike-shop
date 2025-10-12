<?php

use App\Http\Controllers\Backend\GenerateQrCode\GenerateQrCodeController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.qrcode_generate.', 'prefix' => 'admin/qrcode-generate' ,'middleware' => ['auth']], function () {
    Route::get('/', [GenerateQrCodeController::class, 'generateCode'])->name('page');
});
