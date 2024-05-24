function find(array, callback) { //Creo la funcion find la cual va a verificar si el primer elemento de la array es true
  for (let i = 0; i < array.length; i++) { //Itero entre las arrays
    if (callback(array[i])) { //Verifico con el callback la array
      return array[i]; //Me retorna la array
    }
  }
  return undefined; //Este se retorna si ningun elemento de la array coincide 
}

const numeros = [1, 2, 3, 4, 5]; //Le asigno valores a mi array en este caso numericos

const resultado = find(numeros, function (numero) { // creo variable resultado la cual va a verificar el numero
  return numero > 3;  //Me retorna el numero si llega a ser mayor que 3
});

console.log(resultado); //Imprime resultado
