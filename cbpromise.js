console.log('Before');

//consuming the promises
// getUser(8)
// .then(user => getRepo(user.username))
// .then(repo => getCommit(repo))
// .then(com => console.log('displaying resloved commits:  ',com))
// .catch(err => console.log('Error: ',err.message));

//asyn and await 
async function displayCommits() {
    try {
        const user = await getUser(8);
        const repos = await getRepo(user.username);
        const commits = await getCommit(repos);
        console.log(commits);
    }
    catch(err) {
        console.log(err);
    }
}

displayCommits();

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