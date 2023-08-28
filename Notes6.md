
* PUBLIC REPO: AIRTRIBE-WEBSOCKETS-STREAMS

## Lecture Notes:
* Advance Node Js Concept
* Stream, Buffer and WebSockets

## Resources: 
    * JavaScript Visualizer 9000:  https://www.jsv9000.app/ 

## Projects: 
    * Real Time Chat Application 

## Self-Notes / Doubts / Question: 
    
* Agenda - 

- Understanding event loop
- Understanding call stack and callback queue
- Understanding web API's
- Understanding microtasks and macrotasks
- Understanding order of execution in node js event loop
- Node js event loop blocking
- Clustering
- Question and answers


MacroQueue - Timer, IO, Check, Close 

* Polling - 1 way communication, client asks  server responds. 

* Short polling: 
    - Constant Interval Polling: Periodically client requests to server and server responds.  

* Exponential back-off polling : When we are facing issue with the server, this is used. Instead of polling at constant interval, retry after delayed interval. for eg: 1 sec, 4 sec, 10 sec... 

* Long polling: 
 - Periodically client requests to server and server only respond if he have different response. Keep the connection for long time till the server have data. The connection is still https which is on top of tcp. The communication is still one way communication.

* Web Socketing: 
  * Tunelled Channel between client and server, can be used to send message bi-directionally. 
  * Client doesn't need to ask and server can send data when it have it. 
  * 

* Build Bi-Directional Communication Channel - 

- Username and channel group. 
- How many user are online (active room). 
- Channel Name
- Message are limited to the room. 
- Show other users who have joined, left. 
- User can send message in group. All the group user should recieve the same message with username who send the message. 

