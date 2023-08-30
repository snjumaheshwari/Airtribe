const users = []

// Join user to the chart
// each web socket have an id. 
// whenever a client join, it will create a new connection .. 
function newUser(id, username, room){
    const user = {id, username, room};
    users.push(user);
    return user;
}

// get all members of a particular room 
function getIndividualRoomUsers(room){
    return users.filter(user => user.room == room);
}

// exit a user from room 
function exitRoom(id){
    const index = users.findIndex(user => user.id == id);
    if(index != -1){
        return users.splice(index, 1)[0];
    }
}

// Get current user
function getActiveUser(id) {
    return users.find(user => user.id === id);
  }

module.exports = {newUser, getIndividualRoomUsers, exitRoom, getActiveUser};