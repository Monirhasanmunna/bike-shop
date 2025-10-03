<?php

use App\Http\Controllers\Backend\Page\PageController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.page.', 'prefix' => 'admin/page' ,'middleware' => ['auth']], function () {
    Route::get('/list', [PageController::class, 'getList'])->name('list');
    Route::post('/store', [PageController::class, 'store'])->name('store');
    Route::post('/update', [PageController::class, 'update'])->name('update');
    Route::post('/change-status', [PageController::class, 'changeStatus'])->name('change_status');
    Route::delete('/delete/{id}', [PageController::class, 'destroy'])->name('delete');
});
