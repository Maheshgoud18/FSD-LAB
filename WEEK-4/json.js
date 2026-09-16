const student = {
    name: "Sairaj",
    age: 20,
    course: "B24CS267",
    marks: 85
};

const jsonString = JSON.stringify(student);

console.log("JSON String:");
console.log(jsonString);

const jsonData = jsonString;
const obj = JSON.parse(jsonData);

console.log("Parsed Object:");
console.log(obj);