
//Promise =object
console.log("open browser and enter the url")
console.log("dashbord page will be displayed");
console.log("click on login module and enter the details")
let p = new Promise((resolve,reject)=> {
 
    setTimeout(() => {
       
      // resolve( {username: "anjana", pwd :"123A@an" }) 
         resolve(p1)                        //we can pass another promise objeect ,function,object any thing
       reject("username and password is incorrect")
    }, 2000);

})
 
//promise chaining
/*.then((result) => {
    console.log(result)
    
}).catch(err=>console.log(err))*/
  
let p1 = new Promise((resolve ,reject)=>
{
    setTimeout(()=>
    {
        //resolve("msg :user is logged in")
        reject("not logged in")},3000)
})

Promise.all([p,p1]).then(result=>console.log(result)).catch(error => console.log(error));




// await p.then((result) => {
//     console.log(result)   
// }) 
// .catch(err=>console.log(err))
 
 console.log("home page will be displayed")
