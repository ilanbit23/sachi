<?php

$fileName = 'data.json';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $data = file_get_contents('php://input');


  // var_dump($data);

  file_put_contents($fileName, $data);
                             
}
 
$data = file_get_contents($fileName);
echo $data;
 
?>