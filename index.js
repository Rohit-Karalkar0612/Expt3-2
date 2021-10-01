// creating and printing student object 
let student = {
    name: "Rohit", 
    rollno: 31, 
    division: "D15A", 
    age: "20",
}
console.log("Printing student object: ", {student})


// using class 
class Student {
    constructor(name, rollno, division, age) { 
        this.name = name;
        this.rollno = rollno; 
        this.division = division; 
        this.age = age;
    }
}

let rohit = new Student("Rohit", 31, "D15A", "20");
console.log("Printing student object (object created through constructor): ", {rohit})
 
function validate() {
    const check = document.getElementById("validateThis").value; 
    console.log(check);
    if (isNaN(check) || check == 0) { 
        alert("Invalid input")
        throw new Error("Invalid Input ");
    } 
    else {
    console.log("Valid");
    }
}
