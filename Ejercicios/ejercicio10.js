function takeWhile(array, callback) {
    const result = [];

    for (const element of array) {
        if (callback(element)) {
            result.push(element);
        } else {
            break; 
        }
    }
    
    return result;
}

// Ejemplo para probar la función
const isLessThanFive = (num) => num < 5;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(takeWhile(numbers, isLessThanFive)); 
