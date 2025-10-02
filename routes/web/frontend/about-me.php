<?php

use App\Http\Controllers\Frontend\AboutMeController;
use Illuminate\Support\Facades\Route;


Route::get('/about-me', [AboutMeController::class, 'getList'])->name('about_me');
