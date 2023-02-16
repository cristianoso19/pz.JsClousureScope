//Incorporado en ec5, se trata de unas reglas 
//que nos permiten ejecutar reglas estrictas
//para particulares para tener mucho mejor 
//control de la asignacion de las variables
//y algunos elementos claves para que nuestro
//código cumpla con los mejores standares

'use strict';
pi = 3.1416; //🔴 No deja pasar por que tiene que ser primero declarada la variable pi;
console.log(pi);

//Tambien se puede usar dentro de funciones
function myFunction() {
	'use strict';
	return pi = 3.1416;
}
console.log(myFunction());
