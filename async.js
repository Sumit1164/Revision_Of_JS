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


                               // Promises in javascript

// let p = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     // resolve("Promise is resolved");
//     reject("Promise is rejected");
// });

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data fetched for ID: ", dataId);
//             resolve("Success");
//         }, 3000);
//     });
// }

                    // solve the Callback Hell problem using Promise Chain
                 

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then(() => {
//     console.log(res);
//   });
// });      //  -> iska simple version

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });




// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Promise hu");
//         // resolve("Promise is resolved");
//         reject("Network error")
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled", res);
// });

// promise.catch((err) => {
//     console.log("Some error occured", err);
// });


/*

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function is called for data 1");
            resolve("Async Function is resolved");
        }, 4000);
    });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Function is called for data 2");
      resolve("Async Function is resolved");
    }, 4000);
  });
}

console.log("Fetching data1...");
asyncFunc1().then((res) => {
  console.log("Fetching data2...");
  asyncFunc2().then((res) => {});
});
*/






// ------------------------> Async Await <-------------------------------------- \\













// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
}

// Optional: Close lightbox on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    closeLightbox();
  }
});