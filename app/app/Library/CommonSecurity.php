<?php

namespace app\Library;

use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;


/**
 * Common controllers for security, access control, IP restrictions, etc.
 * 
 */
class CommonSecurity
{
  public static $allowgip;
  public static $superusers;
  private $user;

  public function __construct(Request $request)
  {
    $this->middleware('auth');
  }

  /**
   * Super user
   */
  public static function PassBySuperUsers($user) {

    foreach(self::GetSuperUserEmailAddress() as $email) {
      // var_dump($email);
      if ($user->email == $email) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  }


  /**
   * To pass or not to pass by IP address
   */
  public static function PassByIPAddress() {

    $current_ip = \Request::ip();

    foreach(self::GetAllowGIP() as $ip) {
      if ($current_ip == $ip) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  }

  /**
   * Obtaining an allowed IP address
   */
  public static function GetAllowGIP() {

    self::$allowgip = explode(",",Config::get('app.allowgip'));

    return self::$allowgip;
  }

  public static function GetSuperUserEmailAddress() {

    self::$superusers = explode(",",Config::get('app.superusers'));
    
    return self::$superusers;
  }

  public static function hello() {
    $name = $app = Config::get('app.name');
    return $name."hoge";
  }

  public function hello2() {
    return "hello2! common controller.";
  }
}