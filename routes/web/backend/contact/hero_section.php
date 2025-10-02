<?php

use App\Http\Controllers\Backend\ContactDetails\HeroSectionController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.contact-details.', 'prefix' => 'admin/contact-details' ,'middleware' => ['auth']], function () {
    Route::group(['as'=> 'hero.', 'prefix' => 'hero' ,'middleware' => ['auth']], function () {
        Route::get('/', [HeroSectionController::class, 'getData'])->name('page');
        Route::post('/update', [HeroSectionController::class, 'update'])->name('update');
    });
});
