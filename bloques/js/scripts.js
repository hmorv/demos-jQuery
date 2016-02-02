$(document).ready(function() {

//	Inicialización de variables
//	Capturamos los <span> que muestran info
var total 				= $(".contTotal");
var eliminados 			= $(".contEliminados");
var ultimo 				= $(".contUltimo");
//	Inicializamos contadores
var blContEliminados 	= 0;
var blGenerados			= 0;

	//	Inicializamos mensaje de bloques generados
	total.html('Bloques generados: '+ blGenerados);
	//	Función para crear bloques dinámicos
	function crearBloques(n)
	{
		//Reiniciamos los contadores
		blContEliminados = 0;
		blGenerados = 0;

		if(n>0)
		{
			var bingo = Math.floor((Math.random() * n) + 1);
			//	Generamos los bloques
			for(var i = 0; i < n; i++)
			{
				var bloque = (i == bingo) ? "<div class='bloque' num='"+(i+1)+"' title='Destrúyeme, soy el "+(i+1)+"' premio='true'><div>"+(i+1)+"</div></div>" : "<div class='bloque' num='"+(i+1)+"' title='Destrúyeme, soy el "+(i+1)+"'><div>"+(i+1)+"</div></div>";	
					//crear bloque
					$("#lienzo").append(bloque);
					//debug
					console.log(bloque);
				}
				//	Actualizamos el contador y mostramos la información
				blGenerados = n;
				$('.contTotal').html('Bloques generados: '+blGenerados);
				//	Reiniciamos a la clase info
				eliminados.removeClass('bg-warning').removeClass('bg-danger').addClass('bg-info');
			}
		}
		//	Si no se ha introducido valor (al cargar la página por ejemplo), asignamos el valor inicial
		//	¿Qué es this?
		if($('input').attr('num') == undefined)
			ultimo.html('Último bloque eliminado: '+0);
		else
			ultimo.html('Último bloque eliminado: '+$(this).attr('num'));

		eliminados.html('Bloques eliminados: '+blContEliminados);
		//	Tratamiento al hacer click sobre un bloque:
		$("button").click(function() {
			$("#lienzo").empty();
			var n = $("#num").val();
			try {
				if(n=="") throw "Introduce algo, por favor!";
				if(isNaN(parseInt(n))) throw "Introduce un valor numérico!";
				if(n<1) throw "Introduce un valor positivo!";
				crearBloques(n);
			}
			catch(e) {
				alert(e);
				//	debug!
				console.log(e);
			}
		});
		//	Agregamos un manejador de eventos "event handler" al evento click sobre el elemento .bloque
		$(document).on('click', '.bloque', function() {
			/* Act on the event */
			if($(this).attr('premio') == 'true')
			{
				alert("Enhorabuena, se ha cargado el bloque secreto.");
			}
			$(this).hide('slow');
			console.log('Bloque eliminado: '+$(this).attr('num'));

			//	Actualizamos la información en pantalla
			ultimo.html('Último bloque eliminado: '+$(this).attr('num'));
			eliminados.html('Bloques eliminados: '+(++blContEliminados));

			//	Tratamiento bloques eliminados
			var restantes = blGenerados-blContEliminados;
			//	debug
			console.log(restantes); 
			switch(restantes) {
				case 0:
				alert("Enhorabuena, se ha cargado "+blGenerados+" "+((blGenerados>1) ? "bloques" : "bloque") +".\n ¿Se siente estresado? Pruebe a generar 1000 bloques.");
				case 1:
				eliminados.removeClass('bg-info').addClass('bg-warning');
				break;
				case 2:
				case 3:
				eliminados.removeClass('bg-info').addClass('bg-warning');
				break;
				default:
				eliminados.removeClass('bg-warning').removeClass('bg-danger').addClass('bg-info');
				break;
			}
		});
$(document).on('mouseenter', '.bloque', function() {
	$(this).css({
		cursor: 'crosshair'
	});
});
//	Recordad que podemos declarar varias variables en una misma instrucción
var palabras = [
	'$()',
	'jQuery()',
	'$(this).',
	'jQuery(this)'], i = 0;
setInterval(function(){
	$('#palabraVariable').fadeOut(function(){
		$(this).html(palabras[i=(i+1)%palabras.length]).fadeIn();
	});
	}, 2000);
});