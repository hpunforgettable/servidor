window.onload = function(){

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

	var cabezas = document.getElementsByClassName("cabeza");
	for(var i = 0; i < cabezas.length; i++){
		(function(indice){
			cabezas[indice].onclick = function(e){
				e.preventDefault();
				console.log(indice);
				pieza[0].src="img/cabeza0"+(indice+1)+".png";
			}
		})(i);
	}


	var brazos = document.getElementsByClassName("brazo");
	for(var i = 0; i < brazos.length; i++){
		(function(indice){
			brazos[indice].onclick = function(e){
				e.preventDefault();
				console.log(indice);
				pieza[1].src="img/brazos0"+(indice+1)+".png";
			}
		})(i);
	}

	var piernas = document.getElementsByClassName("pierna");
	for(var i = 0; i < piernas.length; i++){
		(function(indice){
			piernas[indice].onclick = function(e){
				e.preventDefault();
				console.log(indice);
				pieza[2].src="img/piernas0"+(indice+1)+".png";
			}
		})(i);
	}

	var torsos = document.getElementsByClassName("torso");
	for(var i = 0; i < torsos.length; i++){
		(function(indice){
			torsos[indice].onclick = function(e){
				e.preventDefault();
				console.log(indice);
				pieza[3].src="img/torso0"+(indice+1)+".png";
			}
		})(i);
	}

	var bg = document.getElementsByClassName("fondo");
	for(var i = 0; i < bg.length; i++){
		(function(indice){
			bg[indice].onclick = function(e){
				e.preventDefault();
				console.log(indice);
				pieza[4].src="img/bg0"+(indice+1)+".png";
			}
		})(i);
	}

	

};