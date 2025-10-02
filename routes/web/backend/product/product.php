<?php

use App\Http\Controllers\Backend\Product\ProductController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.product.', 'prefix' => 'admin/product' ,'middleware' => ['auth']], function () {
    Route::get('/list', [ProductController::class, 'getList'])->name('list');
    Route::post('/store', [ProductController::class, 'store'])->name('store');
    Route::post('/update', [ProductController::class, 'update'])->name('update');
    Route::post('/change-status', [ProductController::class, 'changeStatus'])->name('change_status');
    Route::delete('/delete/{id}', [ProductController::class, 'destroy'])->name('delete');
});
