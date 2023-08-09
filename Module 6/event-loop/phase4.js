console.log("Hello ");

for(let i=0; i<100; ++i){
    console.log("Inside for loop");
}

const TIME_WAIT = 1000;

console.log("End");

// microtask
Promise.resolve().then(() => {
    console.log("Promise is being resolved");
});

// microtask -- nextTick have higher priority than Promise 
process.nextTick(function(){
    console.log("Inside the next Tick which is micro task");
    let current = Date.now();
    // 100 is in ms 
    while(Date.now() - current < TIME_WAIT){
    } 
});


// macrotask - check
setImmediate(() => {
    console.log("Immediate");
});

const timeOutScheduled = Date.now();

// macrotask -- timer
setTimeout(function(){
    const delay = Date.now() - timeOutScheduled;
    console.log(`Inside the set timeout function and is executed with the delay ${delay}`);
}, 0);


// macrotask -- timer
setTimeout(function(){
    const delay = Date.now() - timeOutScheduled;
    console.log(`Inside the set timeout function and is executed with the delay ${delay}`);
}, TIME_WAIT);



console.log("End");
