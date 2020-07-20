const DB = require('./store');


const addUser = (name) => {
    if (!name) {
        return Promise.reject('Nombre invalido');
    }
    const user =  {
        name,
    };

    return DB.add(user)
}


const listUsers = (filterName) => {
    return new Promise((resolve, reject) => {
        const response = DB.list(filterName);
        resolve(response);
    }) 
}


module.exports = {
    add: addUser,
    list: listUsers
}