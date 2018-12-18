<?php
if(file_get_contents("php://input")){
	$parametros = json_decode(file_get_contents("php://input"));
	$ancho = 400;
	$alto = 600;

	$background_base = imagecreatetruecolor($ancho, $alto);//CREO UN "CANVAS"

		
	//LAYERS
	
	$fondo = imagecreatefrompng("img/bg0".$parametros->partes[4].".png");
	imagecopyresampled($background_base, $fondo, 0, 0, 0, 0, $ancho, $alto, $ancho, $alto);

	$piernas = imagecreatefrompng("img/piernas0".$parametros->partes[2].".png");
	imagecopyresampled($background_base, $piernas, 0, 0, 0, 0, $ancho, $alto, $ancho, $alto);

	$brazos = imagecreatefrompng("img/brazos0".$parametros->partes[1].".png");
	imagecopyresampled($background_base, $brazos, 0, 0, 0, 0, $ancho, $alto, $ancho, $alto);

	$torso = imagecreatefrompng("img/torso0".$parametros->partes[3].".png");
	imagecopyresampled($background_base, $torso, 0, 0, 0, 0, $ancho, $alto, $ancho, $alto);

	$cabeza = imagecreatefrompng("img/cabeza0".$parametros->partes[0].".png");
	imagecopyresampled($background_base, $cabeza, 0, 0, 0, 0, $ancho, $alto, $ancho, $alto);
	
	//OUTPUT
	$imagen_final = $parametros->imagen;

    imagepng($background_base,$imagen_final,0); //TENGO LA IMAGEN FINAL

    echo $parametros->imagen;
   
} 
?>