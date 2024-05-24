function every(array, callback) { //Creo la funcion every, luego coloco el parametro array y callback
  for (let i = 0; i < array.length; i++) { //Aca itero entre los elementos del array 
    if (!callback(array[i])) { // Verifico si es true o false usando !
      return false;
    }
  }
  return true;
}

const arrayEjemplo = [2, 4, 6, 8, 10]; //Le asigno valores a mi array
function callbackEjemplo(elemento) { //Le asigno el paremetro ejemplo
  return elemento > 1; // Y lo retorno si llega a ser mayor que 1
}

const todosSonMayoresQueUno = every(arrayEjemplo, callbackEjemplo);
console.log(todosSonMayoresQueUno); 
