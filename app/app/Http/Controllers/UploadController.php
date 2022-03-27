<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth');
  }
  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Contracts\Support\Renderable
   */
  public function uploader()
  {
    return view('uploader/uploader');
  }

  /**
   * upload request
   */
  public function save(Request $request)
  {
    /**
     * get files
     */
    // dd($request);
    $file = $request->file('a');
    // var_dump($file);
    date_default_timezone_set('Asia/Tokyo');
    /* get file name */
    $originalName = $file->getClientOriginalName();
    $micro = explode(" ", microtime());
    $dir = 'public';
    $file->storeAs($dir, $originalName, ['disk' => 'local']);
    
    return view('uploader/save');
  }

}
