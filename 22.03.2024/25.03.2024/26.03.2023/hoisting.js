add(2,3) //invoking before declearation of function
function add(a,b){
  //  console.log(c)
    console.log(a+b)
  //  let c =30;

    console.log(b)
    var b =20; 
}


 //variable hoisting in case of fn expression

add1 (2,6)  //call before decle. fn ===>error (add is not a function)
var add1 =function(a,b)
{
    console.log(a+b)        
}

//vatiable hoisting in case of var
 console.log(a)            //undefined
 var a =10;           



console.log(c)      // c canot access before init
let c =30;

demo();
function demo() {
    let name;
    console.log(name); //undefined
        console.log(name1)  //can not access "name before initialization"
       let letDf = 'Anjana';
    console.log(name2)  //can access "name before initialization"
    var varDf = 'Anjana';

}
fun(); // undefined