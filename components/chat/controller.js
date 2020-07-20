const DB = require('./store');


const addChat = (users) => {
    return new Promise((resolve, reject)=> {
        if (!users || !Array.isArray(users)) {
            return reject('Creación de chat invalido');
        }
    
        const chat = {
            users: users
        };
    
        DB.add(chat);
        resolve(chat);
    })  
}


const listChats = (userId) => {
    return DB.list(userId)
}



module.exports = {
    add: addChat,
    list: listChats
}