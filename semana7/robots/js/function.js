window.onload = function()
{

	var tabs = document.getElementsByClassName("tab");
	var paneles = document.getElementsByClassName("panel");
	var pieza = document.getElementsByClassName("pieza");

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

	var opciones = document.getElementsByClassName ("opcion");
	console.log(opciones);

	for (var i = 0; i < opciones.length; i++) 
	{
        
		(function(indice)
		{
			opciones[indice].onclick = function(evento)
			{
             	for (var j=0; j<paneles.length; j++)
             	{
             		(function(indice_j)
             		{

						if (indice_j=0)
	                    {
	                   			evento.preventDefault();
	                   			indice==1;
			           
	                    }

	                    if (indice_j=1)
	                    {
	                   			evento.preventDefault();
	                   			indice==2;
			           
	                    }

             		})(j);

             		if (indice<=3) 
             	{

	                 evento.preventDefault();
			         pieza[1].src = "imagenes/cabeza0"+(j-3)+".png"
	                
             	}

             	else  sif (indice>3) 
             	{

	                 evento.preventDefault();
			         pieza[1].src = "imagenes/brazos0"+(j-3)+".png"
	                
             	}
             		
             	}


             	
                            
         
            }

		})(i);
	}




			
			




};