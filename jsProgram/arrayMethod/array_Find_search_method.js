//.indexOf(arg) ,.lastIndexOf(arg)

// let a = [11,22,33,1,2,55 ,22,33,22]
//   let a1=a.indexOf(22)
//   console.log(a1)
//    let a2 =a.lastIndexOf(22)                 //-1 if we will not pass any value
//    console.log(a2);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// //let position = fruits.indexOf("Apple") + 1;
// let position = fruits.indexOf("Apple",1)
// console.log(position)
   
//.include()
 
// let a =[11,33,22,44,12,13,12,  {name :'Anjana'}]
//    let a1 =   a.includes(a.name)           //true/false
//      console.log(a1)                 //true

//.find  //boolean
  let a = [11, 33, 22, 44, 12, 13, 12, { name: 'Anjana' }];
   const a1 = a.find((ele)=> ele)
   console.log(a1)

// //Check if array 'a' contains an object with 'name' property equal to 'Anjana'
// const foundObject = a.find(element => typeof element === 'object' && element.name === 'Anjana');

// if (foundObject) {
//   console.log("The array contains an object with name 'Anjana'");
// } else {
//   console.log("The array does not contain an object with name 'Anjana'");
// }

 
// const numbers = [10, 20, 30, 40, 50];

// // Define a predicate function to check if a number is greater than 25
// function isGreaterThan25(number) {
//   return number > 25;
// }

// //call 
// const foundNumber = numbers.find(isGreaterThan25);

// // Print the result
// if (foundNumber !== undefined) {
//   console.log("The first number greater than 25 is:", foundNumber);
// } else {
//   console.log("No number greater than 25 found in the array.");
// }

 
//  let number =a.find (element=> typeof element ===Number );
//  if (number)
//  console.log("array contains Number");
// else 
// {
//     console.log("array does not contains number")
// }

//find index

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);
// console.log(first);                     //3

// function myFunction(value, index, array) {
//   return value > 18;
// }


// const temp = [27, 28,40, 30,40, 42, 35, 30];
// let high = temp.findLast(x => x > 40);


// const temp1 = [27, 28, 30, 40, 42, 35, 30];
// let pos = temp1.findLastIndex(x => x > 40);
// console.log(pos)                    //4


// //.sort()
// const char = ["B", "O", "A", "M"];          //[ 'A', 'B', 'M', 'O' ]
// char.sort()
// console.log(char)

// //.reverse
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits)

// //.map(callback(arg1,arg2,arg3))
// let arr = [12,13,12,43,2,3]
//   let newArr =arr.map(ele=>ele*2)
//   console.log(newArr)              //[ 24, 26, 24, 86, 4, 6 ]


//   //.filter(condition)

//   let arrr = [2,4,3,5,3,4]
//  let newArrr= arrr.filter((ele)=>ele >3)
//  console.log(newArrr);                 //[ 4, 5, 4 ]

