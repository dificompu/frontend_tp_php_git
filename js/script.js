let formulario = document.getElementsByName('formulario')[0],
	elValor = document.getElementById('valor');	//campo donde va el valor a abonar
	errores = "";
let canti, tipo, importe; 
//valida SOLO que se ponga una cantidad positiva
let validar = function(e){	
	validarCantidad(e);	
	if(errores != ""){
		alert(errores);
		errores = "";
	}
	//muestra valor a abonar
	 elValor.innerText=importe ;

}
let validarCantidad = function(e){
	if(formulario.cantidad.value <= 0){
		//alert("Debes ingresar un usuario \n ccc");
		errores += "Debes ingresar una cantidad válida\n";
		
	} else{
		canti = formulario.cantidad.value;
		tipo = formulario.categoria.value;
		switch (tipo) {
			  case '0':	
			  	importe = canti * 200 * 20 /100;		    
			    break;
			  case '1':
			    importe = canti * 200 * 50 /100;
			    break;
			  case '2':
			    importe = canti * 200 * 85 /100;
			    break;
			  default:
			    importe = canti * 200 * 20 /100;
			    break;
			}
		

	}
	e.preventDefault();
}
//función que borra el valor a abonar
let borrarTodo = function(){	
	elValor.innerText="" ;

}

formulario.addEventListener("submit", validar);
