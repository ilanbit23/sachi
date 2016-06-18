<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $data = file_get_contents('php://input');
  $pass = $data ;// json_decode($data);
  //var_dump($pass);
  if ($pass === 'sahi @v@rywh@r@') {
  	echo "success";
  } else {
    echo 'wrong password';
  }

}



?>