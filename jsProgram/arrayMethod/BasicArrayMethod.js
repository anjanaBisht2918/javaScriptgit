//.pop()
// let a = [2,3,4,6,7,7] 
//   let a1 =a.pop()                       //7
//   console.log(a1);

// console.log(a);                           //[ 2, 3, 4, 6, 7 ] modify remove last element 

//.sift()
// let a = [1,2,3,5,6,6]
//   let a1 =a.shift();
//   console.log(a1);                     //1 remove 

// console.log(a);                        //[ 2, 3, 5, 6, 6 ] modify ==remove first element from an array

//.push
// let a= [11,22,33,44,55,66]
// a.push(12)
// console.log(a);                       //[11,22,33,44,55,12] == add ele last

//.unshift
// let a= [11,22,33,44,55,66]
// a.unshift(10,12)
// console.log(a);                         //[10,12,11,22,33,44,55,66] ==add /insert ele first             

//.flat
 //case 1 :
// let a= [11,22,[33,44],55,66]
//  let a1 =a.flat()
// console.log(a1);                          //[ 11, 22, 33, 44, 55, 66 ] gives a new array after flaten a nested array

// //case 2
// let aa =[11,33,44,[33,55,6],[12,34],[22,33],6,7]
//   let a2 =aa.flat(3)
// console.log(a2); 

//case 3
// let aa =[11,33,44,[33,55,6],[[12,34],[22,33],6,7]]
//    let a2 =aa.flat(Infinity)
//  console.log(a2); 

//.splice() //remove the element
// let a = [22,33,44,1,2,3]
//   let a1 =a.splice(1,4)
// console.log(a);
// //2.
//  let aa = [22,33,44,1,2,3]
//   let aa1 =aa.splice(1,1,'a')
//   console.log(aa)
// console.log(aa.splice(1, 1, 'qwerty'));
// console.log(aa);

//.slice()
// let a = [12,23,44,55,66]
//    let a1 = a.slice(1,3)
//     console.log(a);       // this method not change the original array [ 12, 23, 44, 55, 66 ]
//     console.log(a1);     //[23,44]

let a = [12,23,44,55,66]
    let a1 = a.slice(1,3)
     console.log(a);       // this method not change the original array [ 12, 23, 44, 55, 66 ]
    console.log(a1);


