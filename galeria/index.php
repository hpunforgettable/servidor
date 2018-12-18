<?php

$datos=json_decode(file_get_contents("categorias.json"));
 
 ?>

 <!-- <pre>
 	<?php 

 		// print_r($datos); // imprime lo que hay dentro de la variable datos


 	 ?>
 </pre> -->

 <!DOCTYPE html>
<html>
<head>
	<title>Galeria</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0"> <!-- hacerlo responsive para que funcione en cualquier otro dispositivo a parte del PC-->
	<link rel="stylesheet" type="text/css" href="css/estilo.css">

</head>
<body>

<div class="contenedor">
	<?php for($i=0; $i<count($datos); $i++){ ?> <!-- es lo mismo que var i=0; i<datos.length; i++ en este caso tenemos un array de 4 datos--> 
			<div class="contenedor-mobile">
				<ul class="categoria <?php echo (count($datos[$i]->categoria->imagenes)>1)? 'slider_mobile' :''; ?>" 
					data-item="<?php echo count($datos[$i]->categoria->imagenes); ?>"> 
				<!--
				** para saber cuantos item tiene la categoria ( este le dice a javascrip la cantidad de items)
				** (count($datos[$i]->categoria->imagenes)>1 nos cuenta la cantidad de imagenes que tenemos y ponemos la condicion si es mayor a 1 / ? indica por tanto, pon la clase slider_mobile en caso contrario nada, ""

				 -->

					<?php for ($j=0; $j<count($datos[$i]->categoria->imagenes); $j++){ ?>
					<li><img src="http://placehold.it/600x600/
						<?php echo $datos[$i]->categoria->imagenes[$j]->color ?>
						/FFFFFF?text=
						<?php echo $datos[$i]->categoria->nombre ?>">
					</li>
					<?php } ?>

				</ul>

				<?php if(count($datos[$i]->categoria->imagenes)>1){ ?>
				<a class="handler handler-left" href="#">&lt;</a> <!--todo lo que se hace click lleva enlace osea, a-->
				<a class="handler handler-right" href="#">&gt;</a>
				<?php } ?>

			</div>

				<div class="clearfix"></div>
						
				
	<?php  } ?>
</div>
<script src="js/functions.js"></script>
</body>
</html>