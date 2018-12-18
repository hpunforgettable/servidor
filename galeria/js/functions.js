window.onload=function()
{
	var sliders = document.getElementsByClassName("slider_mobile"); // capturamos los  sliders las imagenes deslizantes
	var handlers = document.getElementsByClassName("handler"); // capturar los handlers las flechas array de 0 1 2 3
	var datos_sliders = [];



		for ( var i=0; i<sliders.length; i++)
		{
			datos_sliders[i] = {posicion:0, limite: sliders[i].dataset.item};
		} 
			console.log(datos_sliders);


		for (var i=0; i<handlers.length; i++)
		{
			(function(indice){ // entre paréntesis para que se autoejecute cuando haga el for
					handlers[indice].onclick=function(evento)
				{
					evento.preventDefault();
					var slider = 0;
					var direccion = 0;

						if (indice<1)
						{
							slider=0;
							direccion=0;
						}
						else if (indice==1)
						{
							slider=0;
							direccion=1;
						}
						else
						{
							if (indice%2==0) // cualquer numero que al hacer la division la resta es 0, el numero es par
							{ 
								slider=indice/2;
								direccion=0;
							} 
							else 
							{
								slider=(indice-1)/2; // explicacion en la imagen
								direccion=1;
							}						
						}
						console.log(slider);
						console.log(direccion);


						if(direccion<1)
						{
							if (datos_sliders[slider].posicion<datos_sliders[slider].limite-1) // posicion < a limite -1 ( ej. posicion 0 < a 3 -1 = 2) --> moverse a posicion 1
							{
								datos_sliders[slider].posicion++;
								sliders[slider].className="categoria slider_mobile left"+datos_sliders[slider].posicion+"00";
							}
						}
						else
						{
							if (datos_sliders[slider].posicion>0)
							{
								datos_sliders[slider].posicion--;
								sliders[slider].className="categoria slider_mobile left"+datos_sliders[slider].posicion+"00";
							}

						}

				};

			})(i); // para atrapar "i" y utilizarlo posteriormente
		}

}