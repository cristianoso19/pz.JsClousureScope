//hoisting
/*
 *En el siguiente codigo la respuesta en UNDEFINED 
 *debido a que javascript al no encontrar la variable
 *"nameOfDog" no esta declarada antes del llamado JS
 *la declara de la siguiente manera:
 *🚨🚨🚨 var nameOfDog;
 *dando por consiguiente UNDEFINED
 *La declara en el tiempo de compilación
 */

console.log(nameOfDog);
var nameOfDog = "Elmo";


nameOfPet();

function nameOfPet() {
	console.log(`El mejor pet es ${elmo}`);
}

var elmo = "elmito"
