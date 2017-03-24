/*
	Pasar de grados Celsius a grados Fahrenheit teniendo en cuenta que la
*/
  function convertirACelsius (){
    var gradosFahrenheit= parseInt(document.getElementById("fahrenheit").value);
    var resultado = document.getElementById("celsius");
    var celsius = parseFloat((gradosFahrenheit - 32) * (5/9)).toFixed(2);
   resultado.value = celsius;
}

function convertirAFahrenheit (){
  var gradosCelsius = parseInt (document.getElementById("celsius").value);
  var resul = document.getElementById("fahrenheit");
  var fahrenheit = parseFloat((gradosCelsius * 1.8) + 32).toFixed(2);
   resul.value = fahrenheit;
}
