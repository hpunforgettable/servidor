<?php 

$datos= json_decode(file_get_contents("menu.json"));

 ?>


<!-- <pre>
	<?php 

		// print_r($datos);

	 ?>
	
</pre> -->


<!DOCTYPE html>
<html>
<head>
	<title>Menu múltiple 2</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/estilo2.css">
</head>
<body>

<ul>
	<?php for ($i=0; $i<count($datos); $i++) { ?>
		<li><a href="#" class="<?php echo (count($datos[$i]->item->items)>0)?'boton':'' ?>"><?php echo $datos[$i]->item->texto; ?></a>
			<?php if (count($datos[$i]->item->items)>0){ ?>
				<ul class="menu oculto">
					<?php for ($j=0; $j<count($datos[$i]->item->items); $j++) {?>
						<li><a href="#">
							<?php echo $datos[$i]->item->items[$j]->item->texto; ?> <!-- items[j] para recorrer dentro del for los items de json -->
						</a></li>
					<?php } ?>
				</ul>
			<?php } ?>
		</li>

	<?php } ?>
</ul>


<script src="js/functions2.js"></script>

</body>
</html>