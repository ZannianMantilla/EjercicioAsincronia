
function some(array, callback) { //Creo la funcion some y le asigno de parametros el array y callback
  for (let i = 0; i < array.length; i++) {  //Itero entre los elementeos del array
    if (callback(array[i])) { //Verifico si el callback da true
      return true; 
    }
  }
  return false; //Si no llega a dar true va a retornar false
}

function esPar(numero) { //Aca utilizamos par
  return numero % 2 === 0;
}

const miArray = [1, 2, 3, 4, 5]; //Creamos la array a la cual le pasamos numeros para que se verifique si es par
console.log(some(miArray, esPar)); //Entonces se imprime el array y llama a la funcion par
