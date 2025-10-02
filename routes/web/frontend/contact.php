<?php

use App\Http\Controllers\Frontend\ContactController;
use Illuminate\Support\Facades\Route;


Route::post('/store/contact', [ContactController::class, 'storeData'])->name('store.contact');
