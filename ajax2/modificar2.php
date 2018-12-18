<?php 

if (file_get_contents("php://input")) 
{
	$datos = json_decode(file_get_contents("php://input"));
	// print_r($datos);
	echo $datos->nombre;

}


 ?>