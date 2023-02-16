var firstName; //Undefined
firstName = "Cristian";
console.log(firstName);

var lastName = "David"; //Declarar Asignar
lastName = "Ana"; //reasignar
console.log(lastName);

var secondName = "David"; //declarando /asignado
var secondName = "Ana"; //reasignado
console.log(secondName);

//Let
let fruit = "Apple"; //Declarar y asignar
fruit = "Kiwi"; //reasignar
console.log(fruit);

let fruit = "Banana";
console.log(fruit); //error no se puede redeclarar

//Const

const animal = "dog"; //declara y asigna
animal = "cat"; //reasignado
const animal = "snake"; //reasignado
console.log(animal); //Error no se puede reasinar ni declarar un CONST

const vehicles = [];
vehicles.push("🚜");
console.log(vehicles); //Si se puede reasignar elementos de un array a CONST por que apunta a la referencia CONST
vehicles.pop("🚜");
console.log(vehicles); //Si se puede reasignar elementos de un array a CONST por que apunta a la referencia CONST
