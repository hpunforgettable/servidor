<?php 

$mensaje = "";
if (isset($_POST["nombre"])&& $_POST["nombre"]!= "") //genera un true or un false para sabaer si existe o no nombre
	{
		$mensaje = "El nombre es: ". $_POST["nombre"];
	}
	else
	{
		$mensaje = "Debe escribir su nombre antes de continuar";
	}



 ?>



<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>

	<form method="POST" action="post.php">
		<input type="text" name="nombre" placeholder="nombre">
		<input type="submit" value="Enviar">
	</form>



	<?php 
	 if ($mensaje!= "")
	 {
	 	echo ($mensaje);
	 }

	 ?>

</body>
</html>