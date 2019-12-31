//Node JS Events 
//Node Event Emitter
//Node JS - 2Types of Events
//Sytem Events - c++/ libuv , http ,express 
//Customised Events
const events = require("events");

const eventEmitter = new events.EventEmitter();

//Listener1
const listener1 = ()=>{
    console.log("I am Listener 1");
}
//Listener2
const listener2 = ()=>{
    console.log("I am Listener 2");
}
//// Bind the connection event with the listner1 function
eventEmitter.addListener("connection",listener1);
eventEmitter.on("connection",listener2);

eventEmitter.emit("connection");