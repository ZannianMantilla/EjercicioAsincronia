const handler = {
    set(target, key, value) {
      switch (key) {
        case 'numerico':
          if (typeof value === 'number') {
            target[key] = value;
          } else {
            console.log("Error: El valor debe ser numérico.");
          }
          break;
        case 'alfanumerico':
          if (/^[a-zA-Z]+$/.test(value)) {
            target[key] = value;
          } else {
            console.log("Error: El valor debe ser alfanumérico.");
          }
          break;
        case 'email':
          if (/^\S+@\S+\.\S+$/.test(value)) {
            target[key] = value;
          } else {
            console.log("Error: El valor debe ser un correo electrónico válido.");
          }
          break;
        case 'fecha':
          if (value instanceof Date && !isNaN(value)) {
            target[key] = value;
          } else {
            console.log("Error: El valor debe ser una fecha válida.");
          }
          break;
        default:
          if (typeof value === 'string') {
            value = value.trim();
          }
          target[key] = value;
      }
      return true;
    }
  };
  

  const obj = new Proxy({}, handler);
  

  obj.numerico = 123;
  obj.numerico = 'abc';
  obj.alfanumerico = 'hola'; 
  obj.alfanumerico = '123'; 
  obj.email = 'correo@example.com'; 
  obj.email = 'correo@ejemplo'; 
  obj.fecha = new Date(); 
  obj.fecha = '2024-05-23'; 
  obj.otro = '  ejemplo  '; 
  obj.otro = '   '; 
  obj.otro = '    hola    '; 
  