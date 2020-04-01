console.log('Before');

getUser(8, (user) =>{
    console.log('User: ',user);
    getRepo(user, (repos) => {
        console.log('Repos: ',repos);
    });
});

console.log('After');

function getUser(id, callback){
    setTimeout(() => {
        console.log('Middle...');
        callback({id: id, username: "Shubham"});
    }, 2000);
}

function getRepo(username, callback){
    setTimeout(() => callback(["a", "b", "c", username, "d"]), 2000);
}