
function filter(array, callback) { //A la funcion filtrer le paso parametro de array y callback
  const elementosFiltrados = []; //Creo una array vacia
  for (let i = 0; i < array.length; i++) { //Itero entre cada elemento del array
    if (callback(array[i])) {
      elementosFiltrados.push(array[i]); //Envio los elementos al array 
    }
  }
  return elementosFiltrados; //Retorno los elementos ya filtrados
}

const arrayEjemplo = [1, 2, 3, 4, 5, 6, 7, 8]; //Le paso valores a mi array
function callbackEjemplo(elemento) {
  return elemento % 2 === 0; //Se busca cuales son divisibles entre 2 para verificar si son pares o no
}

const elementosFiltrados = filter(arrayEjemplo, callbackEjemplo);
console.log(elementosFiltrados); //Imprimo los elementos que ya fueron filtrados para que me muestre el array
