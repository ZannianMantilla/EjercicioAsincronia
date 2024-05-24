fetch('datos2.json') //Obtengo acceso a el json de datos2
    .then(response => {
        if (!response.ok) { //Realizo el throw error
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const filteredData = data.filter(item => item.name.startsWith('A')); //Filtro dato que empiecen por Aa

        console.log('Filtered Data:', filteredData); //Imprimo los datos 
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error); //Imprimo si hay un problema en la transferencia de los datos
    });
