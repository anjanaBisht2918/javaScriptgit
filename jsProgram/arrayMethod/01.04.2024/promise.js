async function execute()
{
console.log("login to the application");
let p = new Promise((resolve,reject)=> {
    //write asynchronous code
    setTimeout(() => {
        resolve("Navigate to homePage") 
        reject("error")
    }, 2000);

})



await p.then((msg)=>
{
    console.log(msg);
}).catch((msg)=>{console.log(msg);})


let p1 = new Promise((resolve,reject)=> {
    //write asynchronous code
    setTimeout(() => {
        resolve("fetch page tittle") 
        reject("error")
    }, 3000);

})

await p1.then((msg)=>
{
    console.log(msg);
}).catch((msg)=>{console.log(msg);})

console.log("logout");

}

Promise.all()
execute()































// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Simulating an error condition
//         const isError = Math.random() < 0.5; // 50% chance of error
//         if (isError) {
//             reject('Error occurred in p1');
//         } else {
//             resolve('First script');
//         }
//     }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Second script'), 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Third script'), 1500);
// });

// Promise.all([p1, p2, p3])
//     .then(values => {
//         console.log(values);  
//     })
//     .catch(error => {
//         console.error(error);
//     });
