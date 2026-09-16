


function performTask(number,callback){
    console.log("Performing task");
    let result=number*number;
    callback(result);
}
function displayResult(result){
    console.log("Task Completed");
    console.log("Result is: "+result);
}
performTask(5,displayResult);