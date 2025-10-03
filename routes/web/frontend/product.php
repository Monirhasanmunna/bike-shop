<?php

use App\Http\Controllers\Frontend\ProductController;
use Illuminate\Support\Facades\Route;


Route::get('/product/{slug}', [ProductController::class, 'getList'])->name('product_details');
