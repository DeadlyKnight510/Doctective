<?php
ini_set('memory_limit', '2048M');
require "predis/src/Autoloader.php";
//require "RedisAutocomplete.php";
Predis\Autoloader::register();
// since we connect to default setting localhost
// and 6379 port there is no need for extra
// configuration. If not then you can specify the
// scheme, host and port to connect as an array
// to the constructor.
try {
    $redis = new Predis\Client();

    $value = $redis->get("hello_world");
//    echo $value;
    
}
catch (Exception $e) {
    echo "Couldn't connected to Redis";
    echo $e->getMessage();
}

function get($input)
{
	$redis = new Predis\Client();
	$out = $redis->get($input);
	echo $out;
}
   if (isset($_POST['autocomplete'])) {
        echo get($_POST['autocomplete']);
   }
?>
