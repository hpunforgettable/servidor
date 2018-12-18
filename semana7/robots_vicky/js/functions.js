window.onload = function()
{

	var tabs = document.getElementsByClassName("tab");
	var paneles = document.getElementsByClassName("panel");
	var pieza = document.getElementsByClassName("pieza");

	console.log(tabs);
	console.log(paneles);

	for (var i = 0; i < tabs.length; i++) {

		//tabs[i].className = "tab";
		//paneles[i].className = "panel";
        
		(function(indice){
			   tabs[indice].onclick = function(evento){
                    
                    evento.preventDefault();
                    //antes de asignar la nueva clase, limpiamos
                    //todas las tabs 
                    for(var j=0;j<tabs.length;j++)
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

	var partes = ["cabeza","brazos","piernas","torso","bg"];

	var opcion = document.getElementsByClassName("opciom");

	for(var i=0; i < opcion.length; i++){
		(function(indice){
			opcion[indice].onclick = function(evento){
				evento.preventDefault();

				for(var j=0; j<opcion.length; j+=4){
					(function(panel){
						if(indice >= panel && indice < panel +4){
							console.log(panel/4);
							console.log((indice>3)?indice-(panel-1):indice+1);
							pieza[panel/4].src="img/"+partes[panel/4]+"0"+((indice>3)?indice-(panel-1):indice+1)+".png";

							enviar[panel/4]=(indice>3)?indice-(panel-1):indice+1; // nos saca el numero del elemento seleccionado brazo 02 

						}

					})(j);
				}
				
			}
		})(i);
	}

	var generar = document.getElementsByClassName("generar")[0];
	var enviar = [0, 0, 0, 0, 0];

	generar.onclick=function(evento)
	{
		evento.preventDefault;
		var parametros={imagen:Date.now()+".png",partes:enviar}; // genera el archivo con un formato png
		console.log(parametros);


		ajax("POST","lib/generador.php",function(datos)  
			{
				console.log(datos);

				document.getElementsByClassName("descargar")[0].href="img/"+datos;
				document.getElementsByClassName("descargar")[0].className="descargar mostrar";

			},JSON.stringify(parametros),true);
		
	}


				/*   AJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXXXXXXXXXXX  ajax04 **************************** */

			function ajax (metodo,url,callback,parametros,type) 
			{
				var conexion= new XMLHttpRequest(); 
				conexion.onreadystatechange=function()
				{
					if (this.readyState==4 && this.status==200)
					{
						callback(this.responseText);
					}
				}
				conexion.open(metodo, url, true);
					if (type)
					{
						console.log("si");  //true
						conexion.setRequestHeader("Content-Type","application/json");
						
					}
					else
					{
						console.log("no"); //false
						conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
					}
				conexion.send((metodo=="POST")?parametros:"");
			}

			var reiniciar = document.getElementsByClassName("reiniciar")[0];

			reiniciar.onclick=function(evento)
			{
				evento.preventDefault();
					for (var i=0; i<paneles.length; i++)
					{
						paneles[i].className ="panel";
						tabs[i].className = "tab";
						pieza[i].src= "img/"+partes[i]+"00.png";
					}
					paneles[0].className ="panel activo";
					tabs[0].className ="tab activa";
					console.log(paneles);

			}


	

};










