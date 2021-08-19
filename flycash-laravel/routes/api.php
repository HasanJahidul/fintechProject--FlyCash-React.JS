<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/users-login', 'LoginController@verify');
Route::post('/users-register', 'RegisterController@register');

//========================   CUSTOMER   ======================================

    Route::post('/transaction','CustomerTransactionController@makeTransaction');


Route::get('/customer/transactionlist/{email}','CustomerTransactionController@index');

Route::get('/transaction1','CustomerTransactionController@index1');

Route::post('/customer/profile','CustomerController@updateCustomer');

//===================================================   Admin   ===========================================================


Route::get('/admin/customerList','AdminController@getAllCustomer');	
Route::get('/admin/edit-customer/{email}', 'AdminController@edit');
Route::put('/admin/update-customer/{email}', 'AdminController@update');



Route::get('/admin/officerList','AdminController@getAllOfficer');	
Route::get('/admin/ongoingCampaign','AdminController@ongoingCampaign');
Route::get('/admin/agentList','AdminController@getAllAgent');
Route::post('/admin/addComponent','AdminController@adminRegister');





Route::post('/admin/addCampaign','AdminController@addCampaign');

Route::post('/addmoneytoagent','AdminController@agentAddMoney');