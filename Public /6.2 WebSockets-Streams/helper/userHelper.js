const users = []

// Join user to the chart
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

function getActiveUser(id){
    return users.find(user.filter(user => user.id == id));
}
