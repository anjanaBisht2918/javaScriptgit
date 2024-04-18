// const a =[1,3,4,5,6,7]
//      a.map(element,index,array);
  //  a.map()

  // Define a function to double a number
function double(x) {
     return x * 2;
   }
   
   // Define an array of numbers
    const numbers = [1, 2, 3, 4, 5];
   
  //  // Use map() to apply the double function to each element of the array
    const doubledNumbers = numbers.map(double);
   
  //  // Print the original array and the doubled array
  //  console.log("Original numbers:", numbers);
  //  console.log("Doubled numbers:", doubledNumbers);
  
   //define an array of number
   // const numbers = [12,23,,33,34,45,55,1,2,3]
        const filterNumbers = numbers.filter((numbers) => {if (numbers>12){
          return numbers
         }
         })
         console.log(filterNumbers);   //[ 23, 33, 34, 45, 55 ]

//or

const number = [12,13, 23, , 33, 34, 45, 55,1,2,3,4,];
const filteredNumbers = numbers.filter(number => number > 12);
console.log(filteredNumbers);

//define an array containing object {} === k-v pair ====of student
