<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () { return view('index'); });

/**
 * blog
 */
Route::get('/blog', function () { return view('blog/index'); });
Route::get('/blog/post/{id}', function ($id) { return view('blog/post',['id'=>$id]); });
Route::get('/blog/archives', function () { return view('blog/archives'); });
Route::get('/blog/gallery', function () { return view('blog/gallery'); });


/* utility */
if (env('APP_ENV') == 'local' || env('APP_ENV') == 'develop') {
  Route::get('/phpinfo', function () { return view('phpinfo'); });
}

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

/**
 * test
 */
Route::get('/test/vueajax', [App\Http\Controllers\VueajaxController::class, 'index'])->name('vueajax');

/**
 * vue
 */
Route::get('/vue', function () { return view('vue/index'); });
Route::get('/vue/ajax_get', function () { return view('vue/ajax_get'); });
Route::get('/vue/component', function () { return view('vue/component'); });

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


// var_dump($request->ip());s
// var_dump($_SERVER['REMOTE_ADDR']);
// var_dump(Request::ip());
// die();


// var_dump( env('APP_ALLOW_GIP'));
// if (
//   env('APP_ENV') == 'local' ||
//   Request::ip() == '150.249.203.12' && env('APP_ENV') == 'prod' ||
//   // 126.235.23.188
//   Request::ip() == '126.235.23.188' && env('APP_ENV') == 'prod'
// ) {
  Route::get('/uploader', [App\Http\Controllers\UploadController::class, 'uploader'])->name('uploader');
  Route::post('/save', [App\Http\Controllers\UploadController::class, 'save'])->name('upload_save');
// }


