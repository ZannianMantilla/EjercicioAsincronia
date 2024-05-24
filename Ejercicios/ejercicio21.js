const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa 1 resuelta');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promesa 2 rechazada');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa 3 resuelta');
    }, 1500);
});

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log('Resultados de todas las Promises:');
        results.forEach((result, index) => {
            console.log(`Promesa ${index + 1}:`, result);
        });
    });
