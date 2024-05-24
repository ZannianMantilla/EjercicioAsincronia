function ejecucioncallback(array, callback) { //A la funcion le paso parametros de array y callback
  let resultados = []; //Creo una array vacia
  for (let i = 0; i < array.length; i++) { //Itera entre los elementos del array
    let resultado = callback(array[i]); 
    resultados.push(resultado); //Realizo un fush hacia resultados
  }

  return resultados; //Esto me retorna el array de resultados
}

const arrayEjemplo = [1, 2, 3, 4, 5]; //Le asigno elementos a la array los cuales luego se iteran
function callbackEjemplo(elemento) { //Creo una funcion callback
  return elemento * 2; // Multiplica cada elemento por 2
}

const resultadosFinales = ejecucioncallback(arrayEjemplo, callbackEjemplo);
console.log(resultadosFinales); //Imprimo la variable resultados finales
