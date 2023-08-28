### Build a real-time chat application using Node.js, Express.js, and Socket.IO.

* In this project, you will create a real-time chat application that allows multiple users to join chat rooms and communicate with each other. The application will be built using Node.js, Express.js, and Socket.IO for real-time communication.

## Requirements:

* Set up a basic Node.js project with Express.js, Socket.IO, and other necessary NPM packages.

* Create a simple web interface using HTML, CSS, and JavaScript to allow users to join chat rooms and send messages.

* Implement server-side logic using Node.js and Socket.IO to manage chat rooms, user connections, and message broadcasting.

* Implement the following Socket.IO events on the server-side:

    * connection: Handle a new user connection.

    * join: Add a user to a specific chat room.

    * message: Broadcast a message to all users in a chat room.

    * disconnect: Handle user disconnections and clean up user data.

* Implement corresponding Socket.IO event listeners on the client-side using JavaScript to update the user interface in real-time.

* Implement proper error handling for invalid chat room names, user names, and other potential issues.

* Test the chat application using multiple browser instances to simulate multiple users.

### Optional extension:

* Add a feature to allow users to send private messages to other users in the chat room.

* Add a feature that allows users to send and receive files, such as images and documents, within the chat application. Users should be able to upload a file, and the server should store it temporarily in memory or on disk and broadcast it to other users.

#### Feeling adventurous?

* Implement end-to-end encryption for private messages. This means that messages should be encrypted on the sender's side and decrypted on the receiver's side, ensuring that even if the messages are intercepted during transmission, they cannot be read without the decryption key.






Steps: 
1. npm init 

