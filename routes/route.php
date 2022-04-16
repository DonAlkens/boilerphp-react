<?php

use App\Core\Urls\Route;

/** 
 * Create all routes here 
 * Route::get("/, "BaseController::home");
 * 
 * */

Route::get("/", "BaseController::index")->as("home");
Route::get('/products', 'BaseController::index')->as('products');
Route::get('/add-product', 'BaseController::index')->as('add-product');
Route::get('/product-edit/{id:int}', 'BaseController::index')->as('edit-product');
Route::get('/product-detail/{id:int}', 'BaseController::index')->as('product-detail');
Route::get('/orders', 'BaseController::index')->as('orders');
Route::get('/order/{id:int}', 'BaseController::index')->as('order');
Route::get('/customers', 'BaseController::index')->as('customers');