$(document).ready(function(){
	$("#Palestras").click(function(){
		$(".Palt").toggleClass("verde");
	});
	$("#ForumGraduacao").click(function(){
		$(".FG").toggleClass("azul");
	});
	$("#ForumPG").click(function(){
		$(".FPG").toggleClass("amarelo");
	});
	$("#Cursos").click(function(){
		$(".CS").toggleClass("rosa");
	});
	$("#Pausas").click(function(){
		$(".STOP").toggleClass("preto");
	});
	$("#botaoCores").click(function() {
		$("#tableCor").toggle();
	});
	$("#hideHotel").click(function() {
		$("#Hoteis").toggle();
	});
	$("#mostrarRest").click(function(){
		$("#restaurantes").toggle();
	});
	$("#Hoteis").hide();
	$("#restaurantes").hide();
});