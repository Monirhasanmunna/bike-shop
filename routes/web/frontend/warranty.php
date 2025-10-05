<?php

use App\Http\Controllers\Frontend\WarrantyController;
use Illuminate\Support\Facades\Route;


Route::get('/warranty/{slug}', [WarrantyController::class, 'getData'])->name('warranty');
Route::post('/warranty/store', [WarrantyController::class, 'storeData'])->name('warranty.store');
