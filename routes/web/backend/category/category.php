<?php

use App\Http\Controllers\Backend\Category\CategoryController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.category.', 'prefix' => 'admin/category' ,'middleware' => ['auth']], function () {
    Route::get('/list', [CategoryController::class, 'getList'])->name('list');
    Route::post('/store', [CategoryController::class, 'store'])->name('store');
    Route::post('/update', [CategoryController::class, 'update'])->name('update');
    Route::post('/change-status', [CategoryController::class, 'changeStatus'])->name('change_status');
    Route::delete('/delete/{id}', [CategoryController::class, 'destroy'])->name('delete');
});
