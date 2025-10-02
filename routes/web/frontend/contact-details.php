<?php

use App\Http\Controllers\Frontend\ContactDetailsController;
use Illuminate\Support\Facades\Route;


Route::get('/contact-details', [ContactDetailsController::class, 'getList'])->name('contact_details');
