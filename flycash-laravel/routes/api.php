<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/users-login', 'LoginController@verify');

//========================   CUSTOMER   ======================================


Route::get('/customer/transactionlist','CustomerTransactionController@index');


Route::post('/transaction','CustomerTransactionController@makeTransaction');
Route::get('/transaction1','CustomerTransactionController@index1');