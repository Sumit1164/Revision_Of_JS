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
    constructor() {
        this.species = "Human";
    }
    good() {
        console.log("Hello good morning");
    }
}
class Child extends Parent{
    constructor() {
        super();
        this.name = "Sumit";
        this.age = 21;
    }
    bad() {
        console.log("Hello bad morning");
    }
}
let child1 = new Child("Computer Science");