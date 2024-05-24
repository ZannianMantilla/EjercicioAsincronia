let i = 0;

setTimeout(() => alert(i), 100); //?

//Asumimos que el tiempo para ejecutar esta funcion es > 100ms

for (let j = 0; j < 100000000; j++) {
  i++;
}


//El alert lo que hace esque imprimira el valor de i despues de 100 milisegundos

//El blucle del for va a hacer que se imprima el i despues de alcanzar el valor de J ya que i se va incrementando osea se hace despues del bucle