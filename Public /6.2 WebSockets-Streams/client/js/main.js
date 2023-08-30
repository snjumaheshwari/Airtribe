// client side javascript
const chatForm = document.getElementById('chat-form');
const chatMessgae = document.getElementById('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// find username and room from UI 
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});


// for each client -- we have one socket. 
// create a socket object to identify this client . 
const socket = io();

// if you want to send message --> we emit 

socket.emit('joinRoom', {username, room});

socket.on('message', (message) => {
    outputMessage(message);
});

socket.on('roomUsers', ({room, users})  => {
    outputRoomName(room);
    outputOnlineUsers(users);
});

chatForm.addEventListener('submit', event => {
    event.preventDefault();
    let message = event.target.elements.msg.value;
    message = message.trim();
    console.log("sending chat message");
    socket.emit('chatMessage', message);
    console.log("sending chat message ??");

    event.target.elements.msg.value = '';
    event.target.elements.msg.focus();
  
});

document.getElementById('leave-btn').addEventListener('click', () => {
    const leaveRoom = confirm('pakka jana hai? ');
    if(leaveRoom){
        window.location = '../index.html';
    }
});


function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
  
    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerText = message.username;
    p.innerHTML += `<span>${message.time}</span>`;
    div.appendChild(p);
  
    const para = document.createElement('p');
    para.classList.add('text');
    para.innerText = message.text;
    div.appendChild(para);
  
    document.querySelector('.chat-messages').appendChild(div);
  }
  
  function outputRoomName(room) {
    roomName.innerText = room;
  }
  
  function outputOnlineUsers(users) {
    userList.innerHTML = '';
    users.forEach((user) => {
      const li = document.createElement('li');
      li.innerText = user.username;
      userList.appendChild(li);
    });
  }