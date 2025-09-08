const student = {
    name: "Sumit",
    age: 21,
    SGPA: 9.7,
    isGraduated: true,
    hobbies: ["coding", "reading", "gaming"],
    printInfo: function () {
        console.log("SGPA: = ", this.SGPA);
    }
};

const student2 = {
    eachSubMarks: 87
};
student2.__proto__ = student;




// Class in js

class Car{
    constructor(brand, mileage) {
        console.log("Car object created");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("Car started");
    }
    stop() {
        console.log("Car stopped");
    }
    SetBrand(brand) {
        this.brand = brand;
    }
}

let car1 = new Car("Lamborghini", 7);
console.log(car1);
let car2 = new Car("Ferrari", 5);
console.log(car2);


// Inheritance in JS
class Parent{
    constructor(name) {
        this.name = name;
        this.species = "Human";
    }
    good() {
        console.log("Hello good morning");
    }
}
class Child extends Parent{
    constructor(name) { 
        super(name);
    }
    bad() {
        console.log("Hello bad morning");
    }
}
let namObj = new Child("Sumit");


// Practice Problem 1

// You are creating a website for your college. Create a class User with properties like name, email. It also has a method called viewData() that allows user to view website data.

let Data = "Secreat Data information";
class User{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data viewed by user: ", Data);
    }
}

let user1 = new User("Sumit", "sumit@example.com");
let user2 = new User("Kasu", "kasu@example.com");

let teacher = new User("Mr. Smith", "mrsmith@example.com");


// Practice Problem 2

// Create a new class called Admin which inherits from User. Add a new method called editData() to Admin that allows it to edit website data.

class Admin extends User{
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        Data = "Data edited by admin";
    }
}
let admin1 = new Admin("Admin", "admin@example.com");




// Error handler in javaScript

let a = 5;
let b = 7;
console.log("Sum: ", a + b);
console.log("Sum: ", a + b);
console.log("Sum: ", a + b);
try {
    console.log("Sum: ", a + k); // error, k is not defined
} catch (error) {
    console.error("Error occurred: ", error);
} // error, k is not defined so it will throw an error and not print the next lines
console.log("Sum: ", a + b);
console.log("Sum: ", a + b);
console.log("Sum: ", a + b);
console.log("Sum: ", a + b);
