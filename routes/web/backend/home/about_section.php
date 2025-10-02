<?php

use App\Http\Controllers\Backend\Home\AboutSectionController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.about_section.', 'prefix' => 'admin/about-section' ,'middleware' => ['auth']], function () {
    Route::get('/', [AboutSectionController::class, 'getData'])->name('page');
    Route::post('/update', [AboutSectionController::class, 'update'])->name('update');
});
