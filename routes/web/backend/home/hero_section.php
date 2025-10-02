<?php

use App\Http\Controllers\Backend\Home\HeroSectionController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.hero_section.', 'prefix' => 'admin/hero-section' ,'middleware' => ['auth']], function () {
    Route::get('/', [HeroSectionController::class, 'getData'])->name('page');
    Route::post('/update', [HeroSectionController::class, 'update'])->name('update');
});
