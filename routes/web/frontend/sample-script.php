<?php

use App\Http\Controllers\Frontend\SampleScriptController;
use Illuminate\Support\Facades\Route;


Route::get('/sample-script', [SampleScriptController::class, 'getList'])->name('sample-script');
