console.log('Before');

//consuming the promises
getUser(8)
.then(user => getRepo(user.username))
.then(repo => getCommit(repo))
.then(com => console.log('displaying resloved commits:  ',com))
.catch(err => console.log('Error: ',err.message));

console.log('After');

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Middle...');
            resolve({id: id, username: "Shubham"});
        }, 2000);
    });
}

function getRepo(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(["a", "b", "c", username, "d"]), 2000);
    });
}

function getCommit(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling git hub api...');
            resolve('Commits...');
        }, 2000);
    });
}