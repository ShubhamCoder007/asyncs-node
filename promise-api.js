const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('P!...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('P2...');
        reject(new Error('Error simulation...'));
    }, 3000);
});

// Promise.all([p1, p2])
Promise.race([p1, p2])
.then(result => console.log(result))
.catch(err => console.log('Error: ',err));