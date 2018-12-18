<?php 

if (isset ($_GET)) 
	{
		echo "peticion GET";
		print_r($_GET);

	}

if (isset ($_POST)) 
	{
		echo "peticion POST";
		print_r($_POST);

	}
if (file_get_contents("php://input"))
	{
		echo file_get_contents("php://input");
	}	

 ?>