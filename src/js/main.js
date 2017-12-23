(function($){
	$(document).ready(function(){
		/**
		 * ativar o carousel principal da pagina inicial
		 */
		$('.rodar-galeria').owlCarousel({
			items: 4,
			navigation: true,
			navigationText: [
				'<i class="glyphicon glyphicon-chevron-left"></i>', 
				'<i class="glyphicon glyphicon-chevron-right"></i>'
			]
		});
	});
})(jQuery)