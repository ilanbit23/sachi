<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $data = file_get_contents('php://input');
  $contact = json_decode($data);
  //var_dump($contact);
  if ($contact->msg && $contact->email) {
  	$msg = 	"New message from: $contact->name (phone: $contact->phone subject: $contact->subject email: $contact->email company: $contact->company address: $contact->address) \n";
  	$msg .= "$contact->msg";
  	echo "success: " . $msg;
    mail( 'ilan@misterbit.co.il',  'New contact' , $msg, "From: $contact->email" );

  }

}



?>