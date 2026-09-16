import EventEmitter from "events";
const eventEmitter=new EventEmitter();
console.log("==================================");
console.log("Node.Js EventEmitter Demonstration");
console.log("==================================\n");
console.log("Welcome to full stack development laboratory\n");
eventEmitter.on('welcome',()=>{
    console.log("Event listener executed.");
    console.log("Welcome to event driven programming in node.js");
});
console.log('Event "welcome" has been emmitted successfully.\n');
eventEmitter.emit('welcome');
console.log("\nProgram executed successfully.");