<?php

$url_path = $_SERVER["REQUEST_URI"];
$root_directory = $_SERVER["DOCUMENT_ROOT"];
// echo "<pre>";
// var_dump($_SERVER);
// echo "</pre>";
// die();
// echo $url_path;

if($url_path == "/create_portfolio"){
    $data = file_get_contents("php://input");
    
    echo $data;
}