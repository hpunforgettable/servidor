window.onload = function()
{

	var tabs = document.getElementsByClassName("tab");
	var paneles = document.getElementsByClassName("panel");

	console.log(tabs);
	console.log(paneles);

	for (var i = 0; i < tabs.length; i++) 
	{

		//tabs[i].className = "tab";
		//paneles[i].className = "panel";
        
		(function(indice)
		{
			tabs[indice].onclick = function(evento)
			{
                    
                    evento.preventDefault();
                    //antes de asignar la nueva clase, limpiamos
                    //todas las tabs 
                    for(var j=0;j<tabs.length; j++)
                    {
                    	tabs[j].className = "tab";
                        paneles[j].className = "panel";
                    }
                    
                    //una vez que las tenemos li,pias, se la asignamos 
                    //a la que le hemos dado el click
					tabs[indice].className = "tab activa";
					paneles[indice].className = "panel activo";
			}

		})(i);
	}

			var cabezas = document.getElementsByClassName("cabeza");
			console.log(cabezas);
			var cabeza_nueva = document.getElementsByClassName("cabeza_nueva")[0];
			console.log(cabeza_nueva);

			for (var i=0; i< cabezas.length; i++)
			{
				(function(indice)
				{
					cabezas[indice].onclick = function(evento)
					{
		                    
		                    evento.preventDefault();
		                    cabeza_nueva.src = "imagenes/cabeza0"+(indice + 1)+".png"
					}

				})(i);
			}

			var brazos = document.getElementsByClassName("brazo");
			var brazo_nuevo = document.getElementsByClassName("brazo_nuevo")[0];

			for (var i=0; i< brazos.length; i++)
			{
				(function(indice)
				{
					brazos[indice].onclick = function(evento)
					{
		                    
		                    evento.preventDefault();
		                    brazo_nuevo.src = "imagenes/brazos0"+(indice + 1)+".png"
					}

				})(i);
			};

			var piernas = document.getElementsByClassName("pierna");
			var pierna_nueva = document.getElementsByClassName("pierna_nueva")[0];

			for (var i=0; i< piernas.length; i++)
			{
				(function(indice)
				{
					piernas[indice].onclick = function(evento)
					{
		                    
		                    evento.preventDefault();
		                    pierna_nueva.src = "imagenes/piernas0"+(indice + 1)+".png"
					}

				})(i);
			};

			var torso = document.getElementsByClassName("torso");
			var torso_nuevo = document.getElementsByClassName("torso_nuevo")[0];

			for (var i=0; i< torso.length; i++)
			{
				(function(indice)
				{
					torso[indice].onclick = function(evento)
					{
		                    
		                    evento.preventDefault();
		                    torso_nuevo.src = "imagenes/torso0"+(indice + 1)+".png"
					}

				})(i);
			};

			var bg = document.getElementsByClassName("bg");
			var pieza = document.getElementsByClassName("pieza")[4]; //* ESTA ES OTRA OPCION SIN AÑADIR NUEVA CLASE *//

			for (var i=0; i< bg.length; i++)
			{
				(function(indice)
				{
					bg[indice].onclick = function(evento)
					{
		                    
		                    evento.preventDefault();
		                    pieza.src = "imagenes/bg0"+(indice + 1)+".png"
					}

				})(i);
			};




};