<?php

use App\Http\Controllers\Backend\SampleScript\HeroSectionController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.sample-script.', 'prefix' => 'admin/sample-script' ,'middleware' => ['auth']], function () {
    Route::group(['as'=> 'hero.', 'prefix' => 'hero' ,'middleware' => ['auth']], function () {
        Route::get('/', [HeroSectionController::class, 'getData'])->name('page');
        Route::post('/update', [HeroSectionController::class, 'update'])->name('update');
    });
});
