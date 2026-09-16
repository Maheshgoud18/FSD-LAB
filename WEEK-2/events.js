import EventEmitter from "events";

const e=new EventEmitter();
e.on("grade",(name,marks)=>{
    console.log("Name: ",name);
    console.log("Marks: ",marks);
})
e.emit("grade","Sairaj",85);