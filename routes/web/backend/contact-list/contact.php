<?php

use App\Http\Controllers\Backend\Contact\ContactController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.contact.', 'prefix' => 'admin/contact' ,'middleware' => ['auth']], function () {
    Route::get('/', [ContactController::class, 'getList'])->name('list');
    Route::delete('/delete/{id}', [ContactController::class, 'destroy'])->name('delete');
});
