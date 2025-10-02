<?php

use App\Http\Controllers\Backend\AboutMe\BioSectionController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.about-me.', 'prefix' => 'admin/about-me' ,'middleware' => ['auth']], function () {
    Route::group(['as'=> 'bio.', 'prefix' => 'bio' ,'middleware' => ['auth']], function () {
        Route::get('/', [BioSectionController::class, 'getData'])->name('page');
        Route::post('/update', [BioSectionController::class, 'update'])->name('update');
    });
});
