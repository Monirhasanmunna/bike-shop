<?php

use App\Http\Controllers\Frontend\ProductController;
use Illuminate\Support\Facades\Route;


Route::get('/product/list', [ProductController::class, 'getList'])->name('product.list');
Route::get('/product/{slug}', [ProductController::class, 'getData'])->name('product_details');
