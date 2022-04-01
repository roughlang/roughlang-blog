<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Library\CommonSecurity;
use Illuminate\Support\Facades\Config;


class AdminController extends Controller
{
  public $current_ip;
  public $superuses;

  public function __construct(Request $request)
  {
    /**
     * Laravel standerd auth.
     */
    $this->middleware('auth');

    /* IP制限 */
    if (CommonSecurity::PassByIPAddress() === false) {
      abort( 404 );
    }

    /* Super users */
    $this->middleware(function ($request, $next) {
      $this->user = \Auth::user();
      if (CommonSecurity::PassBySuperUsers($this->user) === false) {
        abort( 404 );
      }
      return $next($request);
    });
  }

  public function index(Request $request)
  {
    $this->current_ip = \Request::ip();
    Log::channel('admin_access')->info('admin/index: '.$this->current_ip);
    
    $superusers = explode(",",Config::get('app.superusers'));

    return view('admin/index')->with(
      'superusers', $superusers,
    );
  }

  public function uploader(Request $request)
  {
    return view('admin/uploader');
  }
}
