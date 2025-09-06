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