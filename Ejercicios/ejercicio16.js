
const promesa1 = new Promise((resolver) => {
    setTimeout(() => { //Le agrego el resultado de un segundo
        resolver(1);
    }, 1000);
});


const promesa2 = new Promise((resolver) => {
    setTimeout(() => {
        resolver(2); //Le agrego el resultado de un segundo
    }, 1000);
});


const promesa3 = new Promise((resolver) => {
    setTimeout(() => {
        resolver(3); //Le agrego el resultado de un segundo
    }, 1000);
});


Promise.all([promesa1, promesa2, promesa3]) //Encadeno la primera, segunda y tercera promesa
    .then((resultados) => { //Muestro los resultados
        const suma = resultados.reduce((total, numero) => total + numero, 0); // se suma el array 1-2-3 dando un total de 6
        console.log("El resultado final es:", suma);
    })
    .catch((error) => {
        console.error("Ocurrió un error:", error); //Catch atrapa un posible error durante la ejecucion
    });
