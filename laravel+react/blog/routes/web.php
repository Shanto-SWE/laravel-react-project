<?php

use Illuminate\Support\Facades\Route;
use\App\Http\Controllers\HomeIndex;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/getCourse',[HomeIndex::class,'getCourseFeature']);
Route::get('/getCoursePlan',[HomeIndex::class,'getCoursePlan']);
Route::get('/getPaymentGuide',[HomeIndex::class,'getPaymetnGuide']);
Route::get('/getFreeClass',[HomeIndex::class,'getFreeClass']);
Route::get('/getMoreSeries',[HomeIndex::class,'getMoreSeries']);




Route::get('/', function () {
    return view('index');
});

Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath','.*');



