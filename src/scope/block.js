//Block scope 
//Implementada con ES6 usa let y const para este nuevo tipo de scope
//Las variables definidas dentro de un bloque pueden ser solo usadas dentro del bloque

function fruits() {
	if (true) {
		var fruit1 = "apple"; //function scope
		let fruit2 = "kiwi"; //block scope
		const fruit3 = "banana"; //block scope
	}
	console.log(fruit1);
	console.log(fruit2);
	console.log(fruit3);
}

fruits();
