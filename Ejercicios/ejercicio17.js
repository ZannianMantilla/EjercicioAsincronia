
function mostrarDatosJSON() {
    fetch('datos.json') // Realizar una solicitud GET para obtener el archivo JSON
        .then(response => response.json()) // Convertir la respuesta a formato JSON
        .then(data => {
            const datosContainer = document.getElementById('datosContainer');
            datosContainer.textContent = JSON.stringify(data, null, 2); // Mostrar los datos en el contenedor
        })
        .catch(error => console.error('Error al cargar los datos:', error)); // Manejar errores de carga de datos
}

// Llamar a la función para mostrar los datos JSON
mostrarDatosJSON();
