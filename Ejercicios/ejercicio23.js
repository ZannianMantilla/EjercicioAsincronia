// Función asincrónica para cargar un archivo JSON local
async function loadLocalJson(datos4.json) {
    try {
        // Realiza la llamada al archivo JSON local
        const response = await fetch(datos4.json);

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsear el contenido JSON
        const data = await response.json();
        console.log('Datos del JSON cargados correctamente:', data);
    } catch (error) {
        // Manejo de errores
        console.error('Error al cargar el archivo JSON:', error.message);
    }
}

loadLocalJson('ruta/al/archivo.json');
