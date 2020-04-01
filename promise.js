//promise resolves the value of async operation
//it either sends value when success
//rejects or throw error if fails
const p = new Promise((resolve, reject) => {
    //simulating async operation
    setTimeout(() => {
        //resolve(1);
         reject(new Error('Error message...'));
    }, 2000);
});

//then displays the result
//catch displays the error message

p.then((result) => console.log('Result: ',result))
.catch(err => console.log('Error: ',err.message));