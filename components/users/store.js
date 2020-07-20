const Model = require('./model');


function addUser(user) {
    const newUser = new Model(user);
    return newUser.save();
}

async function getUsers(filterName) {
    let filter = {};
    if (filterName != null){
        filter = {name: filterName}
    }
    const response = await Model.find(filter);
    return response;
}

module.exports = {
    add: addUser,
    list: getUsers
};