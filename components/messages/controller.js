const DB = require('./store');
const { socket } = require('../../socket');
const config = require('../../config');

const addMessage = (chat, user, message, file) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[message controller] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        }else {

            let fileUrl = '';
            if (file) {
                fileUrl = `${config.host}${config.port}${config.publicRoute}/files/${file.filename}`;
            }
            const singleMessage = {
                chat: chat,
                user: user,
                message: message,
                date: new Date(),
                file: fileUrl
            }

            DB.add(singleMessage);  
            
            socket.io.emit('message', singleMessage);
            
            resolve(singleMessage);
        } 
    })  
}


const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        const response = DB.list(filterUser);
        resolve(response);
    })  
}


function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {
        if (!id || !message){
            return reject('invalid data');
        }

        const response = await DB.update(id, message);   
        resolve(response); 
    })
}



function deleteMessage(id){
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject('Id no existente')
        }

        DB.delete(id)
            .then(() => resolve())
            .catch(e => reject(e))     
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    delete: deleteMessage
}