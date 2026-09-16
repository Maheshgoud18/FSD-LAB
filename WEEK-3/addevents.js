let eventQueue=[];
function addEvent(event){
    eventQueue.push(event);
    console.log("Event added: "+event);
}
function processEvents(){
    while(eventQueue.length>0){
        let event=eventQueue.shift();
        console.log("Processing event: "+event);
    }
}
addEvent("login");
addEvent("Download File");
console.log("\n Processing events...");
processEvents();