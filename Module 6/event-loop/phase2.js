console.log("Start");

for(let i=0; i<100; ++i){
    console.log("Inside for loop");
}

process.nextTick(function(){
    console.log("Inside the next Tick which is micro task");
})

console.log("End");

// OUTPUT: 
