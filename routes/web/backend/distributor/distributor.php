<?php

use App\Http\Controllers\Backend\Distributor\DistributorController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.distributor.', 'prefix' => 'admin/distributor' ,'middleware' => ['auth']], function () {
    Route::get('/list', [DistributorController::class, 'getList'])->name('list');
    Route::post('/store', [DistributorController::class, 'store'])->name('store');
    Route::post('/update', [DistributorController::class, 'update'])->name('update');
    Route::post('/change-status', [DistributorController::class, 'changeStatus'])->name('change_status');
    Route::delete('/delete/{id}', [DistributorController::class, 'destroy'])->name('delete');
});
