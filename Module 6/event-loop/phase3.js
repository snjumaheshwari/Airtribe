const express = require('express');
const app = express();
const port = 3000;

console.log("Hello ");

app.get('/', (request, response) => {
    console.log("Hello world");
});
app.listen(port , () => {
    console.log(`server is listening to the port ${port}`)
});

console.log("Start");

for(let i=0; i<100; ++i){
    console.log("Inside for loop");
}

// microtask
process.nextTick(function(){
    console.log("Inside the next Tick which is micro task");
    let current = Date.now();
    // 1000 is in ms. let this time = t 
    while(Date.now() - current < 1000){
    } 
})

const timeOutScheduled = Date.now();
setTimeout(function(){
    const delay = Date.now() - timeOutScheduled;
    console.log(`Inside the set timeout function and is executed with the delay ${delay}`);
});
console.log("End");

/* OUTPUT: 

Hello
Start
Inside for loop -- 100 times
End
server is listening to the port 3000
Inside the next Tick which is micro task
Inside the set timeout function and is executed with the delay { t / t+1 / t+2 }

*/
