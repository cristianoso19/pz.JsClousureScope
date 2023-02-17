/*
 *Un closure es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito con el cual se creó. Puedes entender los closures como: función interna + scope. Mira estos pasos:
 *
 *Genera una función que retorna una función interna.
 *Esta función interna tiene un scope, el cual puede ser accedido únicamente por esta función, es decir, las variables, funciones, etc. definidas en el scope solo pueden ser accedidas por la función interna.
 *Como resultado, esta función interna retornada con su scope será nuestro closure.
 *Veamos la siguiente imagen para entenderlo mejor. En la imagen FUNCTION es la función interna de la cual hablamos.
 */

/*
 *Ámbito léxico
 *El ámbito léxico se refiere al alcance de una variable siguiendo la cadena de scopes. Una variable se puede abordar desde un nivel inferior hasta uno superior, pero no al contrario.
 *
 */

const myGlobal = 0;

function myFunction() {
	const myNumber = 1;
	console.log(myGlobal);

	function parent(){ //Funcion interna (closure)
		const inner = 2;
		console.log(myNumber, myGlobal);
		
		function child() {
			console.log(inner, myNumber, myGlobal);
		}
		return child();
	}
	return parent();
}

myFunction();
