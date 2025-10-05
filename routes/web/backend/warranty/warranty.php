<?php

use App\Http\Controllers\Backend\Warranty\WarrantyController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.warranty.', 'prefix' => 'admin/warranty' ,'middleware' => ['auth']], function () {
    Route::get('/list', [WarrantyController::class, 'getList'])->name('list');
    Route::post('/store', [WarrantyController::class, 'store'])->name('store');
    Route::post('/update', [WarrantyController::class, 'update'])->name('update');
    Route::post('/change-status', [WarrantyController::class, 'changeStatus'])->name('change_status');
    Route::delete('/delete/{id}', [WarrantyController::class, 'destroy'])->name('delete');
});
