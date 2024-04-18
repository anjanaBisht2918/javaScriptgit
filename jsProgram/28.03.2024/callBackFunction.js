function login(un,pwd) {
    console.log(`credentials are : ${un} ${pwd}`)
    
}
function addProduct(name) {
    console.log(`product : ${name}`)
    
}
//highe  order function==>accept another function as a parameter
function buy(d1,d2,d3,callback1,callback2) {
    
    console.log("before buying any product add the product")
    callback1(d1,d2)  //invoking
    callback2(d3) //addProduct("bag")
        
    console.log("now you can buy a product")
    setTimeout(() => {
        callback2(d3)
    }, 2000);
     
}
buy("anjana","ab123","bag",login,addProduct)