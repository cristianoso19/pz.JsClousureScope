/*
 *variables: Conceptos
 */

var a; //declarando
var b = "B"; //declaramos y asignamos
b = "b" //reasignamos
var a = "aaa" //redeclaracion
/*____________________________________________________*/

/*
 *Global Scope
 *Cualquir variable que se encuentre en el doc, pasan a ser variables globales que se instancian dentro del objeto window.
 */

var fruit = "Apple"; //global

function bestFruit () {
	console.log(fruit);
}

bestFruit();

// Otra forma y DEBEMOS TENER CUIDADO ya que si no se tiene que declara y solo se asigna pasa a ser una variable global.

function countries () {
	country = "Ecuador"; // 🚨 PASA A SER UNA VARIABLE GLOBAL
	console.log (country);
}

countries();
console.log(country);

/*____________________________________________________*/


