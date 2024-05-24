const usuario = {
    nombre: "",
    apellido: "",
    edad: 0
  };

//function handler

const handler = {
    set:function(objeto,propiedad,valor){
        if(propiedad === "age") {
            console.log("Estamos modificando la edad")
        }
    }
}

//Proxy
const proxy = new Proxy(usuario, handler)

//codigo

usuario.nombre = "John"
usuario.apellido = "Becerra"
