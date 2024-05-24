async function operacionAsincronica() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // coloco un setTimeout  1 segundo
    return "Operación completada"; //retorno el texto de resultado
}

async function ejecutarOperacion() { //ejecuto la funcion de operador haciendolo esperear con el await 
    const resultado = await operacionAsincronica(); // llamo a la la operacion
    console.log(resultado); //imprimo el resultado
}

ejecutarOperacion();
