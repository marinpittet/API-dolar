$(document).ready(function () {

	var uf, dolar, euro, utm

	$.ajax({
		url: 'http://mindicador.cl/api',
		type: 'GET',
	}).done (function(data) {

		console.log(data)

		uf = data.uf.valor
		dolar = data.dolar.valor
		euro = data.euro.valor
		utm = data.utm.valor

		$(".uf").append(' $ ' + uf)
		$(".dolar").append(' $ ' + dolar)
		$(".euro").append(' $ ' + euro)
		$(".utm").append(' $ ' + utm)

		$(".result").append(dolar)


	}).fail(function() {
		console.log('Error al consumir la API!');
	})

	$('#clp').on('click', conversionMonedas.bind(this))
	$('#usd').on('click', conversionMonedas.bind(this))


	function conversionMonedas(e) {
		e.preventDefault()
		var lista = []

		if (e.target.id === 'clp') {
			lista[0] = (parseInt($(e.target).prev().val()) / dolar ).toFixed(2)
			lista[1] = (parseInt($(e.target).prev().val()) / euro ).toFixed(2)
		} else if (e.target.id === 'usd') {
			lista[0] = (parseInt($(e.target).prev().val()) * dolar ).toFixed(2)
		}

		$('.clp, .usd').html('')

		lista.map( function(hola, indice, arr) {
			$('.' + e.target.id).append('<li>' +'$ '+ hola +'</li>')
		})
	}
});