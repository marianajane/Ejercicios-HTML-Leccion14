/*
	Pasar de grados Celsius a grados Fahrenheit teniendo en cuenta que la
*/
function convertirCelsius(){
	var valor = parseInt(document.getElementById("fahrenheit").value);
	var celsius = ((valor * 9)/5) + 32;
	console.log(celsius);
	document.getElementById("celsius").value=celsius;
}

function convertirFahrenheit(){
	var valor = parseInt(document.getElementById("celsius").value);
	var fahrenheit = ((valor - 32)* 5) / 9;
	console.log(fahrenheit);
	document.getElementById("fahrenheit").value=fahrenheit;
}
