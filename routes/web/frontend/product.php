<?php

use App\Http\Controllers\Frontend\PageController;
use App\Http\Controllers\Frontend\ProductController;
use Illuminate\Support\Facades\Route;


Route::get('/products', [ProductController::class, 'getAllData'])->name('all_product');
Route::get('/product/{slug}', [ProductController::class, 'getData'])->name('product_details');

Route::get('/{slug}', [PageController::class, 'getData'])->name('page');
