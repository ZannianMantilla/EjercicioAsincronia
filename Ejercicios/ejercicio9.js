function dropWhile(array, callback) { //Creo la funcion definida dropWhile
    const result = []; //Almacenador
    let drop = true; //Verifica si estamos en la fase de drop
    
    for (const element of array) { 
        if (drop && !callback(element)) {
            drop = false; //Descartamos elementos hasta que el sea false
        }
        if (!drop) {
            result.push(element);
        }
    }
    
    return result; //retorno el resultado
}


const esmenor = (num) => num < 5; //Un numero que sea mayor o igual que 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Array de dichos numeros
console.log(dropWhile(numbers, esmenor)); //Imprimos el dropwhile de numeros dandome asi el array 

