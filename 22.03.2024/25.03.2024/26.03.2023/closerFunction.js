//closer ====>store parent vriable/memory  and child function can access that variable
//when it comes : when we have nested function
function outer(a) {

    let count = 0;
     let b = 20;         //these are the values which act as a private variable
    function inner(a) {
        console.log(count)
        console.log(a)
    }
     
    return inner  //inner()
}
 let n = outer(20)  //outer(20)
 n() //inner fn call
 n()