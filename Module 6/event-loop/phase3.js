const express = require('express');
const app = express();
const port = 3000;

console.log("Hello ");

app.get('/', (request, response) => {
    console.log("Hello world");
});
app.listen(port , () => {
    console.log("server is listening to the port `{$port}`")
});


console.log("Start");

for(let i=0; i<100; ++i){
    console.log("Inside for loop");
}

process.nextTick(function(){
    console.log("Inside the next Tick which is micro task");
})

console.log("End");
