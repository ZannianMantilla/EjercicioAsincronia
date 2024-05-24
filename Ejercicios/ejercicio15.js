const promesaRechazada = new Promise((resolver, rechazar) => { //Creo la promesa
    setTimeout(() => { //Le agrego un timepo de 2 segundos
        rechazar(new Error("Promise rechazada")); //Aca realizamos el callback el cual llama a rechazaar 
    }, 2000);
});

promesaRechazada.catch((error) => { //Colocamos el catch
    console.log("Error:", error.message); //Imprime el catch del error junto al mensaje
});
