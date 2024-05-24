

function esperar() { //Creo la funcion
    return new Promise((resolve) => { //retorno lo que seria la promesa
        setTimeout(() => { //Le agrego un setTimeout para que espere 3 segundos para ejecutar la promesa
            resolve("promesa resuelta");
        }, 3000);
    });
}


esperar().then((mensaje) => {
    console.log(mensaje); //Imprimo el mensaje de la promesa resuelta
});
