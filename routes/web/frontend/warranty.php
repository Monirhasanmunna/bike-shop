<?php

use App\Http\Controllers\Frontend\WarrantyController;
use Illuminate\Support\Facades\Route;


Route::get('/warranty/{slug}', [WarrantyController::class, 'getData'])->name('warranty');
