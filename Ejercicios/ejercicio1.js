// function imprimirNumeros(desde, hasta) { //Se toman parametros desde y hasta
//   let currentNumber = desde;  //Creamos una variable que almacene
//   const intervalId = setInterval(() => {
//     console.log(currentNumber);
//     if (currentNumber === hasta) {
//       clearInterval(intervalId); //Utilizamos seinterval para que cada 1segundo el currentNumber aumente hasta llegar a 100
//     }
//     currentNumber++;
//   }, 1000);
// }

imprimirNumeros(1, 100);


function imprimirNumeros(desde, hasta) {   //Se toman dos parametros desde y hasta
  let currentNumber = desde;

  function imprimirNumero() {
    console.log(currentNumber);
    if (currentNumber < hasta) {
      currentNumber++;
      setTimeout(imprimirNumero, 1000); //SetTimeout se llama a si misma haciendo que cada 1 segundo se repita hasta llegar a 100
    }
  }

  imprimirNumero();
}

imprimirNumeros(1, 100);


