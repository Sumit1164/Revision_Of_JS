/*
console.log("after 2 seconds hi function will be called");
function hi() {
    console.log("Hello! How are you?");
}
setTimeout(hi, 2000); // after 2 seconds hi function will be called

console.log("I am first"); 


// Callbacks Synchronous

function sum(a, b) {
    console.log("Sum of " + a + " and " + b + " is: " + (a + b));
}
function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(5, 7, sum);

// Callbacks Hell (Asynchronous)
function getData(dataId) {
    setTimeout(() => {
        console.log("Data fetched for ID: " + dataId);
    }, 2000);
}
getData(5);
getData(4);
getData(3);





// Callbacks Hell (Asynchronous)
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data fetched for ID: ", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
getData(57, () => {
    getData(75, () => {
        getData(23, () => {
            getData(45, () => {
                getData(89);
            })
        })
    });
});


*/

const { reject } = require("async");



// Promises in javascript

let p = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    // resolve("Promise is resolved");
    reject("Promise is rejected");
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched for ID: ", dataId);
            resolve("Success");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}