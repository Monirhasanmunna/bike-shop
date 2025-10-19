<?php

use App\Http\Controllers\Frontend\ProductController;
use Illuminate\Support\Facades\Route;


Route::get('/category/{slug}', [ProductController::class, 'getList'])->name('product.list');

