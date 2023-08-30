const http = require('http');
const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const { newUser, getActiveUser, getIndividualRoomUsers, exitRoom } = require('./helper/userHelper');
const formatMessgage = require('./helper/formatDate');

const app = express();
// express server doesnt directly provoide way to run web socket so we use http 
const server = http.createServer(app);
const io = socketio(server);


// set the client folder
app.use(express.static(path.join(__dirname, 'client')));
const PORT = process.env.PORT || 3000;


// this is default when client connects to the server.. 
io.on('connection', socket => {
    // recieve message join Room 
    socket.on('joinRoom', ({ username, room }) => {
        const user = newUser(socket.id, username, room);
        socket.join(user.room);
        socket.emit('message', formatMessgage("bitsylife", "Message are private in this room!"));

         // broadcast message other than the user itself 
         socket.broadcast.to(user.room).emit('message', 
         formatMessgage("bitsylife", `${user.username} has joined the room`));

         // io.to send to everyone  --> send the roomUser update 
         io.to(user.room).emit('roomUsers', {
            room: user.room, 
            users: getIndividualRoomUsers(user.room)
         });
    });

    // send chat message to everyone
    socket.on('chatMessage', message => {
        const user = getActiveUser(socket.id);  
        io.to(user.room).emit('message', formatMessgage(user.username, message));
    });

    // leave room -- this is default when say 
    socket.on('disconnect', () => {
        const user = exitRoom(socket.id);
        // io.to or socket.broadcast will be the same here 
        io.to(user.room).emit('message', formatMessgage("bitsylife", `${user.username} has left the room`));
        io.to(user.room).emit('roomUsers', {
            room: user.room, 
            users: getIndividualRoomUsers(user.room)
         });
    });
})


server.listen(PORT, () => console.log(`server is running on the port ${PORT}`));


/* in case of multiple server 

    Load Balance 
    and a db to save 

*/ 