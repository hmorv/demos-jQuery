/*	Ir al principio de la página
	Suele ser útil agregar un enlace que nos devuelva al principio de la página
	En este caso la animación asciende al principio de la página en 0,8 segundos.
	*/
$('a.top').click(function(){
	$(document.body).animate({scrollTop:0},800);
	return false;
});

/*	Comprobar que las imágenes se han cargado correctamente
	A veces necesitamos comprobar que las imágenes se han cargado correctamente para poder seguir con el script
	*/
$('img').load(function() {
	console.log('Imagen cargada correctamente');
});

/*	Arreglar imágenes rotas
	En caso de que un enlace esté roto, podemos suplir el contenido con una imagen predeterminada
	*/
$('img').error(function(){
	$(this).attr('src', 'img/broken.png');
});

/*	Añadir una clase con el evento hover
	Con este método agregamos y eliminamos una clase en función de hover.
*/
$('.btn').hover(function(){
$(this).addClass('hover');
}, function(){
$(this).removeClass('hover');
}
);

/*	Desactivar envío de formulario
	Por ejemplo, podemos dejar desactivado el botón de envío hasta que el usuario complete el formulario
	o acepte los términos de unas condiciones dadas
	*/
$('input[type="submit"]').attr('disabled', true);

/*	Reactivar el envío */
$('input[type="submit"]').removeAttr('disabled');


/*	A veces necesitamos que dos div tengan la misma altura, independientemente del contenido.
	Con esto asignamos un alto mínimo que depende de otra div (main-div).
*/
$('.div').css('min-height', $('.main-div').height());

/*	Evitar que un link cargue
	A veces necesitamos impedir que un enlace cargue, por ejemplo en llamadas AJAX
	*/
$("a").on("click", function(e){
  e.preventDefault();
});