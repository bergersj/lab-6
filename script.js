//var tempFahrenheit = prompt('Enter temperature in Fahrenheit');
//var tempCelsius = ((tempFahrenheit - 32) * 5) /9;

//console.log('The temperature is '+ tempCelsius +' degrees Celsius.');

//var tempCelsius = prompt('Enter temperature in Celsius');
//var tempFahrenheit = ((tempCelsius *9) /5) +32;

//console.log('The temperature is '+ tempFahrenheit +' degrees Fahrenheit.');

//Celsius to Fahrenheit converter
var celsius = prompt('Enter temperature in degrees Celsius')

function tempCelsiusToFahrenheit (celsius){
  return(((celsius * 9) / 5) + 32);
}

console.log(tempCelsiusToFahrenheit(celsius)+' degrees Fahrenheit');

//Fahrenheit To Celsius converter
var fahrenheit = prompt('Enter temperature in degress Fahrenheit')

function tempFahrenheitToCelsius (fahrenheit){
  return(((fahrenheit - 32) * 5) / 9);
}

console.log(tempFahrenheitToCelsius(fahrenheit)+' degrees Celsius');
