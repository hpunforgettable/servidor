<?php 

/* $persona=array(
	"nombre"=>"juan",
	"apellido"=>"gomez",
	"edad"=>"25"
);

echo $persona["nombre"]; */




$nombres=array("xiomy","joaquin","ramon");
 
// print_r($_GET);

 ?>

 <?php if($_GET["id"]<count($nombres)){ ?>
 	<h1> <?php echo $nombres[$_GET["id"]]; ?></h1>
 <?php }else{ ?>
 	<h1>El usuario no existe</h1>
 <?php  }?>