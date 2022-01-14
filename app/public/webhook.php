<?php
/**
 * Github webhook for auto deploy with pull
 * 
 * Manage webhook
 * https://github.com/roughlang/lwbase/settings/hooks/336542060/deliveries
 * Webhook:
 * https://lwbase.roughlang.com/webhook.php
 */

/* log directory */ 
define("LOGPATH","../../logs/");
/* Get select key */ 
$seclet = get_env("../.env", "WEBHOOK_TOKEN");
/* Get HTTP_X_HUB_SIGNATURE */
$http_x_hub_signature = $_SERVER["HTTP_X_HUB_SIGNATURE"];
/* Get hash_hmac */
$signature = 'sha1='.hash_hmac('sha1', file_get_contents('php://input'), "bUFu%zcfkcCM75qN");

/**
 * Authorized
 */
if ($http_x_hub_signature === $signature) {
	$cmd = "cd ../../ && git pull";
	exec($cmd, $errors);
	$error = implode("-", $errors);
	logging("Access is successful.");
	logging($error);
} else {
	header('HTTP/1.1 403 Forbidden');
	logging("Authentication error.");
}

function logging( $message="test logging." )
{
  $datetime = date("Y-m-d H:i:s");
  $cmd ='echo ['.$datetime.'] '.$message.' >> '.LOGPATH."deploy.log";
  exec($cmd, $errors);
  return true;
}

function get_all_headers() 
{ 
  $headers = []; 
  foreach ($_SERVER as $name => $value) { 
    if (substr($name, 0, 5) == 'HTTP_') { 
      $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value; 
    } 
  } 
  return $headers; 
}

function get_env($env_path, $key)
{
	$content = file_get_contents($env_path);
	$rows = explode("\n", $content);
	foreach ($rows as $row) {
		list($get_key, $get_value) = explode("=", $row);
		if ($get_key == $key) {
			break;
		}
	}
	return $get_value;
}