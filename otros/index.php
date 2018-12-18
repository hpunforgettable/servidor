<?php 
$nombre="hristiyan";
$nombres=array("xiomy","joaquin","ramon");
 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<title></title>
 	<meta charset="utf-8">

 </head>
 <body>
 
<h3><?php echo $nombre; ?></h3>
<ul>
<?php for($i=0; $i<count($nombres); $i++) {?>
	<li> <?php echo $nombres[$i]; ?></li>
<?php } ?>

</ul>


 
 </body>
 </html>