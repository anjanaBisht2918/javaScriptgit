// Asynchronous ===when we deal with timeout and timeinterval ===we can handle it with promises* earliear callBack


console.log("login to lthe application");
setTimeout(() => {
    console.log("navigate to home page");
}, 2000);

setTimeout(() => {
    console.log("fetch the tittle of the webPage");
}, 2000);

console.log("logging out")
